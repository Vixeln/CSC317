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

/**
 * @description Helper function to add a multiplcation symbol (×) key to the expression
 *
 * Because multiplication display character is different from its keybind character, a separate function is required.
 * @param {Action} action
 */
function multiply(action) {
  expressionElement.value += "×";
}

/**
 * @description Helper function to remove the last character in the expression
 * @param {Action} action
 */
function popSymbol(action) {
  expressionElement.value = expressionElement.value.slice(0, -1);
}

/**
 * @description Helper function for toggle sign action. The function flips the sign of the last number in the expression.
 * This function can fail silently if it can't find a number at the end of the expression
 * @param {Action} action
 */
function toggleSign() {
  const regExMatch = expressionElement.value.match(/-?[0-9]*[.]?[0-9]+$/);
  let newExpression;

  if (regExMatch) {
    newExpression = expressionElement.value.replace(
      /-?[0-9]*[.]?[0-9]+$/,
      "-($&)"
    );
  } else {
    newExpression = expressionElement.value.replace(
      /-\((-?[0-9()]*[.]?[0-9()]*)\)$/,
      "$1"
    );
  }
  expressionElement.value = newExpression;
}

/**
 * @description Helper function to clear expression
 * @param {Action} action
 */
function clear() {
  expressionElement.value = "";
}

function evaluateExpression() {
  let input = expressionElement.value;

  if (input)
    try {
      input = input.replaceAll("×", "*");
      input = input.replaceAll("%", "/100");

      const output = eval(input);
      if (output == undefined) {
        throw new EvalError();
      }
      expressionElement.value = output;
    } catch (error) {
      if (error instanceof SyntaxError) expressionElement.value = error.message;
      // console.log(error)
    } finally {
      expressionElement.value = "Error";
    }
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
    keybind: "s",
    function: toggleSign,
  },
  {
    identifier: "add",
    keybind: "+",
    function: addSymbol,
  },
  {
    identifier: "subtract",
    keybind: "-",
    function: addSymbol,
  },
  {
    identifier: "multiply",
    keybind: "*",
    function: multiply,
  },
  {
    identifier: "divide",
    keybind: "/",
    function: addSymbol,
  },
  {
    identifier: "percent",
    keybind: "%",
    function: addSymbol,
  },
  {
    identifier: "=",
    keybind: "=",
    function: evaluateExpression,
  },
  {
    identifier: "delete",
    keybind: "Backspace",
    function: popSymbol,
  },
  {
    identifier: "clear",
    keybind: "Escape",
    function: clear,
  },
  {
    identifier: ".",
    keybind: ".",
    function: addSymbol,
  },
];

// Initialize all actions without knowing its associated button yet
actions.forEach((action) => {
  new Action(action.identifier, action.keybind, undefined, action.function);
});
// Bind each action to its associated button and add keybind tooltip when possible
document.querySelectorAll("#calculator > div > button").forEach((element) => {
  const action = Action.getActionByIdentifier(element.dataset.action);
  if (action) {
    action.button = element;
    element.setAttribute(
      "title",
      `${action.identifier} - Press [${action.keybind}]`
    );
  }
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
