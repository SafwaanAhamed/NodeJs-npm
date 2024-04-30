console.log("Hello World");
const fact=require('factorial');
console.log("Factorial is "+fact(3));

console.log("Happy Learning cool");
console.log("start");
fetch("https://dummyjson.com/products/1")
.then(function cbF(){
    console.log("CB API");
});
console.log("End");
