//Arrow Function
var isEven= (hey) =>{
  
    return hey%2===0
};

console.log(isEven(2))

var test=[4,4,4,4,4].every(isEven)
console.log(test)

var test=[4,4,4,4,4].every((e)=>{
    console.log(e)
    return e%2===0
})
console.log(test)