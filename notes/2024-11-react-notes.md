# 2024-11 react notes

## contents

- [2024-11 react notes](#2024-11-react-notes)
  - [contents](#contents)
  - [basic syntax](#basic-syntax)
    - [function component](#function-component)
    - [css](#css)
    - [displaying data](#displaying-data)
    - [conditionals](#conditionals)
    - [conditional operator works inside jsx](#conditional-operator-works-inside-jsx)
    - [map](#map)
    - [events](#events)
    - [state](#state)
  - [components](#components)
    - [checkbox 01](#checkbox-01)
    - [checkbox 02](#checkbox-02)
  - [checkbox 03 developing state in a component](#checkbox-03-developing-state-in-a-component)

## basic syntax

### function component

```jsx
function Button01() {
    return (
        <button>Click Here</button>
    );
}
```

### css

use `className` to specify a css class

```jsx
<img className="styleLikeThis" />

.styleLikeThis {
    margin: 50px 20px;
}
```

### displaying data

```jsx
<div>{user.name}</div>
<img src={user.imageUrl} alt={'Photo of ' + user.name} style={{width: user.imageWidth, height: user.imageHeight}}/>
```

the double curly brace is actually a regular {} object inside a jsx curly brace 

### conditionals

we can include jsx as part of our regular code

```jsx
if (userIsLoggedIn) {
    content = <ShowAdminPanel />;
} else {
    content = <ShowLoginScreen />;
}

return(
    <>
        {content}
    </>
);
```

### conditional operator works inside jsx

```jsx
<div>
    {
        userIsLoggedIn ? (<ShowAdminPanel />) : (<ShowLoginForm /> )
    }
</div>
```

### map

```jsx
const listOfItems = products.map(product => 
    <li key={product.id}>{product.title}</li>
);

return (<ul>{listOfItems});
```

`key` should be unique and is used by `react` to know if later on you change or reorder the list


### events

```jsx
function Button01() {
    function handleClick() {
        alert('clicked');
    }
    return (
        <button onClick={handleClick}>Click Here</button>
    );
}
```

### state

```js
import { useState } from 'react';

function Button01() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>Clicked {count} times</button>
    );

}
```

convention is `[dataField, setDataField]`

we can try this in a real example

```js
console.log(`remove old instances of create react app`);
npm uninstall -g create-react-app -y
yarn global remove create-react-app -y
// npx
npx create-react-app state-06
cd state-06
npm start
// or yarn
yarn create react-app my-app
cd state-06
yarn start
```

## components

we can compare html component with react component

see [checkbox](../projects/checkbox/) projects

### checkbox 01 

shows simple checkbox using html and also react component

### checkbox 02

adding state to component

## checkbox 03 developing state in a component


