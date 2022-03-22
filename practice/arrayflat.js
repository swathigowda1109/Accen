// function wordsReverser(string){
//     return string.split("").reverse().join("").split(" ").reverse().join(" ")  
//     }
    
//     console.log(wordsReverser('New string, same results.'));

var arr=[1,2,3,4,5,4,1,2,5,1,1,1,1,2,4];

let result=arr.filter((el,ind,arr)=> arr.indexOf(el) == ind);
console.log(result);