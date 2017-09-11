function swapArray(array){

	var arraySize = array.length-1;
	var randomIndex='';
	var tempIndex='';
	for (var i = 0; i < arraySize; i++) {
		randomIndex = Math.floor((Math.random() * arraySize) + 0);
		tempIndex = array[i];
		array[i]=array[randomIndex];
		array[randomIndex]=tempIndex;
	}
	return array;
};

var targetArray = [
	"necessary", 
	"bound",
	"probably", 
	"realize", 
	"crisis",
	"humor", 
	"spouse"
]
console.log(swapArray(targetArray))
