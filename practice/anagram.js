//silent, listen

let arr1="silents";
let arr2="listen";
let s1=arr1.split('');
let s2=arr2.split('');
console.log(s1, s2);
// function Anagram(s1,s2){
// if(s1.length==s2.length && s1.every(arr2){
//     if(arr2.length>)
// })}
const comp= s1.length==s2.length && s1.every((x)=>{
    if(s2.indexOf(x)>-1){
        return x=s2[s2.indexOf(x)];
    }
})

console.log(comp);