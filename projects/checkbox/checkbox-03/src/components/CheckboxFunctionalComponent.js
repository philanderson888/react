import {useState} from 'react';

function CheckboxFunctionalComponent() {
  //console.log('Checkbox Functional Component ... ');

  const [checked, setChecked] = useState(false)

  const handleChange = (event) => {

    //console.log(`handle change event`);
    //console.log(`checkbox event ... name/id ${event.target.name} ${event.target.id} ... ${event.target.value} ... checked ${event.target.checked}`);
    setChecked(!checked);
  }

  return (
      <div className="CheckboxComponent">
        <input type="checkbox" id="checkbox-05" name="checkbox-05" value="checkbox-05" onChange={e => handleChange(e)} />
        <label htmlFor="checkbox-05">React Component Checkbox 05</label><br /><br />
        <p>{checked ? 'checkbox 05 is checked' : 'checkbox 05 is not checked'}</p>
      </div>
    );
  }
  
  export default CheckboxFunctionalComponent;
  