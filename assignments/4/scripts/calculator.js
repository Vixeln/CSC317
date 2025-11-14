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
    function: undefined,
  },
];

actions.forEach((action) => {
  new Action(action.identifier, action.keybind, action.function);
});

console.log(Action);

document.querySelectorAll("#calculator > div > button").forEach((element) => {
  const action = Action.actions.get(element.dataset.action);
  if (action) action.button = element;
});


document.addEventListener("click", (event) => {
  console.log(event.target);
});
