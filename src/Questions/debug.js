for (var i = 0; i < 5; i++) {
    console.log("Iteration: ".concat(i));
}
var array = [10, 20, 30, 40];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    console.log("Value: ".concat(value));
}
var object = { a: 1, b: 2, c: 3 };
for (var key in object) {
    if (object.hasOwnProperty(key)) {
        console.log("Key: ".concat(key, ", Value: ").concat(object[key]));
    }
}
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index) {
    console.log("Index: ".concat(index, ", Number: ").concat(number));
});
