const validate = require('schema-utils');
const loaderUtils = require('loader-utils');
const uglify = require('uglify-es');
const schema = {
    type: 'object',
    properties: {
        filename: {
            type: 'string'
        },
        isDelLog: {
            type: 'boolean'
        }
    },
    additionalProperties: true,
    required: ['filename', 'isDelLog']
};

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    validate(schema, options, 'del-log-loader');
    const sourceName = this.resourcePath.split('/').pop();
    const { isDelLog, filename = sourceName } = options;
    if (isDelLog) {
        const reg = /console.log\([\s\S]*?\);/g;
        source = source.replace(reg, '');
    }
    const result = uglify.minify(
        { [filename]: source },
        {
            sourceMap: {
                includeSources: true
            }
        }
    );
    const { error, map } = result;
    this.callback(error, source, map);
};
