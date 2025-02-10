require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['react-app'],
    rules: {
        'no-restricted-globals': 'off'
    }
};