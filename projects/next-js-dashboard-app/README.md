# next js dashboard app

## contents

- [next js dashboard app](#next-js-dashboard-app)
  - [contents](#contents)
  - [references](#references)
  - [installation](#installation)
    - [install node on mac](#install-node-on-mac)
    - [install latest tools on windows](#install-latest-tools-on-windows)
    - [install latest node and npm on windows using chocolatey](#install-latest-node-and-npm-on-windows-using-chocolatey)
    - [install pnpm](#install-pnpm)
    - [install project](#install-project)
    - [install libraries](#install-libraries)
    - [run project](#run-project)
  - [chapter 2 - add css](#chapter-2---add-css)
  - [chapter 3 - fonts and images](#chapter-3---fonts-and-images)
  - [chapter 4 - layouts and pages](#chapter-4---layouts-and-pages)
  - [chapter 5 - navigation](#chapter-5---navigation)
  - [chapter 6 - database](#chapter-6---database)
  - [rendering](#rendering)
  - [streaming](#streaming)

## references

starting here

https://nextjs.org/learn/dashboard-app/getting-started

## installation

### install node on mac

```js
brew install node@20
```

### install latest tools on windows

install these tools in this order

1. winget
2. powershell preview
3. chocolatey

```js
// winget check version
winget -v
// v1.8.1911
// powershell check version
winget search Microsoft.Powershell
// Name               Id                           Version Source
// ---------------------------------------------------------------
// PowerShell         Microsoft.PowerShell         7.4.4.0 winget
// PowerShell Preview Microsoft.PowerShell.Preview 7.5.0.3 winget
// 
// winget install latest powershell preview version
winget install --id Microsoft.Powershell.Preview --source winget
// 
choco upgrade chocolatey
// check version
choco
// v2.3.0
```

### install latest node and npm on windows using chocolatey

```js
choco install nodejs-lts --version="20.16.0"
node -v
// v20.16.0
npm -v
// 10.8.2
```

### install pnpm

```jsnpm -v
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

`page.tsx` is default page

`layout.tsx` holds default routes and creates a page common across child routes ie a parent container


when we use the <Layout /> components eg </SideNav> we use `partial rendering` where only the page body updates, not the side menus, when we navigate

page
  nav
    body1
    body2

when we navigate from page 1 to page 2, only the body1 or body2 items update


## chapter 5 - navigation

we use `next/link` to navigate

we use `<Link href="…"> instead of `<a href=...>` tags

using `clsx` we see that the active link is now highlighted so the user knows which page they are on



## chapter 6 - database

we are using `@vercel/postgres` database here for this demo but any database can be used

on `vercel` project click `storage` and create a `postgres` database

give your database a name 

```js
nextjs-dashboard-postgres
```

connect to the database

in `.env.local` tab click `show secret` and copy the data

update the contents into the `.env` file in the project root

next run

```js
pnpm i @vercel/postgres
```

to install the postgres database hosted by vercel

next, seed the database


we use `react server components`

## rendering

static - data fetch and render all takes place on server, result is cached

dynamic - data freshly rendered on the server for every request

## streaming

we use `loading.tsx` and `<Suspense>` to stream data

to show 'loading text while a page is loading we use'

```jsx
export default function Loading() {
    return <div>Loading...</div>;
  }
```

