export function checkWinner(ai, palyer) {
    const { rock, scissors, paper, lizard, spok } = {
        rock: "rock",
        scissors: "scissors",
        paper: "paper",
        lizard: "lizard",
        spok: "spok"
    };
    if (ai == palyer) {
        return "draw";
    } else if (ai == rock && palyer == lizard) {
        return "ai"
    } else if (ai == lizard && palyer == spok) {
        return "ai"
    } else if (ai == spok && palyer == scissors) {
        return "ai"
    } else if (ai == scissors && palyer == paper) {
        return "ai"
    } else if (ai == paper && palyer == rock) {
        return "ai"
    }else {
        return "player"
    }
    

}
//  Rock (Tosh)

// Lizard(Kaltakesak)

// Spock(Star Trek’dagi qahramon ismi)

// Scissors(Qaychi)

// Paper(Qog‘oz)

//  Rock (Tosh)


