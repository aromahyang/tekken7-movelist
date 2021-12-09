import TableRow from './TableRow';

class Table {
  constructor({ $target, json, fullName }) {
    this.$target = $target;
    this.json = json;
    this.fullName = fullName;
    this.render();
  }

  template() {
    const { movelist } = this.json;
    return movelist
      .map((item) => {
        return `
        <tr></tr>
      `;
      })
      .join('');
  }

  render() {
    const $header = document.querySelector('.movelist-header');
    const $name = $header.querySelector('.movelist-header__name');

    $name.innerHTML = `${this.fullName}`;
    this.template();
  }
}

export default Table;
