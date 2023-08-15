/* Functions / Funções

    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função.
*/

// function sum(value, value2){ // void
//     console.log(value + value2)
// }

// function sub(value, value2) {
//     const result = value - value2
//     return result
// }

// const myResult = sub(20, 12)
// console.log("Resultado: " + myResult)

const cart = [10, 244, 99, 2, 20, 33, 250]

let sum = cart.reduce(function(accumulator, value){
    return accumulator + value
}, 0);

for (i = 0; i < cart.lenght; i++){ // void
    sum+=cart[i];
}

console.log(sum)


let finalValueWithDiscount = 0;

function calculateDiscount(price, discount) {
  const result = (price * discount) / 100;
  return result;
}

cart.forEach((value) => {
  if (value > 30) {
    const discount = calculateDiscount(value, 10);
    finalValueWithDiscount = finalValueWithDiscount + (value - discount);
  } else {
    finalValueWithDiscount += value;
  }
});

console.log(`O valor final da compra foi de R$${sum}
porém você teve desconto, e irá pagar apenas R$${finalValueWithDiscount}`)
