import { useState } from '@wordpress/element';
import PropertyArrage from './wcfe-field-prop-set/wcfe-field-prop-arng';
import FieldProperty from '../Data/wcfe-field-properties';

const Properties = (props) =>{
	const { properties, clickedProperty} = props;

	// console.log(properties);
	// console.log(FieldProperty);

	const clickedField = clickedProperty?.clickFiled;
	const clickedSection = clickedProperty?.clickSection;
	const selectProperty =  properties[clickedSection]?.fields[clickedField];
	const selectType = selectProperty?.type;

	// console.log(selectProperty);

	const backToSettingButton = () => {
		jQuery(document).ready(function($){
			const backToSettingButton = $('.back-to-setting-button');
			const backMainButton = $('.back-to-menu-button');
			const propertyMenuWrap = $('.property-menu-wrap');
			const fieldWrapDiv = $('.property-tab');

			backToSettingButton.css('display', 'none');
			backMainButton.css('display', 'block');
			propertyMenuWrap.css('display', 'none');
			fieldWrapDiv.css('display', 'block');
			fieldWrapDiv.css('display', 'grid');
		});
	}

	const propertyTabClick = (evt, tabName) =>{
		jQuery(document).ready(function($){
			const backButtonWrap = $('.back-button-div-wrap');
			const fieldWrapDivTab = $('.property-tab');
			const fieldWrapDiv = $('.property-tab-wraps');
			const backMainButton = $('.back-to-menu-button');
			const backToSettingButton = $('.back-to-setting-button');

			fieldWrapDivTab.css('display', 'none');
			fieldWrapDiv.css('display', 'block');
			backButtonWrap.css('display','none');
			backMainButton.css('display', 'none');
			backToSettingButton.css('display', 'block');
		});

	    var i, tabcontent, tablinks;
		  tabcontent = document.getElementsByClassName("property-menu-wrap");
		  for (i = 0; i < tabcontent.length; i++) {
		    tabcontent[i].style.display = "none";
		  }
		  tablinks = document.getElementsByClassName("property-tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }
		  document.getElementById(tabName).style.display = "block";
		  evt.currentTarget.className += " active";
	}

  	const editBackButton = () => {
		jQuery(document).ready(function($){
			const backButton = $('.property-menu-wrap')
			const backButtonMain = $('.back-button-div-wrap')

			backButton.css("display","none")
			backButtonMain.css("display","block")
		});
	}

	if (selectType) {
		return(
			<div className="properties-wrapper">

				<div className="back-to-menu-button">
					<span onClick={()=>props.menuBackButtonClick()} className='dashicons dashicons-arrow-left-alt property-back-button'></span>
					<h4 className='back-button-heading' >Back To Main Menu</h4>
				</div>

				<div className="back-to-setting-button">
					<span onClick={()=>backToSettingButton()} className='dashicons dashicons-arrow-left-alt property-back-button'></span>
					<h4 className='back-button-heading' >Back To Settings</h4>
				</div>

		        <PropertyArrage
		          fieldProperties={FieldProperty}
		          selectType={selectType}
		          propertyTabClick={propertyTabClick}
		          properties={properties}
		          selectProperty={selectProperty}
		        />

			</div>
			)
	}
	return(<></>)
}

export default Properties;
