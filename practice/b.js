
let s="LOL1";
let s1="10LL"

let arr=s.split('');
let arr1=s1.split('');
console.log(arr,arr1);

const palindrome= arr.length==arr1.length && arr1.every((x)=>{
    if(arr1.indexOf(x)>-1){
       return ( x==arr1[arr1.indexOf(x)])
    }
})

// const  results= a1.length==a2.length && a1.every((x)=>{
//     if(a2.indexOf(x)>-1){
//         return (x ==a2[a2.indexOf(x)])
//     }
// })
// console.log(results);


console.log(palindrome);





