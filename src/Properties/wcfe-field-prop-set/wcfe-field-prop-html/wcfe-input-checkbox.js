const InputCheckbox = (props) => {
	const { fieldData, wfceItem } = props;
	return(
		<>
			<input type='checkbox' className='form-control'  defaultChecked={wfceItem} />
			<label className='property-field-label' htmlFor="field_type">{fieldData?.label}</label>
		</>
	)
}

export default InputCheckbox;
