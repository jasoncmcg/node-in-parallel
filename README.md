# node-in-parallel
A node-specific foreach that runs asynchronously by launching a callback on each item and another callback when all have been run.

This uses a very efficient for loop with a cached value and also uses an efficient way to split up parallel asynchronous processes by the process nextTick. This is fills a simple and repeating need of forEach in node.

# Example

This shows an extremely simple array that goes in. Then, the first callback runs for each individual item. The final callback happens at the end of the last one.

```
var p = require('parallel');

p([1,2,3,4], function(item) {
	console.log('The callback that happens for each individual item.', item);
}, function(final){
	console.log('Last callback happens on last item and returns the original array.', final);
});
```
