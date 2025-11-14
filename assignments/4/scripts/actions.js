export class Action {
  /** @type {Map<string, Action>} */
  static actions = new Map();

  /**
   *
   * @param {string} identifier A unique identifier for each action
   * @param {string} keyBind The associated keyboard key to press to trigger the action
   * @param {HTMLButtonElement} button The associated button to press to trigger the action
   * @param {() => void} callBackFunction The function to call when the action is triggered
   */
  constructor(identifier, keyBind, button, callBackFunction) {
    this.identifier = identifier;
    this.keybind = keyBind;
    this.button = button;
    this.onTrigger = callBackFunction;

    new.target.actions.set(keyBind, this);
  }
}
