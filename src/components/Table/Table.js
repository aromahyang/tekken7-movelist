import TableRow from './TableRow';
import { smoothScrollIntoView, smoothScrollTop } from '~/utils/scroll';
import EXTRA_MOVES from '~/utils/extraMoves';

class Table {
  constructor({ $target, movelistJson, languageJson, name, langIndex }) {
    this.$target = $target;
    this.$wrapper = document.querySelector('.move-table-wrapper');
    this.movelistJson = movelistJson;
    this.languageJson = languageJson;
    this.name = name;
    this.langIndex = langIndex;
    this.handleSpecialMoveClick = this.handleSpecialMoveClick.bind(this);
    this.handleExtraMoveFilterChange =
      this.handleExtraMoveFilterChange.bind(this);
    this.render();
    this.addEvent();
  }

  handleSpecialMoveClick(event) {
    const $td = this.$target.querySelector(
      `td[data-special-move='${event.detail.id}']`
    );
    smoothScrollIntoView($td);
  }

  handleExtraMoveFilterChange(event) {
    const array = Array.from(event.detail.values);
    this.render(array);
    smoothScrollTop(this.$wrapper);
  }

  addEvent() {
    window.addEventListener('specialMoveClick', this.handleSpecialMoveClick);
    window.addEventListener(
      'extraMoveChange',
      this.handleExtraMoveFilterChange
    );
  }

  removeEvent() {
    window.removeEventListener('specialMoveClick', this.handleSpecialMoveClick);
    window.removeEventListener(
      'extraMoveChange',
      this.handleExtraMoveFilterChange
    );
  }

  template(filterValues = []) {
    const { movelist } = this.movelistJson;
    const list = filterValues.length
      ? movelist.filter((item) => {
          let result = false;
          for (let i = 0; i < filterValues.length; i++) {
            result ||= item[EXTRA_MOVES[filterValues[i]]];
            if (result) {
              break;
            }
          }
          return result;
        })
      : movelist;
    return list
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

  render(filterValues = []) {
    const $header = document.querySelector('.movelist-header');
    const $name = $header.querySelector('.movelist-header__name');
    $name.innerHTML = `${this.name}`;

    this.$target.innerHTML = this.template(filterValues);
  }
}

export default Table;
