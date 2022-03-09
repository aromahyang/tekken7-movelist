import FilterTooltip from './FilterTooltip';
import { extraMoveEvent } from '~/events';

class FilterButton {
  constructor({ langIndex, character, onClick }) {
    this.$target = document.querySelector('.filter-button');
    this.tooltip = new FilterTooltip({
      $button: this.$target,
      onChange: this.handleExtraMoveChange.bind(this),
    });
    this.tooltipOpen = false;
    this.langIndex = langIndex;
    this.character = character;
    this.extraMoveValues = new Set(); // for tooltip
    this.onClick = onClick;
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTooltipChange = this.handleTooltipChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleSpecialMoveClick = this.handleSpecialMoveClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.addEvent();
  }

  handleButtonClick() {
    this.tooltipOpen = !this.tooltipOpen;
    this.tooltip.render({
      open: this.tooltipOpen,
      langIndex: this.langIndex,
      character: this.character,
      extraMoves: this.extraMoveValues,
    });
    this.onClick();
  }

  handleTooltipChange(event) {
    if (event.detail.index !== 0) {
      this.tooltipOpen = false;
      this.tooltip.render({
        open: this.tooltipOpen,
        langIndex: this.langIndex,
        character: this.character,
        extraMoves: this.extraMoveValues,
      });
    }
  }

  handleLanguageChange(event) {
    this.langIndex = event.detail.index;
    this.handleExtraMoveChange({ value: '0' });
  }

  handleSpecialMoveClick() {
    this.tooltipOpen = false;
  }

  handleResize() {
    if (this.tooltipOpen) {
      this.tooltip.render({
        open: this.tooltipOpen,
        langIndex: this.langIndex,
        character: this.character,
        extraMoves: this.extraMoveValues,
      });
    }
  }

  handleExtraMoveChange({ value, checked = false }) {
    if (value === '0') {
      this.extraMoveValues = new Set();
      window.dispatchEvent(extraMoveEvent(new Set()));
      return;
    }
    if (checked) {
      this.extraMoveValues.add(value);
    } else {
      this.extraMoveValues.delete(value);
    }
    window.dispatchEvent(extraMoveEvent(this.extraMoveValues));
  }

  addEvent() {
    this.$target.addEventListener('click', this.handleButtonClick);
    window.addEventListener('tooltipChange', this.handleTooltipChange);
    window.addEventListener('languageChange', this.handleLanguageChange);
    window.addEventListener('specialMoveClick', this.handleSpecialMoveClick);
    window.addEventListener('resize', this.handleResize);
  }

  removeEvent() {
    this.$target.removeEventListener('click', this.handleButtonClick);
    window.removeEventListener('tooltipChange', this.handleTooltipChange);
    window.removeEventListener('languageChange', this.handleLanguageChange);
    window.removeEventListener('specialMoveClick', this.handleSpecialMoveClick);
    window.removeEventListener('resize', this.handleResize);
  }
}

export default FilterButton;
