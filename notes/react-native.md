# React Native

## Contents

- [React Native](#react-native)
  - [Contents](#contents)
  - [Author](#author)
  - [Introduction](#introduction)
  - [Documentation](#documentation)
  - [Learning](#learning)
  - [History](#history)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [ExpoCli](#expocli)
    - [Expo.io](#expoio)
  - [Support](#support)
  - [Live Code](#live-code)
  - [Components](#components)
  - [View](#view)
  - [Text](#text)
  - [Input](#input)
    - [TextInput](#textinput)
    - [Numeric Input](#numeric-input)
  - [Card](#card)
  - [Image](#image)
  - [CSS](#css)
    - [Applying one style](#applying-one-style)
    - [Applying multiple styles](#applying-multiple-styles)
    - [Full width](#full-width)
    - [Percentage width and height](#percentage-width-and-height)
  - [State](#state)
  - [Props](#props)
  - [ScrollView and FlatList](#scrollview-and-flatlist)
  - [Walkthrough](#walkthrough)

## Author

Phil Anderson
@philanderson888
November 2020

## Introduction

This is a repo to teach myself React Native!

## Documentation

https://reactnative.dev/ 

## Learning

- Facebook Developers https://www.youtube.com/channel/UCP_lo1MFyx5IXDeD9s_6nUw
- Facebook Conference 2019 https://www.youtube.com/watch?v=NCAY0HIfrwc&feature=emb_logo&ab_channel=FacebookDevelopers

## History

2015 Facebook

## Features

- Build native apps
- Javascript code to native platform
- live reload

## Getting Started

```powershell
npx react-native init MyApp
```

### ExpoCli

`ExpoCli` gets us started quickly

```powershell
yarn global add expo-cli
```

### Expo.io

`Expo.io` enables usage of react in a browser 

https://snack.expo.io/

Create an account, download the app and connect your app to your code

https://snack.expo.io/@philanderson888/authentic-ramen

## Support

[Twitter]https://twitter.com/expo

[forums](https://forums.expo.io)

## Live Code

Try code live in a browser at https://reactnative.dev/docs/getting-started straight in the page!

## Components

Components can be `classes` or `functions`.  

React hooks is going `functions` so that's hip!!!


## View

This is the building block of UI

Everything is a `view`

Views compile down to native components

Core components found at https://reactnative.dev/docs/components-and-apis

- View
- Text
- Image
- ScrollView
- TextInput

Open source components are found at https://reactnative.directory/



## Text

```jsx
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>      
      <Text style={styles.mainHeader}>
        Page Header
      </Text>
      <Text style={styles.header}>
        This is a header 
      </Text>
      <Text style={styles.paragraph}>
        This is a text block
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  mainHeader: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
```
## Input

### TextInput

```jsx
<TextInput
style={{
    height: 40,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1
}}
placeholder="Enter text here"
/>
```

Multiline

```jsx
<TextInput
style={{
    height: 80,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 1
}}
placeholder="Enter text here"
multiline 
numberOfLines={4}
/>
```

### Numeric Input

```jsx
<TextInput
    style={{
        height: 40,
        width: '40%',
        borderColor: 'gray',
        borderWidth: 1
    }}
    keyboardType='numeric'
/>
```

## Card

```jsx
<Card>
    <AssetExample />
</Card>
```

## Image

Image URL

```jsx
<Image source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}} style={{width: 100, height: 100}} />
```

Circular Image

```jsx
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Images() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Image with border</Text>
      <Image source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}} style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});
```

## CSS

### Applying one style

```jsx
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Images() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Image from url</Text>
      <Image source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}} style={{width: 100, height: 100}} />
      <Text style={styles.paragraph}>Image from local file</Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  logo: {
    height: 50,
    width: 50,
  }
});
```

### Applying multiple styles

```jsx
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Images() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Image from url</Text>
      <Image source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}} style={{width: 100, height: 100}} />
      <Text style={styles.paragraph}>Image with border</Text>
      <Image source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}} style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]} />
      <Text style={styles.paragraph}>Image from local file</Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  logo: {
    height: 50,
    width: 50,
  }
});
```

### Full width

```jsx
const styles = Stylesheet.create({
    fullWidth: {
        alignSelf: 'stretch',
    }
})
```

### Percentage width and height

```jsx
const styles = StyleSheet.create({
  profileImgSquare: {
    marginLeft: 8,
    height: '20%',
    width: '100%',  // or alignSelf: 'stretch',
  },
});
```

## State

Two types of data are sent to a component

1. Props
2. State

Props are sent from the parent and can't be changed

State can be changed inside the component

We should

1. Initialise state in the constructor
2. Change state with setState

## Props

We can pass data from `App.js` to a component using props

App.js

```jsx
import * as React from 'react';
import { View, } from 'react-native';
import Props from './components/Props';
export default function App() {
  return (
    <View style={styles.container}>   
      <Props testData='some test data' testData2='and some more data' />
    </View>
  );
}
```

Props.js

```jsx
import React from 'react';
import { View, Text } from 'react-native';
const Props = (props) => {
  const[testData, testData2] = React.useState(true);
  return (
    <View>
      <Text>Hi - displaying some test data here -> {props.testData}</Text>
      <Text>And also this is some more props data -> {props.testData2}</Text>
    </View>
  );
}
export default Props;
/*
Hi - displaying some test data here -> some test data
And also this is some more props data -> and some more data
*/
```


We can use props as follows in a function

```jsx
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
const ShowThis = (props) => {
  const[test] = React.useState(true);
  return <Text>hello {props.test}</Text>
}
const State = () => {
  return (
    <View style={{marginTop:50}}>
      <Blink text='I love to blink' />
      <ShowThis test='Tests Data' />
    </View>
  )
}
export default State;
```

or a longer one

```jsx
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const Blink = (props) => {

  const [isShowingText, setIsShowingText] = React.useState(true);

  useEffect( () => {

    const toggle = setInterval ( () => {
      setIsShowingText(!isShowingText);
    },1000)

    return () => clearInterval(toggle)

  })

  if(!isShowingText) {
    return <Text>I am not blinking</Text>
  }

  return <Text>{props.text}</Text>

}

const State = () => {
  return (
    <View style={{marginTop:50}}>
      <Blink text='I love to blink' />
    </View>
  )
}
export default State;
```








## ScrollView and FlatList

- ScrollView renders all components
- FlatList renders all components lazily



## Walkthrough

Expo walkthrough at https://www.youtube.com/watch?v=NgDaPmxewcg&ab_channel=EstebanCodes 



