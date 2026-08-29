import {useState} from 'react';

function CheckboxFunctionalComponentWithProps(props) {
  //console.log('Checkbox Functional Component ... ');

  const [checked, setChecked] = useState(false)
  const checkedText = props.onText;
  const uncheckedText = props.offText;
  const togglePreference = props.togglePreference;
  const animal = props.animal;

  const handleCheckboxEvent = (event) => {
    console.log(` `);
    console.log(`checkbox event ... on target ${event.target.name} ... ${event.target.value} ... checked is now ${event.target.checked}`);
    setChecked(!checked);
    togglePreference(animal, !checked);
  }

  return (
      <div className="CheckboxComponent">
        <input type="checkbox" id="checkbox-animal" name="checkbox-animal" value={animal} onChange={e => handleCheckboxEvent(e)} />
        <label htmlFor="checkbox-animal">{animal} is {checked ? `${checkedText}` : `${uncheckedText}`}</label><br /><br />
      </div>
    );
  }
  
  export default CheckboxFunctionalComponentWithProps;
  