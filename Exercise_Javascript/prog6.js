function differenceOf2Arrays (array1, array2) {
var temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (var i in array1) {
if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(i in array2) {
if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}
//return temp.sort((a,b) => a-b);
return temp;
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
