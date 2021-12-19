const context = require.context('./', false, /.json$/);
const all = {};
context.keys().forEach((key) => {
  const filename = key.replace('./', '');
  const resource = require(`./${filename}`);
  const namespace = filename.replace('.json', '');
  all[namespace] = JSON.parse(JSON.stringify(resource));
});
export default all;
