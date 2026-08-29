function CheckboxComponent() {
  console.log('Checkbox Component ... ');
  const handleChange = (event) => {
    console.log(`checkbox event ... name/id ${event.target.name} ${event.target.id} ... ${event.target.value} ... checked ${event.target.checked}`);
  }
  return (
      <div className="CheckboxComponent">
        <input type="checkbox" id="vehicle4" name="vehicle4" value="Boat" onChange={e => handleChange(e)} />
      </div>
    );
  }
  export default CheckboxComponent;
  