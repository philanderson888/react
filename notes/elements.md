# React Elements

## Container, Row, Column

```jsx
<Row label="myLabel"></Row>
```

## Input

```jsx
export default MyComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      field:'my value'
    }
    this.handleNameChange = this.handleNameChange.bind(this) 
  }
}
handleFieldChange(event){
  this.setState({
    field:event.target.value,
  })
}
<input 
  value={this.state.field}
  onChange={this.handleFieldChange}
/>
```

or as a function

```jsx
import React, {useState} from 'react';
import {Row} from 'reactstrap'
import NavbarComponents from './NavbarComponents'
export default function Hooks() {
    const [name,setName] = useState('Mary')
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    return (
        <div>
            <NavbarComponents />
            <section>
                <Row label="Name">{name}</Row>
            </section>
            <section>
                <Row>
                    <input 
                        value={name}
                        onChange={handleNameChange}
                    />
                </Row>
            </section>
        </div>
    )
}
```


## Context

Context uses global items like `theme` or `locale`

This is using context without hooks

```jsx
import { ThemeContext, LocaleContext } from './context'
export default class MyComponent extends React.Component {
    render(){
        return(
            <ThemeContext.Consumer>
                {
                    theme => (
                        <section className={theme}>
                            <p>some text</p>
                        </section>
                    )
                }
            </ThemeContext.Consumer>
            <LocaleContext.Consumer>
                 {
                     locale => (
                         // this bit shows a flag in the consumer's language
                        <Row label="Language">
                            {locale}
                        </Row>
                     )
                 }
            </LocaleContext.Consumer>
        )
    }
}
```