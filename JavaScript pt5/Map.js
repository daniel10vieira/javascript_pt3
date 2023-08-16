/*
        MAP => É utilizado para mapear um array.
            - Cria um novo array, a partir do array percorrido (array original)
            - Cria um novo array, com a mesma wuantidade de itens do array original
            - Aceita 3 parâmetros
                - item do array
                - index
                - array completo
*/
/* const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log( index + ' -> item')
    console.log( index + ' -> index')
    console.log( arrayOriginal + ' arrayOriginal')
    return item * 2
}) 

console.log(double) */


/* const list = [
    {name: 'Rodolfo', vip: true },
    {name: 'Maria', vip: false },
    {name: 'João', vip: true },
    {name: 'Bruno', vip: true },
    {name: 'Carla', vip: true },
    {name: 'Ana', vip: true },
    {name: 'Julio', vip: false },
]

const newList = list.map( user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList) */


const students = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
]

const newStudents = students.map( student => {
    return {
        name: student.name,
        studentStatus: student.testGrade >= 5 ? 'Promovido' : 'Reprovado'
    }
})

console.log(newStudents)