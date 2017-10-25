const path = require('path');
var webpackConfig = require('./webpack.config.js');

// Karma configuration
// Generated on Mon Oct 23 2017 10:27:51 GMT-0700 (Pacific Daylight Time)
module.exports = function(config) {
    config.set({
        // Base path that will be used to resolve all patterns (eg. files, exclude).
        basePath: '',

        // Frameworks to use.
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // List of files / patterns to load in the browser.
        files: ['test/index.js'],

        // List of files to exclude.
        exclude: [],

        // Preprocess matching files before serving them to the browser.
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // Source files, that you wanna generate coverage for
            // (these files will be instrumented by Istanbul).
            'src/**/*.js': ['coverage'],

            // Test files.
            'test/index.js': ['webpack']
        },

        // Webpack watches dependencies.
        // Note: entry field should be empty or ignored,
        // because we will feed files specified above into webpack as entries.
        webpack: webpackConfig,

        // Test results reporter to use.
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage-istanbul'],

        // Any of these options are valid: https://github.com/istanbuljs/istanbul-api/blob/47b7803fbf7ca2fb4e4a15f3813a8884891ba272/lib/config.js#L33-L38
        coverageIstanbulReporter: {
            // Reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
            reports: ['html', 'text-summary'],

            // Base output directory. If you include %browser% in the path it will be replaced with the karma browser name.
            dir: path.join(__dirname, 'coverage'),

            // If using webpack and pre-loaders, work around webpack breaking the source path.
            fixWebpackSourcePaths: true,

            // Stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`.
            skipFilesWithNoCoverage: true,

            // Most reporters accept additional config options. You can pass these through the `report-config` option.
            'report-config': {
                // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
                html: {
                    // outputs the report in ./coverage/html
                    // subdir: 'html'
                }
            },

            // Enforce percentage thresholds.
            // Anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode.
            thresholds: {
                emitWarning: false, // Set to `true` to not fail the test command when thresholds are not met.
                global: {
                    // Thresholds for all files.
                    statements: 50,
                    lines: 50,
                    branches: 50,
                    functions: 50
                },
                each: {
                    // Thresholds per file.
                    statements: 50,
                    lines: 50,
                    branches: 50,
                    functions: 50,
                    overrides: {
                        'baz/component/**/*.js': {
                            statements: 50
                        }
                    }
                }
            }
        },

        // Web server port.
        port: 9876,

        // Enable / disable colors in the output (reporters and logs).
        colors: true,

        // Level of logging.
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes.
        autoWatch: true,

        // Start these browsers.
        // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom).
        phantomjsLauncher: {
            exitOnResourceError: true
        },

        // Continuous Integration mode
        // If true, Karma captures browsers, runs the tests and exits.
        singleRun: false,

        // Concurrency level
        // How many browser should be started simultaneous.
        concurrency: Infinity,

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-webpack',
            'karma-coverage',
            'karma-coverage-istanbul-reporter'
        ]
    });
};
