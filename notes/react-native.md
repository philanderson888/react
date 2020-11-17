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
  - [Button](#button)
  - [Card](#card)
  - [Image](#image)
  - [CSS](#css)
    - [Applying one style](#applying-one-style)
    - [Applying multiple styles](#applying-multiple-styles)
    - [Full width](#full-width)
    - [Percentage width and height](#percentage-width-and-height)
  - [State](#state)
  - [Props](#props)
  - [Props And State Combined](#props-and-state-combined)
  - [ScrollView](#scrollview)
  - [FlatList](#flatlist)
  - [Hyperlink](#hyperlink)
  - [Navigation](#navigation)
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

https://expo.io/ also allows `snacks` to execute in browser or device

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

Text new line

```jsx
<Text>{"\n"}{"\n"}{"\n"}</Text>
```

Max lines - it's possible to determine the maximum number of lines for an element

```jsx
<Text numberOfLines={3}>text{"\n"}text{"\n"}text{"\n"}text{"\n"}text{"\n"}text{"\n"}</Text>
/*
text
text
text
...
*/
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

## Button

```jsx
<Button onPress={addToPropsData} title="Click to add to props data"></Button> 
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

Change text on click

```jsx
import React, {useState} from 'react'
import {Text,View} from 'react-native'
export default function Clickable(){
  const[data, setData,counter,setCounter] = React.useState(true);
  onTextPress = () => setData(data + ' new data')
  return(
    <View>
      <Text>--------------------</Text>
      <Text>Clickable Text</Text>
      <Text>--------------------</Text>
      <Text onPress={onTextPress}>Some clickable text here {data}</Text>
    </View>
  )
}
```

Count on click

```jsx
import React, {useState} from 'react'
import {Text,View} from 'react-native'
export default function ChangeStateOnClick(){
  const[counter,setCounter] = React.useState(0);
  countUp = () => setCounter(counter+1);
  return(
    <View>
      <Text>--------------------</Text>
      <Text>Clickable Text</Text>
      <Text>--------------------</Text>
      <Text onPress={countUp}>click to count {counter}</Text>
    </View>
  )
}
```

## Props

`Props` is short for `Properties` which are values passed into components

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










## Props And State Combined

```jsx
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChangePropsAndStateOnClick from './components/ChangePropsAndStateOnClick';
export default function App() {
  return (
    <View style={styles.container}>   
      <ChangePropsAndStateOnClick data='Props - initial data - cannot change!' />
    </View>
  );
}
```

```jsx
import React from 'react';
import { View, Text, Button,Alert } from 'react-native';
class ChangePropsAndStateOnClick extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      moreData:'State - initial more data',
      data:this.props.data,
    }
  }
  componentDidMount(){
    this.setState({
      
    })
  }
  changeState = () => {
    let data = this.props.data;
    this.setState ({
      data:'state has changed and overwritten initial data from props',
      moreData:'some more data'
    })
  }
  render(){
    return(
      <View>
        <Text style={{fontWeight:'bold'}}>Changing state but not props</Text>
        <Button title="click to produce an alert on Android" onPress={()=>Alert.alert('you pressed a button')} />
        <Text>{" "}</Text>
        <Button title="click to change state but not props" onPress={this.changeState} />
        <Text>{this.props.data}</Text>
        <Text>{this.state.data}</Text>
        <Text>{this.state.moreData}</Text>
        <Text>{"\n"}{"\n"}{"\n"}</Text>
      </View>
    )
  }
}
export default ChangePropsAndStateOnClick;



/*
From

Changing state but not props
Props - initial data - cannot change!
Props - initial data - cannot change!
State - initial more data

To

Changing state but not props
Props - initial data - cannot change!
state has changed and overwritten initial data from props
some more data
*/
```
## ScrollView 

- ScrollView renders all components
- FlatList renders all components lazily

Scrollview must have a bounded height in order to work.  Best to ensure parent has a bounded height.

Parent

```jsx
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Scroll from './components/Scroll';
export default function App() {
  return (
    <View style={styles.container}>   
      <Scroll />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
```

Child

```jsx
import React from 'react';
import {Text,View, SafeAreaView, ScrollView } from 'react-native';
const Scroll = () => {
  return(
    <SafeAreaView>
      <ScrollView>
        <Text>Scrollview Text</Text>
        <Text>Scrollview Text</Text>
        <Text>Scrollview Text</Text>
        <Text>Scrollview Text</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Scroll;
```

## FlatList

```jsx
import React from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]
const Item = ({id,title}) => (
  <View><Text>{id}</Text><Text>{title}</Text><Text> </Text></View>
)
export default function Flat(){
  const renderItem = ({item}) => (
    <Item id={item.id} title={item.title} />
  );
  return(
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
      />
    </SafeAreaView>
  )
}
```

Add multiple columns with

```jsx
<FlatList
  numColumns='2'
/>
```

We can make items selectable with

```jsx
import React , {useState} from 'react';
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]
const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[style,styles.item]} >
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  title:{
    fontSize:20,
  }
})
export default function Flat(){
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {  
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Item 
        item={item} 
        onPress={()=>setSelectedId(item.id)}
        style={{backgroundColor}}
        />
    );
  };
  return(
    <View>
      <Text>--------------------</Text>
      <Text>Selectable Flat List</Text>
      <Text>--------------------</Text>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item=>item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </View>
  )
}
```



## Hyperlink

Open a hyperlink!

```jsx
import React from 'react';
import { View,Text,Linking } from 'react-native';
export default function Clickable(){
  return(
    <View>
      <Text>--------------------</Text>
      <Text>Click To Open Hyperlink</Text>
      <Text>Note that this link does not open on Expo web version but is fine inside an Android app!</Text>
      <Text>--------------------</Text>
      <Text onPress={ ()=>Linking.openURL('https://www.bbc.co.uk')}>BBC</Text>
    </View>
  )
}
```





## Navigation

We can create an app to navigate between screens

```jsx
import React from 'react';
import {View,Text,Alert, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button 
        title="Home Screen Button" 
        onPress={ () => navigation.navigate('Profile',{name:'Phil'})}
      />
      <Text>Here is home screen</Text>
    </View>
  );
}
const ProfileScreen = (props, {navigation}) => {
  const[name]=React.useState();
  return (
    <View>
      <Text>Here is profile screen {props.name}</Text>
    </View>
  );
}
export default function Navigation1(){
  const navigate = () => {
    Alert.alert('you are about to navigate to a new screen')
  }
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome Screen'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profile Screen'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

## Walkthrough

Expo walkthrough at https://www.youtube.com/watch?v=NgDaPmxewcg&ab_channel=EstebanCodes 



