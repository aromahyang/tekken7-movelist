const path = require('path');
const commands = require('./commands');

const [, , action, dist] = process.argv;
if (commands.hasOwnProperty(action)) {
  commands[action]({
    root: path.resolve(__dirname, '..'),
    params: dist,
  });
}
