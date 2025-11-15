/**
 * The Calculator currently does not support keyboard input with modifier keys like control, alt, shift etc.
 */
import { Action } from "./actions.js";

let expression = document.getElementById("expression");

const actions = [
  {
    identifier: "0",
    keybind: "0",
  },
  {
    identifier: "1",
    keybind: "1",
  },
  {
    identifier: "2",
    keybind: "2",
  },
  {
    identifier: "3",
    keybind: "3",
  },
  {
    identifier: "4",
    keybind: "4",
  },
  {
    identifier: "5",
    keybind: "5",
  },
  {
    identifier: "6",
    keybind: "6",
  },
  {
    identifier: "7",
    keybind: "7",
  },
  {
    identifier: "8",
    keybind: "8",
  },
  {
    identifier: "9",
    keybind: "9",
  },
  {
    identifier: "toggle-sign",
    keybind: "-",
    // function: undefined,
  },
];

// Initialize all actions without knowing its associated button yet
actions.forEach((action) => {
  new Action(action.identifier, action.keybind, undefined, action.function);
});
// Bind each action to its associated button when possible
document.querySelectorAll("#calculator > div > button").forEach((element) => {
  const action = Action.getActionByIdentifier(element.dataset.action);
  if (action) action.button = element;
});

document.addEventListener("keydown", (event) => {
  const action = Action.getActionByKeybind(event.key);

  action?.button?.classList.add("active");
});

document.addEventListener("keyup", (event) => {
  const action = Action.getActionByKeybind(event.key);

  action?.button?.classList.remove("active");
  action?.button?.click();
});

document.addEventListener("click", (event) => {
  const action = Action.getActionByIdentifier(event.target.dataset.action);

  action.call();
});
