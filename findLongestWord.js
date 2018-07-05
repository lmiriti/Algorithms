//This algorithm returns the count of the longest word in any pharse fed into it.

var globalCount = 0;

function longestWord(str) {
	
	var array = str.split(' ');
	
	for (var i = 0; i < array.length; i++) {
		if(array[i].length > globalCount) {
			globalCount = array[i].length;
		};
	}
}

var string = longestWord("The quick brown fox jumpedaaaaaaa over the lazy dog");

console.log(globalCount);