
// call
function func1(a){
	return this.num + a;
}

let obj1 = {num: 5}

console.log(func1.call(obj1,6));

// apply

function func2(b, c, d){
	return this.num + b + c + d;
};
let obj2 = {num: 50}
let arr1 = [10, 20, 30]
console.log(func2.apply(obj2, arr1));


// bind
function func3(b, c, d){
	return this.num + b + c + d;
};
obj3 = {num: 20};
let bound = func3.bind(obj3);
console.log(bound(4,5,6))

// 4th task
let student = {age: 20}
function func4(){
	console.log(this.age);
}
func4.bind(student)();

// currying
// using bind method
let multiply = function (x,y){
	console.log(x * y);
}

let multiply1 = multiply.bind(this, 2);
multiply1(3);

// using closures

let add = function(a){
	return function(b){
		console.log(a + b);
	}
}
let add1 = add(5);
add1(10);
