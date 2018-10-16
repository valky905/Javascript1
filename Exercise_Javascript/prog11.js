
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));


/*
function sortAlphabet(str) {
  return [...str].sort((a, b) => a.localeCompare(b));
}

console.log(sortAlphabet("webmaster"));
*/
