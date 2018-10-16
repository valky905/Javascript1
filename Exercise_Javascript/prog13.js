


function flatten(arr) {
     var result = [];
     function one_dim_arr(arg) {
         if (!Array.isArray(arg)) {
             result.push(arg);
         } else {
             for (var a in arg) {  
                 one_dim_arr(arg[a]);
             }
         }
      }
     one_dim_arr(arr);
     return result;
}
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
