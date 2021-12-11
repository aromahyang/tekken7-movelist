import TableRow from './TableRow';

class Table {
  constructor({ $target, movelistJson, languageJson, fullName, langIndex }) {
    this.$target = $target;
    this.movelistJson = movelistJson;
    this.languageJson = languageJson;
    this.fullName = fullName;
    this.langIndex = langIndex;
    this.render();
  }

  template() {
    const { movelist } = this.movelistJson;
    return movelist
      .map((item) => {
        const row = new TableRow({
          data: item,
          languageJson: this.languageJson,
          langIndex: this.langIndex,
        });
        return row.template();
      })
      .join('');
  }

  render() {
    const $header = document.querySelector('.movelist-header');
    const $name = $header.querySelector('.movelist-header__name');
    $name.innerHTML = `${this.fullName}`;

    this.$target.innerHTML = this.template();
  }
}

export default Table;
