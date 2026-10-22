// Print the CSS rules whose selector matches a regex, with their @media/@supports context.
// Usage (run from the design-system repo root so postcss resolves from its node_modules):
//   node .claude/skills/scrape-brand/scripts/rules.mjs <file.css> '<selector regex>'
// Example: node .claude/skills/scrape-brand/scripts/rules.mjs /tmp/x/repo/assets/css/site.css '\.btn|\.hero\b'
import postcss from 'postcss';
import { readFileSync } from 'node:fs';

const [file, pattern] = process.argv.slice(2);
if (!file || !pattern) {
  console.error("Usage: rules.mjs <file.css> '<selector regex>'");
  process.exit(1);
}
const re = new RegExp(pattern);
postcss.parse(readFileSync(file, 'utf8')).walkRules((rule) => {
  if (!re.test(rule.selector)) return;
  const ctx = rule.parent.type === 'atrule' ? `@${rule.parent.name} ${rule.parent.params} ` : '';
  const decls = rule.nodes
    .filter((n) => n.type === 'decl')
    .map((d) => `${d.prop}: ${d.value}${d.important ? ' !important' : ''}`)
    .join('; ');
  console.log(`${ctx}${rule.selector.replace(/\s+/g, ' ')} { ${decls} }`);
});
