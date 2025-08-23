import { aiChoose } from "./ai-choose";
import { checkWinner } from "./check-winner";
let ai=aiChoose();
let result =checkWinner();
console.log(ai,result);
