
module.exports = (config) => {

    const karma = config;

    karma.set({
        files: [
            { pattern: 'src/spec.module.js' },
        ],
        preprocessors: {
            '**/spec.module.js': ['webpack']
        },
        browsers: ['Nightmare'],
        frameworks: [
            'jasmine',
        ],
        reporters: ['progress'],
    });

    config.set({
        nightmareOptions: {
            width: 800,
            height: 600,
            show: false,
            devTools: false
        },
        webpackMiddleware: {
            stats: 'minimal'
        }
    });
};
