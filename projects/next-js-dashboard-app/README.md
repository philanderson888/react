# next js dashboard app

## contents

- [next js dashboard app](#next-js-dashboard-app)
  - [contents](#contents)
  - [references](#references)
  - [installation](#installation)
    - [install node](#install-node)
    - [install pnpm](#install-pnpm)
    - [install project](#install-project)
    - [install libraries](#install-libraries)
    - [run project](#run-project)
  - [chapter 2 - add css](#chapter-2---add-css)
  - [chapter 3 - fonts and images](#chapter-3---fonts-and-images)
  - [chapter 4 - layouts and pages](#chapter-4---layouts-and-pages)

## references

starting here

https://nextjs.org/learn/dashboard-app/getting-started

## installation

### install node

```
brew install node@20
```

### install pnpm

```js
sudo npm install -g pnpm -y
```

### install project

```
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm
```

### install libraries

cd into project folder then run

```
pnpm i
```

### run project

```
pnpm dev
open -a "Microsoft Edge" -u http://localhost:3000
```

## chapter 2 - add css

```
npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm && mv nextjs-dashboard nextjs-dashboard-02 && cd nextjs-dashboard-02 && pnpm i && pnpm dev
```

css applies 

```jsx
xs={6} 
sm={3} 
md={2} 
lg={1} 
```

for a grid setup if we have

```jsx
<Row>
  <Col xs={12} sm={3} md={2} lg={1} />
  <Col xs={6} sm={6} md={8} lg={10} />
  <Col xs={6} sm={3} md={2} lg={1} />
</Row>
```

then for extra small screen the column ratios with be 12:6:3, on small it will be 3:6:3, medium 2:8:2, large 1:10:1

breakpoints are as follow

```jsx
xs 576px
sm 768px
md 992px
lg 1200px
```
 
## chapter 3 - fonts and images

images are served as static assets from the `/public` folder

old html

```html
<img src="my-image.png" />
```

next js

```jsx
import Image from 'next/image';

export default function Page() {
  return (
    // ...
    <div
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    >
});

```

```jsx
next/image
// or an extension of the html <img> tag 
<Image> 
```


## chapter 4 - layouts and pages




