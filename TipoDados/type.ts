// Criando Enum

enum CardSuits {Clubs, Hearts, Spades, Diamonds}

function funcao() {
    let x = 0;
    if (x === CardSuits.Hearts) {
        alert("True");
    }
    console.log(CardSuits.Clubs);
}

funcao();