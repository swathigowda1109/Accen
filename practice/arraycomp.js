var a1=[1,2,3,4,5,6];
// var a2=[1,2,3,8];

// const  results= a1.length==a2.length && a1.every((x)=>{
//     if(a2.indexOf(x)>-1){
//         return (x ==a2[a2.indexOf(x)])
//     }
// })
// console.log(results);
const arrayrot= (a1,r)=>{

if(r==0)
{
    return a1
};
for(let i=0;i<r;i++){
    let el=a1.pop();
    a1.unshift(el);
}return a1;

}

console.log(arrayrot(a1,1));