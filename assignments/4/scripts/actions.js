export class Action {
  /** @type {Map<string, Action>} */
  static #keybindMap = new Map();
  /** @type {Map<string, Action>} */
  static #identifierMap = new Map();

  identifier;
  keybind;
  button;
  onTrigger;

  /**
   *
   * @param {string} identifier A unique identifier for each action
   * @param {string} keyBind The associated keyboard key to press to trigger the action
   * @param {HTMLButtonElement} button The associated button to press to trigger the action
   * @param {(action: Action) => void} callBackFunction The function to call when the action is triggered
   */
  constructor(identifier, keyBind, button, callBackFunction) {
    this.identifier = identifier;
    this.keybind = keyBind;
    this.button = button;
    this.onTrigger = callBackFunction;

    new.target.#keybindMap.set(keyBind, this);
    new.target.#identifierMap.set(identifier, this);
  }

  // static set defaultOntrigger(newCallback) {
  // 	Action.defaultOntrigger = newCallback
  // }

  /**
   *
   * @param {string} identifier Get the action from the provided action identifier
   * @returns {Action}
   */
  static getActionByIdentifier(identifier) {
    return Action.#identifierMap.get(identifier);
  }

  /**
   *
   * @param {string} keybind Get the action from the provided keybind
   * @returns {Action}
   */
  static getActionByKeybind(keybind) {
    return Action.#keybindMap.get(keybind);
  }
}
