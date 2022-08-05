const InputText = (props) => {
	const { fieldData, wfceItem, action} = props;
	const id = wfceItem+ "_" +fieldData?.id;
	// console.log(wfceItem);
	// console.log(wfceItem);
	return(
		<>
			<label className='property-field-label' htmlFor="name_field">{fieldData?.label}
				{fieldData?.required ? <abbr className="required" title="required">*</abbr> : ""}
			</label>
			<input 
				key={id} 
				type='text' 
				name={id} 
				className='form-control'  
				defaultValue={wfceItem} 
				disabled={fieldData?.disabled ? 'disabled' : ''}
				onChange={()=>(action(event))}
			/>
		</>
	)
}

export default InputText;
