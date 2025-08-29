import { elmodehard, elzonegrid, elHands } from "./html-selection.js";

export const { rock, scissors, paper, spock, lizard } = {
  rock: "rock",
  scissors: "scissors",
  paper: "paper",
  spock: "spok",
  lizard: "lizard",
};

export const hands = [rock, paper, scissors, spock, lizard];

export let mode = "easy";
export function modechanger(value) {
  mode = value;

  elHands.forEach((el) => {
    if (el.alt === "rock") {
      if (value === "hard") {
        el.parentElement.classList.remove(
          "col-start-1",
          "col-end-3",
          "place-items-center"
        );
        el.parentElement.classList.add("place-items-end");
      } else {
        el.parentElement.classList.add(
          "col-start-1",
          "col-end-3",
          "place-items-center"
        );
        el.parentElement.classList.remove("place-items-end");
      }
    }
    if (el.alt === "paper") {
      if (value === "hard") {
        el.parentElement.classList.add(
          "col-start-1",
          "col-end-3",
          "place-items-center"
        );
      } else {
        el.parentElement.classList.remove(
          "col-start-1",
          "col-end-3",
          "place-items-center"
        );
      }
    }
  });

  elmodehard.forEach((hand) => {
    if (value === "hard") {
      hand.classList.remove("hidden");
      elzonegrid.classList.remove(
        "grid-cols-2",
        "grid-rows-2",
        "gap-x-20",
        "gap-y-6",
        "bg-[url('../images/triangle.svg')]"
      );
      elzonegrid.classList.add(
        "grid-cols-2",
        "grid-rows-3",
        "gap-x-10",
        "gap-y-5",
        "bg-[url('../images/Polygon.svg')]"
      );
    } else {
      hand.classList.add("hidden");
      elzonegrid.classList.remove(
        "grid-cols-2",
        "grid-rows-3",
        "gap-x-10",
        "gap-y-5",
        "bg-[url('../images/Polygon.svg')]"
      );
      elzonegrid.classList.add(
        "grid-cols-2",
        "grid-rows-2",
        "gap-x-20",
        "gap-y-6",
        "bg-[url('../images/triangle.svg')]"
      );
    }
  });
}
