/*
    ForEach(item, index, array)

    Item -> mostra cada linha do array. (Esse é obrigatório ter dentro do forEach.)
    Index -> mostra a posição do array.
    Array -> Repete o array inteiro.
*/


const contacts = [
    {name: 'Rodolfo', age: 33, contact: '(19) 981446533'},
    {name: 'Paulo', age: 21, contact: '(12) 988652549'},
    {name: 'Aline', age: 40, contact: '(13) 998261436'},
    {name: 'Maria', age: 12, contact: '(14) 992514432'},
]



contacts.forEach((item, index) => {
    console.log(`${index + 1}) Nome: ${item.name}, Idade: ${item.age}, Contato: ${item.contact}`)
});