const path = require('path');
const fs = require('fs');

const component = require('./function');
const styles = require('./styles');

function create(dist, str) {
  if (!fs.existsSync(dist)) {
    fs.writeFileSync(dist, str);
  }
}

module.exports = ({ root, params }) => {
  const dir = path.resolve(root, 'components', params);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const name = path.basename(params);
  // index.js
  create(path.resolve(dir, 'index.js'), `export { default } from './${name}';`);

  // component
  create(path.resolve(dir, `${name}.js`), component({ name }));

  // styles
  create(path.resolve(dir, `${name}.module.css`), styles());
}
