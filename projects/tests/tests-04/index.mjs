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
import { dirname, join, relative } from 'path';
import { fileURLToPath } from 'url';

console.log(` `);
console.log(`====================================================`);
console.log(`===  build in memory database of testing files   ===`);
console.log(`====================================================`);
console.log(` `);

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

console.log(` `);
console.log(`hasteFS:`);
console.log(hasteFS);

console.log(` `);
console.log(`hasteFS.getAllFiles: ... this includes all files, both test and non-test files:`);
const testFiles = hasteFS.getAllFiles();
console.log(testFiles);


console.log(` `);
console.log(`====================================================`);
console.log(`===              filter test files               ===`);
console.log(`====================================================`);
console.log(` `);


console.log(` `);
console.log(`test files filtered includes only files with 'test' in the path:`);
const testFilesFiltered = testFiles.filter(file => file.includes('test-'));
console.log(testFilesFiltered);

console.log(` `);
console.log(`test files filtered using hasteFS.matchFiles:`);
const testFilesFiltered2 = hasteFS.matchFiles(/05/);
console.log(testFilesFiltered2);

console.log(` `);
console.log(`test files filtered using hasteFS.matchFilesWithGlob:`);
const testFilesFiltered3 = hasteFS.matchFilesWithGlob(['**/*.test.js']);
console.log(testFilesFiltered3);

console.log(` `);
console.log(`====================================================`);
console.log(`===        print out content of test files       ===`);
console.log(`====================================================`);
console.log(` `);

import fs from 'fs/promises';
for await (const file of testFilesFiltered) {
  console.log(` `);
  console.log(`file: ${file}`);
  const content = await fs.readFile(file , 'utf8');
  console.log(`      ${content}`);
}

console.log(` `);
console.log(`====================================================`);
console.log(`===        run tests in parallel                 ===`);
console.log(`====================================================`);
console.log(` `);

import Worker1 from './worker.js';

for await (const file of testFilesFiltered) {
  const result = await Worker1.runTest(file);
}



console.log(` `);
console.log(`====================================================`);
console.log(`===        run tests in parallel v2              ===`);
console.log(`====================================================`);
console.log(` `);


const runTests = async (testFilesFiltered, options) => {
  const workers = [];
  for (let i = 0; i < options.maxWorkers; i++) {
    console.log(`pushing new worker with index: ${i}`);
    workers.push(Worker1);
  }

  console.log(` `);
  const testResults = await Promise.all(
    testFilesFiltered.map(async (testFile, index) => {
      const worker = workers[index % options.maxWorkers];
      return worker.runTest(testFile, options);
    }),
  );

  return testResults;
}


const testResults = await runTests(testFilesFiltered, { maxWorkers: cpus().length });

console.log(` `);
console.log(`testResults:`);
console.log(testResults);




console.log(` `);
console.log(`====================================================`);
console.log(`===    run tests in parallel 3 using threading   ===`);
console.log(`====================================================`);
console.log(` `);

import {Worker as Worker2} from 'jest-worker';
import chalk from 'chalk'

const worker = new Worker2(join(root, 'worker.js'), {
  numWorkers: cpus().length,
  enableWorkerThreads: true,
});

for await (const file of testFilesFiltered) {
  const result = await worker.runTest(file);
  const status = result.success ? chalk.green.inverse(' PASS ') : chalk.red.inverse(' FAIL ');
  if (!result.success) {
    console.error(`${status} ${chalk.dim(relative(root, result.testFile))}   ${chalk.bold(result.errorMessage)}`);
    console.log(` `);
    continue;
  }
  console.log(`${status} ${chalk.green.dim(relative(root, result.testFile))}   ${chalk.green.dim(result.content)}`);
}

worker.end();




