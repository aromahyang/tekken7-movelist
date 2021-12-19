const context = require.context('./', false, /\.png$/);
const thumbnails = {};
context.keys().forEach((key) => {
  const filename = key.replace('./', '');
  const resource = require(`./${filename}`);
  const namespace = filename.replace('_thumbnail.png', '');
  thumbnails[namespace] = JSON.parse(JSON.stringify(resource)).default;
});

export default thumbnails;
