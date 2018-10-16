let myArray = [2,4,6,5,2,7,2,3,1,2,6];

function noDups(arr){
arr = new Set(arr);
return Array.from(arr);
};
console.log(noDups(myArray));
