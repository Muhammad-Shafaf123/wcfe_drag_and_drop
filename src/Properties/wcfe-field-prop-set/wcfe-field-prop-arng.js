import { useState } from '@wordpress/element';

import InputText from './wcfe-field-prop-html/wcfe-input-text';
import InputCheckbox from './wcfe-field-prop-html/wcfe-input-checkbox';
import SelectField from './wcfe-field-prop-html/wcfe-select-field';

const propertyFieldAction = (event) => {
	console.log(event.target.name,' => ',event.target.value);
} 

const PropertyArrage = (props) => {

	const { fieldProperties, selectType, propertyTabClick, selectProperty } = props;
	
	const [state, setState] = useState(selectProperty);

	const getFieldTab = fieldProperties.setTabIds(selectType);
	const fieldTab = getFieldTab?.fieldTabs;
	const tab = fieldProperties.setTabs(selectType);

	// console.log('state', state);
	// console.log(fieldTab);
	// console.log(tab);

	return(
		<div className='property-tab-wrap'>
			{/* Tab setting section */}
			<div id="property-tab-id" className="property-tab">
				{
					Object.keys(fieldTab).map((tab, index) => {
						return(
						<button key={index} type="button" className="property-tablinks" onClick={()=>propertyTabClick(event, tab)}>
							<i className={"dashicons "+fieldTab[tab]?.icon+" text-primary"}></i>
							{fieldTab[tab]?.label}
							<span className="dashicons dashicons-arrow-right-alt2 arrow-right"></span>
						</button>
					)})
				}
			</div>

			{/* Tab Property section */}
			<div id="property-tab-id" className="property-tab-wraps">
				{
					getFieldTab?.tabIds.map((prop, i) => (
						<div id={tab[prop]?.id} key={i} className='property-menu-wrap tabcontent'>
							{
									tab[prop]?.tabPropetySetIds.map((propItem, i) => {
										console.log(fieldProperties.tabPropetySet[propItem]?.id);
										return(
											<div key={i}>
												<SettingsGroup
													action={propertyFieldAction}
													fieldGroup={fieldProperties.tabPropetySet[propItem]?.type}
													fieldData={fieldProperties.tabPropetySet[propItem]}
													wfceItem={state[fieldProperties.tabPropetySet[propItem]?.id]}
												/>
											</div>
										)
									})
								}
						</div>
					))
				}
			</div>

		</div>
		)
}



const SettingsGroup = (props) => {
	const  { fieldGroup, fieldData, wfceItem, action} = props;
	// console.log('wfceItem ==>',wfceItem)
	return(
		<div className="field-wrap-div">
		{ 'text' == fieldGroup ? <InputText fieldData={fieldData} wfceItem={wfceItem} action={action}/> : '' }
		{ 'checkbox' == fieldGroup ? <InputCheckbox fieldData={fieldData} wfceItem={wfceItem} action={action}/> : '' }
		{ 'select' == fieldGroup ? <SelectField fieldData={fieldData} wfceItem={wfceItem} /> : '' }
		</div>
	)
}

export default PropertyArrage;
