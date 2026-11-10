const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "out");
const pages = [];

function walk(directory) {
  for (const name of fs.readdirSync(directory)) {
    const file = path.join(directory, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file);
    else if (name.endsWith(".html")) pages.push(file);
  }
}

if (!fs.existsSync(out)) throw new Error("Lancez npm run build avant l’audit SEO.");
walk(out);
const issues = [];
const canonicals = new Map();

function match(html, expression) {
  return html.match(expression)?.[1]?.replace(/\s+/g, " ").trim() || "";
}

for (const file of pages) {
  const relative = path.relative(out, file);
  const html = fs.readFileSync(file, "utf8");
  const noindex = /<meta name="robots" content="noindex/i.test(html);
  const title = match(html, /<title>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = match(html, /<link rel="canonical" href="([^"]*)"/i);
  if (!title) issues.push(`${relative}: title manquant`);
  if (!description) issues.push(`${relative}: description manquante`);
  if (!canonical && !noindex) issues.push(`${relative}: canonical manquante`);
  if ((html.match(/<h1\b/gi) || []).length !== 1) issues.push(`${relative}: nombre de H1 incorrect`);
  if (canonical && !noindex && !relative.startsWith("404") && canonicals.has(canonical)) issues.push(`${relative}: canonical dupliquée avec ${canonicals.get(canonical)}`);
  if (canonical && !noindex && !relative.startsWith("404")) canonicals.set(canonical, relative);
  for (const schema of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(schema[1]); } catch (error) { issues.push(`${relative}: JSON-LD invalide (${error.message})`); }
  }
  for (const link of html.matchAll(/href="([^"]+)"/g)) {
    const href = link[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!pathname || pathname.startsWith("/_next/")) continue;
    const target = pathname.startsWith("/") ? path.join(out, pathname) : path.resolve(path.dirname(file), pathname);
    const candidates = [target, `${target}.html`, path.join(target, "index.html")];
    if (!candidates.some(fs.existsSync)) issues.push(`${relative}: lien interne cassé ${href}`);
  }
}

const cityPages = pages.filter((file) => {
  const relative = path.relative(out, file);
  return relative.split(path.sep).length >= 3 && !relative.startsWith(`blog${path.sep}`) && !relative.startsWith(`categorie${path.sep}`);
});
if (cityPages.length) issues.push(`${cityPages.length} page(s) ville inattendue(s) dans l’export`);
const nonBlogPages = pages.filter((file) => !path.relative(out, file).startsWith(`blog${path.sep}`));
if (nonBlogPages.length > 60) issues.push(`export hors blog anormalement volumineux (${nonBlogPages.length} pages HTML)`);

if (issues.length) {
  console.error(`Audit SEO échoué (${issues.length} problème(s)):\n- ${issues.join("\n- ")}`);
  process.exit(1);
}
console.log(`Audit SEO réussi : ${pages.length} pages HTML, métadonnées, H1, canonicals, JSON-LD et liens internes valides.`);
