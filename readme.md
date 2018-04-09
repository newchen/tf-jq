## 基于webpack + jq的单页和多页方案


### 1、使用

```javascript
// 安装依赖
npm i tf-jq --save-dev

// 打包生成第3方依赖，不在构建时运行，提高构建速度
npm run vendor ===> tfjq vendor 

// 开发环境
npm run start ===> tfjq start

// 生产环境 
npm run build ===> tfjq build 
```

### 2、配置支持

支持在根目录的config.js中配置，如下：

```javascript
module.exports = {
    /*
        模式，是单页面(single)还是多页面(mul)模式，默认多页面
        ps：
          如果是mul模式，一个页面文件夹中必须有：tplName、entryName、contentPageName命名的这3个文件，
          如果是single模式，必须有：entryName、contentPageName命名的2个文件
    */
    mode: 'mul',

    pagesPath: './src/pages/', // 存放页面的路径

    singleFullPagePrefix: '@', // mode为'single'时才有作用，单页面模式的主布局页面(layout)、404、登陆等页面是一个完整页面，需要添加该前缀， 请不要与skipDirPrefix值一致
    
    skipDirPrefix: '_', // 在pagesPath下面，如果目录以该值为前缀，跳过JS入口检测

    tplName: 'tpl.js', // HtmlWebpackPlugin插件引用的模版名称，mode为'mul'时才有作用
    entryName: 'index.js', // 页面引用的JS入口名称
    contentPageName: 'content.html', // 内容页面名称，用于JS加载html文件，使html改变的时候页面会自动刷新

    htmlMini: false, // 是否对html进行压缩
    
    // output.path路径
    outputPath: './dist',
    
    // output.publicPath路径，需要以'/'结尾
    publicPath: '/',

    ieSupport: false, // 是否需要支持低版本IE
    
    // 别名
    alias: {
    /*
        // 目录别名
        fonts: './src/assets/fonts',
        imgs: './src/assets/imgs',
        layout: './src/layout',
        pages: './src/pages',
        utils: './src/utils',
        vendor: './src/vendor',
        
        // 文件别名
        layout: './src/pages/layout/layout.js',
        'babel-polyfill': './node_modules/babel-polyfill/dist/polyfill.js' // 因为IE兼容，所以不用min版的，自己压缩
    */
    },

    srcPath: './src', // 代码根路径

    useESlint: true, // 是否开启ESlint检测

    cssModules: false, // 是否开启css modules

    proxy: {
        /*"/api": {
            "target": "http://jsonplaceholder.typicode.com/",
            "changeOrigin": true,
            "pathRewrite": { "^/api" : "" }
        }*/
    },
    
    // 是否开启https及相关证书配置，证书文件路径相对于package.json 
    https: false, /* {
        cert: "path-to-cert-file.pem", 
        key: "path-to-key-file.pem",
        cacert: "path-to-cacert-file.pem"
    }*/

    port: 8880,
    host: '127.0.0.1',

    imgBase64Limit: 1024 * 8, // 小于多少转为base64
    imgCompressLimit: 1024 * 50, // 超过多少压缩图片

    // assetsPath: './src/assets', // 静态资源路径
    
    // dll相关配置
    dll: {
        srcPath: './vendor', // 打包要读取的文件夹目录
        outputPath: './src/vendor', // 文件打包到哪个目录
    
        /*// 读取哪些文件打包，
        // 注意，除了node_modules目录下面的，只能是srcPath目录下面的文件
        entry: {
            vendor: ['jquery', 'babel-polyfill'],
            css: ['./vendor/a.css', './vendor/b.css'],
            
            iePolyfill: [
                './vendor/ie8_patch/es5_safe.min.js', 
                './vendor/ie8_patch/html5shiv.min.js',
                './vendor/ie8_patch/json.min.js',
                './vendor/ie8_patch/respond.min.js',
            ]
        }*/
    },

    extractAllChunks: false, // extract-text-webpack-plugin插件：是否将分散的css文件合并成一个文件

    autoprefixer: ['ie>=8', '>1% in CN'], // css补全前缀，浏览器支持

    // svgPath: './src/assets/svg' // svg存放目录，可以是一个数组  // 不支持了，用不到
}
```

### 3、webpack.config.js

还可在根目录新建webpack.config.js文件，重写相关配置，如下：

```javascript
module.exports = function (webpackConfig, env) {
    // ...

    return webpackConfig;
}

```
