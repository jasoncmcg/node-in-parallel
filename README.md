# node-in-parallel
A node-specific foreach that runs asynchronously by launching a callback on each item and another callback when all have been run.

This uses a very efficient for loop with a cached value and also uses an efficient way to split up parallel asynchronous processes by the process nextTick. This fills a simple and repeating need of forEach in node.

# Example

This shows an extremely simple array that goes in. Then, the first callback runs for each individual item. The final callback happens at the end of the last one.

```
let forParallel = require('node-in-parallel');

forParallel([1,2,3,4], item =>	console.log('for each item: ', item), final =>	console.log('called last ', final) );
```

# Other Example


```
forParallel(bigList, function(listItem) {
	console.log(listItem);
}, function () {
	cb("All done");
});
```
