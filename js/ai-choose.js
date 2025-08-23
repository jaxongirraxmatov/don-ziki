export function aiChoose() {
    const hands = ["rock", "scissors", "paper", "lizard", "spok"];
    const randIndex = Math.trunc(Math.random() * hands.length);
    return hands[randIndex];
}