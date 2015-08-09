var _ = require('underscore');

var obj = {a: 1, b: 2};
var arr = [1, 2];
//each
console.log(_.each(obj, function(element, index, list) {
    console.log(index + ':' + element);
}));
console.log(_.each(arr, function(element, index, list) {
    console.log(index + ':' + element);
}));
//map
console.log(_.map(obj, function(element, index, list) {
    return element * 3;
}));
console.log(_.map(arr, function(element, index, list) {
    return element * 3;
}));
//reduce
console.log(_.reduce(obj, function(memo, element) {
    return memo + element;
}, 10));
console.log(_.reduce(arr, function(memo, element) {
    return memo + element;
}, 10));

console.log(_.difference(arr,1));
console.log(arr);
