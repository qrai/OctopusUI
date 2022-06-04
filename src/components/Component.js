export default class Component {
  constructor() {
    super();

    this.$shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.mounted?.();
  }
  disconnectedCallback() {
    this.unmounted?.();
  }

  static register(tag, componentClass) {
    window.customElements.define(tag, componentClass);
  }
}
