module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables'
    ].map(require.resolve),
    env: {
        browser: true,
        node: true,
        amd: false,
        mocha: false,
        jasmine: false
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true
        }
    },
    globals: {},
    rules: {
        'comma-dangle': [2, 'never']
    }
};
