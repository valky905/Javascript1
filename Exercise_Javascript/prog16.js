var flatten = function(a, shallow,r){
  if(!r){ r = []}
   
if (shallow) {
  return r.concat.apply(r,a);
  }
      
   for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}


var obj = {
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
}

var myresult = Object.keys(obj).map(function(key) {
  return [obj[key]];
});
console.log(flatten(myresult));

