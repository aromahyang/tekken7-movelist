import languageJson from '~/assets/json/languages';
import { LANGUAGE_LIST } from '~/utils/languages';
import { specialMoveEvent } from '~/events';

class FilterTooltip {
  constructor({ $button, onChange }) {
    this.$button = $button;
    this.$target = document.querySelector('.filter-tooltip-container');
    this.$content = this.$target.querySelector('section');
    this.handleSpecialMoveClick = this.handleSpecialMoveClick.bind(this);
    this.handleExtraMoveChange = this.handleExtraMoveChange.bind(this);
    this.onChange = onChange;
    this.addEvent();
  }

  handleSpecialMoveClick(event) {
    const { target } = event;
    if (target.dataset.specialMove) {
      this.onChange({ value: '0' });
      window.dispatchEvent(specialMoveEvent(target.dataset.specialMove));
      this.render({ open: false });
    }
  }

  handleExtraMoveChange(event) {
    const {
      target: { value, checked },
    } = event;
    this.onChange({ value, checked });
  }

  addEvent() {
    const $specialMoves = this.$target.querySelector(
      '.special-move-filter > span'
    );
    $specialMoves.addEventListener('click', this.handleSpecialMoveClick);

    const $extraMoves = this.$target.querySelectorAll(
      '.move-extra-filter input'
    );
    $extraMoves.forEach((element) => {
      element.addEventListener('change', this.handleExtraMoveChange);
    });
  }

  removeEvent() {
    const $specialMoves = this.$target.querySelector(
      '.special-move-filter > span'
    );
    $specialMoves.removeEventListener('click', this.handleSpecialMoveClick);

    const $extraMoves = this.$target.querySelectorAll(
      '.move-extra-filter input'
    );
    $extraMoves.forEach((element) => {
      element.removeEventListener('change', this.handleExtraMoveChange);
    });
  }

  template({ langIndex, character, extraMoves }) {
    const specialMoves = Object.entries(languageJson[character])
      .filter(([id, item]) => item[LANGUAGE_LIST[langIndex]].startsWith('-'))
      .map(([id, item]) => ({
        id,
        value: item[LANGUAGE_LIST[langIndex]].slice(1, -1),
      }));

    return `
      <div class="special-move-filter">
        <span>
          ${langIndex !== 0 ? 'Scroll to ' : ''}
          ${specialMoves
            .map(
              (move) =>
                `<span class="special-move special-move-${move.id}" data-special-move="${move.id}">${move.value}</span>`
            )
            .join(' | ')}
          ${langIndex === 0 ? ' 로 이동' : ''}
        </span>
      </div>
      <div class="tooltip-divider"></div>
      <div class="move-extra-filter">
        <label>
          <input type="checkbox" value="1" ${
            extraMoves.has('1') ? 'checked' : ''
          } />
          <span class="checkmark"></span>
          ${langIndex === 0 ? '호밍기' : 'Homing Attack'}
        </label>
        <label>
          <input type="checkbox" value="2" ${
            extraMoves.has('2') ? 'checked' : ''
          } />
          <span class="checkmark"></span>
          ${langIndex === 0 ? '파워크래시' : 'Power Crush'}
        </label>
        <label>
          <input type="checkbox" value="3" ${
            extraMoves.has('3') ? 'checked' : ''
          } />
          <span class="checkmark"></span>
          ${langIndex === 0 ? '스크류' : 'Tail Spin'}
        </label>
        <label>
          <input type="checkbox" value="4" ${
            extraMoves.has('4') ? 'checked' : ''
          } />
          <span class="checkmark"></span>
          ${langIndex === 0 ? '월바운드' : 'Wall Bound'}
        </label>
      </div>
      `;
  }

  render({ open, langIndex = 0, character = '', extraMoves = new Set() }) {
    if (open && character) {
      this.$target.style.display = 'block';
      const clientRect = this.$button.getBoundingClientRect();
      this.$target.style.top = `${clientRect.top + 36}px`;
      this.$target.style.right = `calc(100% - ${clientRect.right}px)`;
      this.$content.innerHTML = this.template({
        langIndex,
        character,
        extraMoves,
      });
      this.addEvent();
    } else {
      this.$target.style.display = 'none';
      this.removeEvent();
    }
  }
}

export default FilterTooltip;
