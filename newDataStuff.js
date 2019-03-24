var  temp, i, firstKeyVal, secondKeyVal, badKeys;
var xval, yval, zval;
var firstKeys = ["male",  "female"];
var secondKeys = ["Black", "White", "Other"];
var data = [
	{
		key : "Male",
		values : [
			{ key : "Black", value : 0},
			{ key : "White", value : 0},
			{ key : "Other", value : 0},
		]
	},
	{
		key : "Female",
		values : [
			{ key : "Black", value : 0},
			{ key : "White", value : 0},
			{ key : "Other", value : 0},
		]
	}
];

function parseJSON() {
	for (i = 0; i < 100; i++) {
		xval = jsonData.entry[i].resource.gender;
		yval = jsonData.entry[i].resource.extension[0].valueCodeableConcept.coding[0].display;
		
		firstKeyVal = firstKeys.indexOf(xval);
		secondKeyVal = secondKeys.indexOf(yval);
		if (secondKeyVal < 0) {
			secondKeyVal = 2;
		}
		if (firstKeyVal < 0) {
			firstKeyVal = 1;
		}
		data[firstKeyVal].values[secondKeyVal].value += 1;
	}
}