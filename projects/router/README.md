# React Router

## Router 01

original router-01 was no longer working so I built a fresh version

```js
npx create-react-app router-01
cd router-01
npm install
npm start
```

the app compiles and runs fine

add in router

control-C to stop the app running

```js
npm install --save react-router-dom
```

## router-02 using pnpm

just out of curiosity i am going to try to build the same thing with pnpm to see what happens

copy the whole app apart from `node-modules` folder

```js
pnpm install
pnpm start
```

seems to work fine


## router-03

let's try building from scratch using pnpm to see if it all works fine

```js
npx create-react-app router-03
cd router-03
rm package-lock.json
pnpm install
pnpm start
Control-C 
```


## router-04

let's see if we can automate this in one command

```js
npx create-react-app router-04 && cd router-04 && rm -rf package-lock.json rm -rf node_modules && pnpm install && pnpm start
```

seems to work fine

it's working but there does not seem to be much or any disk space improvement which is weird ... we are looking at 200MB to 300MB of node module libraries which is just insanely huge and this is repeated every time

## router-05

let me try another approach

i am going to try to use `pnpm` to install from scratch

someone else did try it here

https://dev.to/lico/set-up-create-react-app-using-pnpm-nji

so let's give it a go

```js
pnpm create react-app router-05 && cd router-05

rm -rf package-lock.json && rm -rf node_modules

pnpm install && pnpm start

pnpm create react-app router-02 && cd router-02 && rm -rf package-lock.json && rm -rf node_modules && pnpm install && pnpm start
pnpm create react-app router-05 && cd router-05 && rm -rf package-lock.json && rm -rf node_modules && pnpm install && pnpm start
```

but the folder size is the same

```bash
cd router-01 && du -s && cd .. && cd router-02 && du -s && cd .. && cd router-03 && du -s && cd .. && cd router-04 && du -s && cd .. && cd router-05 && du -s && cd ..
```

so not sure the benefits of pnpm in this instance ... puzzling ...

