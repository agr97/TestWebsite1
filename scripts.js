var STORAGE_KEY = 'data';

function setObject(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getObject(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var weightData = [];

if (localStorage.getObject(STORAGE_KEY) != undefined) {
	weightData = getObject(STORAGE_KEY);
}

window.onbeforeunload = function() {
	console.log('close attempted');
	return "are you sure?";
}

function storeData() {
	var weight = document.getElementById('weight').value;
	var date = document.getElementById('date').value;

	if (!isNaN(weight)) {
		weightData.push({date: date, weight: weight});
	}

	localStorage.setObject('data', weightData);
} 



