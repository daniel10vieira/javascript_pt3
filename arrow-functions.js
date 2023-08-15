/* Functions / Funções

    function padrão -> function() {

    }

    Arrow function -> () => {

    }

    Não escrevemos "function".
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".
*/

function sayMyName(name){
    return `Seu nome é ${name}`
}

const sayMyName2 = (name) => `Seu nome é ${name}` // Quando a minha arrow function tem 1 parâmetro só não é necessário o uso dos (name) -> name.

console.log(sayMyName('Rodolfo'))
console.log(sayMyName2('Nico'))

