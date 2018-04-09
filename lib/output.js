// const path = require('path');
const config = require('./config.js');

let outputPath = config.outputPath;
let publicPath = config.publicPath;

module.exports = {
    path: outputPath,
    publicPath: publicPath,
    filename: '[name].entry.[chunkhash].js',
    chunkFilename: '[id].[chunkhash].bundle.js'
}

