import { aiChoose } from "./ai-choose.js";
import {
  elai,
  elHands,
  elmodechanger,
  elplayer,
  elRefreshGameButton,
  elstatustext,
  elrules,
  elShowRulesModalButton,
  elRefreshGameWindow,
  elAiHand,
  elUserHand
} from "./html-selection.js";
import { switchzone } from "./switch-zone.js";
import { checkWinner } from "./check-winner.js";
import { mode, modechanger } from "./constants.js";

// hands
elHands.forEach((el) => {
  el.addEventListener("click", (e) => {
    const player = e.target.alt;
    const playerSrc = e.target.src;
    elplayer.src = playerSrc;
    switchzone(true);
    setTimeout(() => {
      const ai = aiChoose(mode);
      const winner = checkWinner(ai, player);
      elai.src = `images/${ai}.svg`;
      elstatustext.textContent = winner;
    }, 1000);
  });
});

// // refresh game
// elrefreshgamebutton.addEventListener("click", () => {
//   switchzone(false);
//   elai.src = `images/oval.svg`;
// });

// mode changer
elmodechanger.addEventListener("click", () => {
  if (mode === "easy") {
    elmodechanger.textContent = "hard mode";
    modechanger("hard");
  } else {
    modechanger("easy");
    elmodechanger.textContent = "easy mode ";
  }
});

// Rules modal controller
elShowRulesModalButton.onclick = () => {
  elrules.showModal();
};

elrules.onclick = ({ target }) => {
  target === elrules && elrules.close();
};

// Refresh game
elRefreshGameButton.onclick = () => {
  window.location.reload(); // sahifani yangilaydi
};
