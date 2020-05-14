const pug = require('pug');

function transformPugToHtml(src) {
  try {
    const html = pug.render(src, { doctype: 'html' });
    const content = JSON.stringify(html);
    return `module.exports = ${content};`;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  process(src, filePath) {
    return transformPugToHtml(src, filePath);
  },
};
