const path = require('path');
const SRC = path.join(__dirname, 'src/');
const NODE_MODULES = path.join(__dirname, 'node_modules/');

module.exports = {
    mode: 'development',
    entry : './src',
    output: {
        path: __dirname + '/dist',
        filename: 'my-app.js'
    },
    resolve: {
        modules : [SRC, NODE_MODULES, path.join(SRC, 'modules')]
    }
};