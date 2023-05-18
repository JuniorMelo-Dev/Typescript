// Criando Enum
var CardSuits;
(function (CardSuits) {
    CardSuits[CardSuits["Clubs"] = 0] = "Clubs";
    CardSuits[CardSuits["Hearts"] = 1] = "Hearts";
    CardSuits[CardSuits["Spades"] = 2] = "Spades";
    CardSuits[CardSuits["Diamonds"] = 3] = "Diamonds";
})(CardSuits || (CardSuits = {}));
function funcao() {
    var x = 0;
    if (x === CardSuits.Hearts) {
        alert("True");
    }
    console.log(CardSuits.Clubs);
}
funcao();
