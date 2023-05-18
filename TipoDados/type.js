// Criando Tuple
var tuple = [
    ['url', 'https://www.google.com/search', 1230],
    ['port', 5500, 1230]
];
function funcao() {
    tuple.forEach(function (element) {
        console.log(element[1]);
    });
}
funcao();
