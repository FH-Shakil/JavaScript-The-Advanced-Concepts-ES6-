//There are only six falsey values in JavaScript :
// false of course
// 0
// "" (empty string), 
// udenfined
// null
// NaN
//Truthy
//'0', ' ' []
let name = 12;
if(name  || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}