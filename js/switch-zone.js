import { elchoosezone, elstatuszone } from "./html-selection.js";

export function switchzone(boolean) {
  if (boolean) {
    elchoosezone.classList.add("hidden");
    elstatuszone.classList.remove("hidden");
  } else {
    elchoosezone.classList.remove("hidden");
    elstatuszone.classList.add("hidden");
  }
}
