class Extra {
  constructor(props) {
    this.data = props;
  }

  template() {
    const { spin, crush, homing, bound } = this.data;
    return `
      <div class="move-extra">
        ${spin ? '<p class="move-extra__tail-spin"></p>' : ''}
        ${crush ? '<p class="move-extra__power-crush"></p>' : ''}
        ${homing ? '<p class="move-extra__homing-attack"></p>' : ''}
        ${bound ? '<p class="move-extra__wall-bound"></p>' : ''}
      </div>
    `;
  }
}

export default Extra;
