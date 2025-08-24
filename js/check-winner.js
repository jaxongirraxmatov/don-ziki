import { rock, scissors, paper, lizard, spok } from "./constants.js";

export function checkWinner(ai, palyer, mode = "easy") {
    if (ai == palyer) {
        return "draw";
    } else if (ai == rock && (palyer == lizard || palyer == scissors)) {
        return "ai"
    } else if (ai == lizard && (palyer == spok || palyer == paper)) {
        return "ai"
    } else if (ai == spok && (palyer == scissors || palyer == rock)) {
        return "ai"
    } else if (ai == scissors && (palyer == paper || palyer == lizard)) {
        return "ai"
    } else if (ai == paper && (palyer == rock || palyer == spok)) {
        return "ai"
    } else {
        return "player"
    }
}
console.log(checkWinner("paper", "scissors"));
//  Rock (Tosh)

// Lizard(Kaltakesak)

// Spock(Star Trek’dagi qahramon ismi)

// Scissors(Qaychi)

// Paper(Qog‘oz)

//  Rock (Tosh)


