// https://github.com/MeCKodo/webpack-browser-log
// 之所以不用他的，是因为它依赖webpack2，而3会报错，同时代码也有些改动

var express = require('express');
var webpack = require('webpack');
var FriendLyErrorsPlugin = require('friendly-errors-webpack-plugin');

var app = express();

function WebpackBrowserLog(webpackConfig, options) {
    options.errorsPluginOptions && webpackConfig.plugins.push(new FriendLyErrorsPlugin(options.errorsPluginOptions));
    this.init(webpackConfig, options || {});
}

WebpackBrowserLog.prototype = {
    constructor: WebpackBrowserLog,

    init: function init(webpackConfig, options) {
        var compiler = webpack(webpackConfig);
        var devMiddleConfig = options.devMiddleware || { // https://github.com/webpack/webpack-dev-middleware#usage
            publicPath: webpackConfig.output.publicPath,
            quiet: true,
        };
        var hotMiddleConfig = options.hotMiddleware || { // https://github.com/glenjamin/webpack-hot-middleware#config
            log: () => {},
            heartbeat: 2000,
        };
        var devMiddleware = this.devMiddleware(compiler, devMiddleConfig);

        var hotMiddleware = this.hotMiddleware(compiler, hotMiddleConfig);

        app.use(devMiddleware);

        app.use(hotMiddleware);

        options.setup && options.setup(app, express);

        devMiddleware.waitUntilValid(options.waitUntilValid || function waitUntiValid() {});

        this.listen(options.port || 3000);
    },

    devMiddleware: function devMiddleware(compiler, devOptions) {
        return require('webpack-dev-middleware')(compiler, devOptions);
    },

    hotMiddleware: function hotMiddleware(compiler, hotOptions) {
        return require('webpack-hot-middleware')(compiler, hotOptions);
    },
    
    listen: function listen(port) {
        app.listen(port, function error(err) {
            if (err) {
                console.log(err);
            }
        });
    },
};

module.exports = WebpackBrowserLog;
