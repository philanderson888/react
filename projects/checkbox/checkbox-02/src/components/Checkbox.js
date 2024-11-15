function CheckboxComponent() {
  console.log('Checkbox Component ... ');
  const handleChange = (event) => {
    console.log(`checkbox event ... name/id ${event.target.name} ${event.target.id} ... ${event.target.value} ... checked ${event.target.checked}`);
  }
  return (
      <div className="CheckboxComponent">
        <input type="checkbox" id="checkbox-04" name="checkbox-04" value="checkbox-04" onChange={e => handleChange(e)} />
        <label htmlFor="checkbox-04">React Component Checkbox 04</label><br /><br />
      </div>
    );
  }
  export default CheckboxComponent;
  