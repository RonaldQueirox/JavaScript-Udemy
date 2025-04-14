const nums = [1, 2, 3, 23, 32, 77, 91, 103, 55, 43];
nums.push(43, 72, 132, 160, 149, 170)

// Função pra Achar MAIOR número da array
const max_nums = nums.reduce(function(num, numb) {
    return num > numb ? num : numb;
});

document.write(`O Maior número da Array Nums é ${max_nums} <br>`);

const min_nums = nums.reduce(function(num, numb) {
    return num < numb ? num : numb;
});

document.write(`O Menor número da Array Nums é ${min_nums}`);
