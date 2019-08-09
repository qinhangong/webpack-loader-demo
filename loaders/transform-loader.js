const babel = require('@babel/core');

module.exports = function(source, map) {
    const callback = this.async();
    babel.transform(
        source,
        {
            compact: true,
            presets: ['@babel/preset-env']
        },
        (err, result) => {
            const { code } = result;
            callback(err, code, map);
        }
    );
};
