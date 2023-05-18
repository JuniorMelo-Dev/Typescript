// Criando Tuple

let tuple: [string, any, number] [] = [
    ['url', 'https://www.google.com/search', 1230],
    ['port', 5500, 1230]
]

function funcao() {
    tuple.forEach(element => {
        console.log(element[1])
    })
}

funcao();