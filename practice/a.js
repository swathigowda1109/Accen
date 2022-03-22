// var secondMax = function (){ 
//     var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
//     var max = Math.max.apply(null, arr); // get the max of the array
//     arr.splice(arr.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, arr); // get the 2nd max
// };
// console.log(secondMax());
function reverse1(str)
{
    var r = " ";
    for(var i = str.length - 1; i >= 0; i--)
    {
      r += str.charAt(i);
    }
    return r;
  }
  //console.log()

 console.log( reverse1("swathi"));

// var rev=str.split('').reverse().join('');
// console.log(rev);
// function rev(s){
// var rev="";
// for(var i=s.length-1;i>=0;i--){
//    rev+=s.charAt[i];
// }
// return rev;
// }

// console.log(rev("swathi"));
 
