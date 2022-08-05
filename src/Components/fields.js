import {  Draggable } from 'react-beautiful-dnd';

const Field = (props) => {
	const { field, selectSection, ItemPropertyClick } = props;
	return(
		<Draggable draggableId={field?.id} index={props.index}>
			{(provided, snapshot)=>(
				<div className='field-div'
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<div className='field-label'>{field?.title}
						<span onClick={()=>ItemPropertyClick(field?.id, selectSection?.id)} className="dashicons dashicons-edit-large property-icon"></span>
					</div>
					{/* // input field of cfe item.
					<div>
						<input className={field?.type} type={field?.type} placeholder={field?.placeholder} />
					</div>
					*/}
				</div>

			)}
		</Draggable>
		)
}

export default Field;
