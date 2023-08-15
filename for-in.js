/*
Estrutura de Repetição - LOOP
    - FOR IN
*/

const users = { name: 'Rodolfo', age: 33, street: "Rua dos Bobos"}

//console.log(users.name) -> Rodolfo
//console.log(users['name']) -> Rodolfo


 for (const key in users) {
     console.log(key + ": " + users[key])
}

/*
 for (const key in users) {
     console.log(`${key} + : + ${users[key]}`)        Podemos usar o template strings também na hora de colocar as variáveis no for in.
}
*/

