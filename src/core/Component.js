class Component {
  constructor({ $target, ...others }) {
    this.$target = $target;
    this.props = { ...others };
    this.state = {};
    if ($target) {
      this.setup();
      this.render();
      this.addEvent();
    }
  }

  setup() {}

  addEvent() {}

  mounted() {}

  template() {
    return ``;
  }

  render() {
    if (this.$target) {
      this.$target.innerHTML = this.template();
      this.mounted();
    }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

export default Component;
