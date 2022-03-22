
// function rotateRight(arr,rotate)
// {
//     if(rotate==0)return arr;
//     else{
// for(let i=0;i<rotate;i++){
//     //let element=arr.pop();
//     let element=arr.pop();
//     arr.unshift(element);
// }
//     }return arr;
// }
// console.log(rotateRight([2, 3, 4, 5, 7], 1));

let arr1=[1,2,3,4];
let arr2=[4,2,1,3];

const comp=arr1.length ==arr2.length && arr1.every((x)=>{
if(arr2.indexOf(x)>-1){
return (x=arr2[arr2.indexOf(x)]);
}});

console.log(comp);
