function sum(n){
    //回傳1+2+3+4...+n的結果
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sum(1));
console.log(sum(5));
