var s="sswerttyu";
const obj={}
for(let i=0;i<s.length;i++){
    if(obj[s[i]]==undefined){
        obj[s[i]]=1
    }
    else{
        obj[s[i]]+=1
    }
}
console.log(obj)
//extra
//"s2w1e1"
let outputStr=""
for(let i in obj){
    if(obj[i]>1)
    outputStr+=`${i}$`
    else
    outputStr+=`${i}${obj[i]}`
}
console.log(outputStr)




