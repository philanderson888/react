# react tests

## contents

- [react tests](#react-tests)
  - [contents](#contents)
  - [introduction](#introduction)
  - [tests-01](#tests-01)
  - [tests-02](#tests-02)
  - [tests-03](#tests-03)
  - [tests-04](#tests-04)
  - [tests-05](#tests-05)
  - [tests-06](#tests-06)
  - [tests-07](#tests-07)
  - [tests-08](#tests-08)

## introduction

how do we run react tests? to verify something is on the screen?

here is sample test with built in app

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## tests-01

let's just run a video to get started

using this one

https://jestjs.io/docs/architecture

with this video

https://www.youtube.com/watch?v=B8FbUK0WpVU&t=239s

and building off this page

https://cpojer.net/posts/building-a-javascript-testing-framework

and using this code

```bash
mkdir tests-01
cd tests-01
pnpm init
mkdir tests
echo "expect(1).toBe(2);" > tests/01.test.js
echo "expect(2).toBe(2);" > tests/02.test.js
echo "expect(3).toBe(4);" > tests/03.test.js
echo "expect(4).toBe(4);" > tests/04.test.js
echo "expect(5).toBe(6);" > tests/05.test.js
echo "expect(6).toBe(6);" > tests/06.test.js
touch index.mjs
pnpm install glob jest-haste-map
```

then add into `index.mjs` the following code

```js
import { glob , globSync, globStream, globStreamSync, Glob } from 'glob'

const testFiles = glob.sync('**/*.test.js');

console.log(testFiles); // ['tests/01.test.js', 'tests/02.test.js', …]

// all js files, but don't look in node_modules
const jsfiles = await glob('**/*.js', { ignore: 'node_modules/**' });

console.log(jsfiles); // ['index.js', 'lib/01.js', …]
```

now when we run we can see the output listing all of our test files

```js
node index.mjs
[
  'tests/06.test.js',
  'tests/05.test.js',
  'tests/04.test.js',
  'tests/03.test.js',
  'tests/02.test.js',
  'tests/01.test.js'
]
```

`jest-haste-map` is an old facebook library used to map files from a library


## tests-02

## tests-03

## tests-04

this allows us to send a fixed pass or fail error message and tailor the output using chalk npm library so it's clear which tests are passing and which are failing

## tests-05 

this engages with the `expect` npm library and allows us to obtain a valid result for our tests, whether pass or fail

## tests-06

set a global flag if even one test fails ... this can ping a script in a pipeline to halt the pipeline

## tests-07

install `jest-circus`

add `describe` .. `it` .. `run` keywords

## tests-08

this one was built properly by using `npx create-react-app` and running tests using `