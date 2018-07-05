//This algorithms return an array with the largest numbers in each array fed into it.




//Basic algorithm solution
function largestNumber(arr) {
	
	var result = [0]; //to store the result in an array
	
	for (var i = 0; i < arr.length; i++) { //to iterate over outter arrays
		var globalCount = arr[i][0]; //to store the largest number in every sub-array
		for (var j = 0; j < arr[i].length; j++) { 
			if(arr[i][j] > globalCount) {
				globalCount = arr[i][j];	
			};
		}
		
		result[i] = globalCount;
	}
	return result;
}

var arrayList = largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(arrayList);




//Intermediate algorithm solution
function largestOfFou(arr) {
	  return arr.map(function(group){
	    return group.reduce(function(prev, current) {
	      return (current > prev) ? current : prev;
	    });
	  });
	}

var ans = largestOfFou([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(ans);




//advanced algorithm solution
function largestOfFour(arr) {
	  return arr.map(Function.apply.bind(Math.max, null));
	}

var answer = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(answer);




//My algorithm solution

function myFunc(arr) {
	
	var resultArray = [];
	for (var i = 0; i < arr.length; i++) {
		var largstNumInEach = arr[i][0];
		for (var j = 0; j < arr[i].length; j++) {
			if(arr[i][j] > largstNumInEach) {
				largstNumInEach = arr[i][j]
			}
		}
		resultArray[i] = largstNumInEach;
	}
	
	return resultArray;
	
}

var list = myFunc([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(list);





























