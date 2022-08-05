// object of WCFE.
let totalObject = ful_obj;
const savedSettings = saved_settings.saved_data;

if (typeof savedSettings !== 'undefined' && savedSettings) {
	totalObject = savedSettings;
}

const pripareSection = {}
const sectionMapping = {}
var sections = [];
var totalFields = {}


for (var key in totalObject) {
	sections.push(key)
	Object.assign(totalFields,totalObject[key]?.fields);
}

for(var i in totalObject){
	pripareSection[i] = totalObject[i].fields
	sectionMapping[i] = Object.keys(pripareSection[i]).map(item => item)
}

if (typeof savedSettings !== 'undefined' && savedSettings) {
	for(var y in totalObject){
   		if (!savedSettings[y].hasOwnProperty('sectionFields')) {
			savedSettings[y].sectionFields = [];
			savedSettings[y].sectionFields.push(sectionMapping[y])
		}
	}
	totalObject = savedSettings;
}else{
	for (var y in totalObject) {
		totalObject[y].sectionFields = [];
		totalObject[y].sectionFields.push(sectionMapping[y])
	}
}

// object priparing
let TotalFields = {
	fields : {...totalFields},
	section : {...totalObject},
	sectionOrder : sections
}

export default TotalFields
