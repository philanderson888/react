console.log(` `);
console.log(`====================================================`);
console.log(`===               jest haste map                 ===`);
console.log(`====================================================`);
console.log(` `);

console.log(` `);
console.log(`jest haste map is a module that provides a way to get a list of test files in a project.`);
console.log(`it's used by Jest to find test files in a project.`);
console.log(`it is used in larger projects than the one in the previous example which is using glob.`); 
console.log(`once the initial cache is built, it is faster than using glob.`);
console.log(`it can also be used with facebook 'watchman' to watch for changes in the file system.`);
console.log(`... see https://facebook.github.io/watchman/`)
console.log(` `);

import JestHasteMap from 'jest-haste-map';
import { cpus } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the root path to our project (Like `__dirname`).
const root = dirname(fileURLToPath(import.meta.url));
const hasteMapOptions = {
  extensions: ['js'],
  maxWorkers: cpus().length,
  name: 'best-test-framework',
  platforms: [],
  rootDir: root,
  roots: [root],
};
// Need to use `.default` as of Jest 27.
console.log(` `);
console.log(`haste map builds an in-memory representation of the file system.`);
 const hasteMap = new JestHasteMap.default(hasteMapOptions);

console.log(` `);
console.log(`hasteMapOptions: ${JSON.stringify(hasteMapOptions)}`);

// This line is only necessary in `jest-haste-map` version 28 or later.
await hasteMap.setupCachePath(hasteMapOptions);

const { hasteFS } = await hasteMap.build();
const testFiles = hasteFS.getAllFiles();

console.log(` `);
console.log(testFiles);
// ['/path/to/tests/01.test.js', '/path/to/tests/02.test.js', …]