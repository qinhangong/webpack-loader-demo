const validate = require('schema-utils');
const loaderUtils = require('loader-utils');
const uglify = require('uglify-es');
// const schema = {
//     type: 'object',
//     properties: {
//         filename: {
//             type: 'string'
//         }
//     },
//     additionalProperties: false
// };

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    // validate(schema, options, 'minify-loader');
    const reg = /console.log\([\s\S]*?\);/g;
    source = source.replace(reg, '');
    const filename = this.resourcePath.split('/').pop();
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
