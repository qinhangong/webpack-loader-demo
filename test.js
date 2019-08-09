var SourceMapIndexGenerator = require('source-map-index-generator');
// var generator = new SourceMapIndexGenerator();
const fs = require('fs');

// Add the index coordinate mapping
fs.readFile('./src/index.js', { encoding: 'utf8' }, (err, data) => {
    const Concat = require('concat-with-sourcemaps');
    var concat = new Concat(true, 'a.js', '\r\n');
    concat.add(null, data);
    var sourceMapForContent = concat.sourceMap;
    console.log('sourceMapForContent========', sourceMapForContent);
});
