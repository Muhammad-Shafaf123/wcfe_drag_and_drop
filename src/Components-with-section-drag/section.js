import Field from './fields';
import {  Droppable, Draggable } from 'react-beautiful-dnd';

const Section = (props) => {
	return (
		<Draggable draggableId={props.section.id} index={props.index} >
			{(provided)=>(
				<div
					className="section-div"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div className='title-div' {...provided.dragHandleProps}> {props.section.title} </div>

					<Droppable droppableId={props.section.id} type='field'>
						{(provided, snapshot)=>(
							<div className='field-list-div'
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{props.fields.map((field, index)=>{
									return(<Field key={field?.id}
												index={index} field={field}
												selectSection={props.section}
												ItemPropertyClick={props.ItemPropertyClick}
											/>)
								})}
								{provided.placeholder}

							</div>
							)}
					</Droppable>
				</div>
			)}
		</Draggable>

	)
}

export default Section
