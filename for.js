/*
Estrutura de repetição - LOOP

    - FOR
        1) Inicialização - Criar uma variável e colocar um valor inicial pra ela.
        2) Condição - Enquanto for true, o laço continuará iterando.
                    Ele irá verificar antes de cada iteração.
        3) Expressão Final - O que irá acontecer a cada vez que o nosso laço der uma volta. 

    for([Inicialização]; [Condição]; [Expressão Final]){
        Seu código aqui.
    }
*/

const users = ["Larissa", "Paulo", "Aline", "Jhuan", "Eugênia", "Marcos", "Raianny", "Miguel", "Maria", "Ronan"]

for(let i = 0; i < users.length; i++){
    console.log(users[i])
}