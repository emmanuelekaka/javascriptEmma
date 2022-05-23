const factorial = (n)=>{
    if(n==0){
        return 1
    }
    //this keeps returning that very number over and over again
    return n*factorial(n-1)
}
console.log(factorial(5))