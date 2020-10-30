# React API Fetch

## Contents

- [React API Fetch](#react-api-fetch)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [api-fetch-02](#api-fetch-02)

## Introduction

This aims to build some simple React boilerplate code to read data from an API via the Javascript fetch() method

Following this tutorial here https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/

```js
npx create-react-app api-fetch-01
cd api-fetch-01
yarn start
```

Strip out unwanted code and add in a container 

```css
.App{
  width:80vw;
  margin:auto;
}
```

Create `src\Components` and two files `List.js` and `withListLoading.js`

- List.js shows data
- withListLoading.js shows while data is loading


## api-fetch-02

[api-fetch-02](api-fetch-02/README.md)

This is using this youtube tutorial https://www.youtube.com/watch?v=T3Px88x_PsA&ab_channel=BenAwad to fetch API data to the screen and is fetching data from https://api.randomuser.me



