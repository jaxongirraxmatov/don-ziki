import { handsArray } from "./constants.js";

export function aiChoose(mode = "easy") {
    const hard = 5;
    const easy = 3; 
    const max = mode === "easy" ? easy : hard;

    const randIndex = Math.trunc(Math.random() * max);
    return handsArray[randIndex];
}
