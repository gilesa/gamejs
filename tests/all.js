// browser env
exports.testGamejs = require('./gamejs');
exports.testSprite = require('./gamejs/sprite');

// start the test runner if we're called directly from command line
if (require.main == module.id) {
    require('test').run(exports);
}