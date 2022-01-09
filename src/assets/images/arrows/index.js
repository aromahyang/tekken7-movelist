const context = require.context('./', false, /.svg$/);
const all = {};
context.keys().forEach((key) => {
  const filename = key.replace('./', '');
  const resource = require(`./${filename}`);
  const namespace = filename.replace('.svg', '');
  all[namespace] = JSON.parse(JSON.stringify(resource)).default;;
});
export default all;
