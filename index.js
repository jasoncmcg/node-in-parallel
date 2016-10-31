module.exports = function(inputArray, singleCb, finalCb) {
	let lenTarget = 0;
	for (let i = 0, len = inputArray.length; i < len; i++) {
		(function() {
			let ii = i;
			process.nextTick(function() {
				singleCb(inputArray[ii]);
				lenTarget++;
				//console.log("target ", lenTarget)
				if (lenTarget === len) {
					finalCb(inputArray);
				}
			});
		})();
	}
}
