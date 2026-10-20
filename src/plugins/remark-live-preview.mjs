// In component and pattern files, puts a live preview in front of every ```html block.
// The preview renders that exact HTML; the page supplies the brand and the resolved CSS.
import { visit } from 'unist-util-visit';

const PREVIEWABLE = /\/(?:brands\/[^/]+|system)\/(?:components|patterns)\/[^/]+\.md$/;

export default function remarkLivePreview() {
  return (tree, file) => {
    const path = (file.path ?? file.history?.[0] ?? '').replaceAll('\\', '/');
    if (!PREVIEWABLE.test(path)) return;
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'html' || !parent) return;
      parent.children.splice(index, 0, { type: 'html', value: `<ds-preview><template>${node.value}</template></ds-preview>` });
      return index + 2;
    });
  };
}
