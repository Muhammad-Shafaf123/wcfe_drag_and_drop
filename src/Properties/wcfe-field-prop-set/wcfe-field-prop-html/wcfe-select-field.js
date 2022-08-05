const SelectField = (props) => {
	const { fieldData } = props;
	return(
		<>
			{fieldData?.label} select
		</>
	)
}

export default SelectField;
