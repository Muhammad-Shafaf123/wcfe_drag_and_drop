const Component = wp.element.Component;
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';

import Fields from './Data/wcfe-field-type';
import TotalFields from './Data/wcfe-objects';
import Sections from './Components/section';
import Properties from './Properties/field-properties';

class App extends Component {
	state = TotalFields

	onDragEnd = result =>{
		const { destination, source, draggableId, type } = result;
		const customFields = Fields

		if (destination == null){
			return;
		}

		// drag a section between the sections.
		if(type === 'section'){
			const newSectionOrder = Array.from(this.state.sectionOrder);

			newSectionOrder.splice(source.index, 1)
			newSectionOrder.splice(destination.index, 0, draggableId)

			const newState = {
				...this.state,
				sectionOrder : newSectionOrder
			}
			this.setState(newState)
			return;
		}

		const dragStart = this.state.section[source.droppableId];
		const dragEnd = this.state.section[destination.droppableId];

		// drag the custom fields in to the section.
		if(source.droppableId === "Fields"){
			const dragStartCustom = Array.from(dragEnd.sectionFields[0]);
			const selectCustom = Array.from(customFields);
			const DragItem = selectCustom[source.index]

			const changeItemId = { ...DragItem, id : uuid() }
			const itemId = changeItemId.id
			const itemToObject = { [itemId]:{...changeItemId} }

			dragStartCustom.splice(destination.index, 0, changeItemId.id)
			Object.assign(dragEnd.fields,itemToObject);
			Object.assign(this.state.fields,itemToObject);

			const newCustomField = { ...dragEnd, sectionFields : [dragStartCustom]}
			const currentSection =  dragEnd.id

			const newStateCustom = {
				...this.state.section,
				[currentSection] : {...newCustomField}
			}

			this.setState({...this.state,section : {...newStateCustom}});
			return ;
		}

		// drag a field between the fields.
		if (dragStart == dragEnd){
			const newFieldIds = Array.from(dragStart.sectionFields[0]);

			newFieldIds.splice(source.index, 1);
	    	newFieldIds.splice(destination.index, 0, draggableId);

	    	const newSection = {
				...dragStart,
				sectionFields : [newFieldIds],

			}
			const newState = {
				section : {
					...this.state.section,
					[newSection.id] : newSection
				}
			}
			this.setState(newState);
		}
	}

	// field edit button function.
	ItemPropertyClick = (clickFiled, clickSection) =>{
		this.forceUpdate()
		const setSelectField ={
			...this.state,
			clickedProperty : {clickFiled, clickSection}
		}
		this.setState({...setSelectField})

		jQuery('#react_contents').ready(function($){
			const hideDragItems = $('.back-button-div-wrap-main');
			const backToMenuButton = $('.back-to-menu-button');
			const propertyMenuWrap = $('.property-tablinks');
			const propertiesWrapper = $('.properties-wrapper');
			const backSettingButton = $('.back-to-setting-button');

			propertiesWrapper.css("display", "block");
			propertyMenuWrap.css('display','block');
			hideDragItems.css("display","none");
			backToMenuButton.css("display","block");
			backSettingButton.css("display", "none");

		});
	}

	// tab change function.
	sectionTabClick(evt, sectionName) {
		this.setState({...this.state, tabChange : [sectionName]});
	}

	menuBackButtonClick = () =>{
		jQuery(document).ready(function($){
			const backButton = $('.back-button-div-wrap')
			const backButtonMain = $('.back-button-div-wrap-main')
			const backToMenuButton = $('.back-to-menu-button');
			const propertyTab = $('.property-tablinks');
			const propertiesWrapper = $('.properties-wrapper');

			propertyTab.css("display", "none");
			propertiesWrapper.css("display", "none");
			backToMenuButton.css("display", "none");
			backButton.css("display","none")
			backButtonMain.css("display","block")
		});
	}

	// save all setting function
	saveAllSettings = (e) =>{
		e.preventDefault();

		const currentTab = this.state?.tabChange ? this.state?.tabChange : ['billing'];
		const newArrange = this.state.section[currentTab];
		const updateData = {
			currentTab : currentTab,
			updateSection : newArrange,
		}
		var settingData = {
	      action  : 'saved_setting_data',
	      savedData : updateData,
	    }

	    jQuery.ajax({
	      type : 'POST', 
	      url : ajaxurl,
	      data : settingData,
	      success : alert('Saved'),
	    });
	}

	render(){
		const tabChange = this.state?.tabChange ? this.state?.tabChange : ['billing'];
		const section = this.state.section[tabChange];
		const fields = section.sectionFields[0].map(fieldId => this.state.fields[fieldId]);

		return(
			<>
				<div className='save-button-div-wrap'>
					<button className='form-save-button' onClick={this.saveAllSettings} >
						Save Changes
					</button>
				</div>

				<div>
					<DragDropContext onDragEnd={this.onDragEnd} >
						<Droppable droppableId="Fields" type='Draggable-field' isDropDisabled={true} type='field'>
							{provided =>(
								<div
									className="side-section"
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<form>
										<Properties
											menuBackButtonClick={this.menuBackButtonClick}
											clickedProperty={this.state?.clickedProperty}
											properties={this.state.section}

										/>

										<div className='back-button-div-wrap-main'>
											<h4 className='back-button-heading' >Custom Fields</h4>

											<div className='each-fields-wrap'>
												{Fields.map((item, index) => {
													return(
														<Draggable
															draggableId={item.id}
															key={item.id}
															index={index}
														>
															{(provided) =>(
																<div
																	className="each-fields"
																	ref={provided.innerRef}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}
																>
																{item.name}
																</div>
															)}
														</Draggable>
														)
												})}
											</div>

										</div>
										{provided.placeholder}
									</form>
								</div>
							)}
						</Droppable>

						<div className="tab">
							{this.state.sectionOrder.map((sectionId, index) => {
								const section = this.state.section[sectionId];
								return (<button key={index} className="tablinks"  onClick={()=>(this.sectionTabClick(event, section?.id))}>{section?.title}</button>)
							})}
						</div>

						{
							<Sections
								tab={tabChange} 
								section = {section} 
								fields={fields}
								ItemPropertyClick={this.ItemPropertyClick}
							/> 
						}
					</DragDropContext>
				</div>
			</>
		);
	}
}

wp.element.render(<App  />, document.getElementById('react_contents'));