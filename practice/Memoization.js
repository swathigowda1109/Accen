let value=10
const memo={}
const fact=(num)=>{
    if(num==0 || num==1)
        return 1
    else
   {
        if(memo[num]==undefined)
        {
        memo[num]=fact(num-1)*num
        }
        return memo[num]
   }

}

console.log(fact(value))

// 5,4,3,2,1

