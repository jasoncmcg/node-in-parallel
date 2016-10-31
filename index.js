module.exports = function (inputArray, singleCb, finalCb) {
for (let i = 0, len = inputArray.length, lenTarget = 0; i < len; i++) {
	(function() {
		let ii = i;
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
