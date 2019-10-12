export function nodeToHtml(root) {
  let html = '';
  process(root);
  return html;

  function process(node) {
    if (node.tag) {
      html += '<' + node.tag;

      if (node.data) {
        for (let name in node.data.attrs) {
          html += ' ';
          html += name;
          html += '="';
          html += node.data.attrs[name];
          html += '"';
        }
      }

      html += '>';
    }

    if (node.text)
      html += node.text;

    if (node.children)
      for (let i = 0; i < node.children.length; i++)
        process(node.children[i]);

    if (node.tag)
      html += '</' + node.tag + '>';
  }
}
