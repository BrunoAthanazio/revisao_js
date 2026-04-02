function calcularMedia(nums) {
    if(nums.length === 0){return 0}
    let soma = 0;
    for(let i = 0; i < nums.length; i++){
        soma += nums[i];
    }
    return soma / nums.length;
}

console.log(calcularMedia([10, 5]));