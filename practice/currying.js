// const add=()=>(5)=>(2)=>(4)=>(5);
function add(a){
    return function (b){
        return function(c){
            return function (d){
                return function (){
                    return a+b+c+d;
                }
            }
        }
    }
}

console.log(add(5)(2)(4)(5)());