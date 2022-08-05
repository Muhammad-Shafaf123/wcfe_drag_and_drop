import { v4 as uuid } from 'uuid';

const Fields = [
	{
		id : uuid(),
		title : 'Text',
		name : 'Text',
		type : 'text',
		sectionFields : ['Text']
	},
	{
		id : uuid(),
		title : 'Color',
		name : 'Color',
		type : 'color',
		sectionFields : ['Color']
	},
	{
		id : uuid(),
		title : 'Date',
		name : 'Date',
		type : 'date',
		sectionFields : {

		}
	},
	{
		id : uuid(),
		title : 'radio',
		name : 'radio',
		type : 'radio',
		sectionFields : {

		}
	}
];


export default Fields;
