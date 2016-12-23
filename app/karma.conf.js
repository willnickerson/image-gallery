exports.config = {

    allScriptsTimeout: 11000,

    //   specs: [
    //     'test-e2e/**/*.js'
    //   ],

    suites: {
        home: 'test-e2e/home.test.js',
        full: 'test-e2e/**/*.test.js'
    },

    capabilities: {
        browserName: 'chrome'
    },

    // seleniumAddress: 'http://localhost:4444/wd/hub',

    baseUrl: 'http://localhost:8080',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};

// const webpackConfig = require('./webpack.config');
// webpackConfig.entry = {};

// module.exports = function(config) {
//     config.set({

//     // base path that will be used to resolve all patterns (eg. files, exclude)
//         basePath: '',


//     // frameworks to use
//     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//         frameworks: ['mocha', 'chai'],


//     // list of files / patterns to load in the browser
//         files: [
//             './src/app.js',
//             './node_modules/angular-mocks/angular-mocks.js',
//             './test/**/*test.js'
//         ],

//     // list of files to exclude
//     // exclude: ['node_modules'
//     // ],


//         webpack: webpackConfig,

//     // preprocess matching files before serving them to the browser
//     // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
//         preprocessors: {
//             './src/app.js' : ['webpack'],
//             './test/**/*.js' : ['babel']
//         },

//     // test results reporter to use
//     // possible values: 'dots', 'progress'
//     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//         reporters: ['spec'],


//         // web server port
//         port: 9876,


//         // enable / disable colors in the output (reporters and logs)
//         colors: true,


//         // level of logging
//         // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//         logLevel: config.LOG_INFO,


//         // enable / disable watching file and executing tests whenever any file changes
//         autoWatch: true,


//         // start these browsers
//         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//         browsers: ['Chrome'],


//         // Continuous Integration mode
//         // if true, Karma captures browsers, runs the tests and exits
//         singleRun: false,

//         // Concurrency level
//         // how many browser should be started simultaneous
//         concurrency: Infinity
//     });
// };
