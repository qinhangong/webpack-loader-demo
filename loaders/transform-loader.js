const babel = require('@babel/core');
const loaderUtils = require('loader-utils');
module.exports = function(source, map) {
    const callback = this.async();
    babel.transform(
        source,
        {
            presets: ['@babel/preset-env']
        },
        (err, result) => {
            const { code } = result;
            callback(err, code, map);
        }
    );
};
