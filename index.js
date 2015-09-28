module.exports = function (inputArray, singleCb, finalCb) {
var len = inputArray.length;
var lenTarget = 0;

for (i = 0; i < len; i++) {
	(function() {
		var ii = i;
		process.nextTick( function(){
			singleCb(inputArray[ii]);
			lenTarget++;
			
			if (lenTarget === len) {
				finalCb(inputArray);
			}
		});
	})();
}
}