/**
 * The Calculator currently does not support keyboard input with modifier keys like control, alt, shift etc.
 */
import { Action } from "./actions.js";

/** @type {HTMLInputElement} */
let expressionElement = document.getElementById("expression");

/**
 * @description Helper function to add the pressed key to the expression
 * @param {Action} action
 */
function addSymbol(action) {
  expressionElement.value += action.keybind;
}

const actions = [
  {
    identifier: "0",
    keybind: "0",
    function: addSymbol,
  },
  {
    identifier: "1",
    keybind: "1",
    function: addSymbol,
  },
  {
    identifier: "2",
    keybind: "2",
    function: addSymbol,
  },
  {
    identifier: "3",
    keybind: "3",
    function: addSymbol,
  },
  {
    identifier: "4",
    keybind: "4",
    function: addSymbol,
  },
  {
    identifier: "5",
    keybind: "5",
    function: addSymbol,
  },
  {
    identifier: "6",
    keybind: "6",
    function: addSymbol,
  },
  {
    identifier: "7",
    keybind: "7",
    function: addSymbol,
  },
  {
    identifier: "8",
    keybind: "8",
    function: addSymbol,
  },
  {
    identifier: "9",
    keybind: "9",
    function: addSymbol,
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
