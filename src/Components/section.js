import Field from './fields';
import {  Droppable, Draggable } from 'react-beautiful-dnd';

const Sections = (props) => {
	const { tab, section, fields, ItemPropertyClick } = props;
	return(
		<>
			<div className="section-div">
				<div className='title-div' > {section.title} </div>
				<Droppable droppableId={props.section.id} type='field'>
					{(provided, snapshot)=>(
						<div className='field-list-div'
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{fields.map((field, index)=>{
								return(<Field 
											key={field?.id}
											index={index} field={field}
											selectSection={section}
											ItemPropertyClick={ItemPropertyClick}
										/>)
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</>
		)
}

export default Sections
