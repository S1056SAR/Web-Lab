function sum(arr){
    sum=0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
function multiply(arr){
    product=1;
    for(i=0;i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}
console.log(sum([1,2,3]));
console.log(multiply([1,2,3]));