import { glob , globSync, globStream, globStreamSync, Glob } from 'glob'

const testFiles = glob.sync('**/*.test.js');

console.log(testFiles); // ['tests/01.test.js', 'tests/02.test.js', …]

// all js files, but don't look in node_modules
const jsfiles = await glob('**/*.js', { ignore: 'node_modules/**' });

console.log(jsfiles); // ['index.js', 'lib/01.js', …]