import LanguageTooltip from './LanguageTooltip';

class LanguageButton {
  constructor({ onClick }) {
    this.$target = document.querySelector('.language-button');
    this.tooltip = new LanguageTooltip({ $button: this.$target });
    this.tooltipOpen = false;
    this.onClick = onClick;
    this.addEvent();
  }

  addEvent() {
    this.$target.addEventListener('click', () => {
      this.tooltipOpen = this.onClick();
      this.tooltip.render(this.tooltipOpen);
    });
    window.addEventListener('tooltipChange', (e) => {
      if (e.detail.index !== 2) {
        this.tooltipOpen = false;
        this.tooltip.render(this.tooltipOpen);
      }
    });
    window.addEventListener('resize', () => {
      if (this.tooltipOpen) {
        this.tooltip.render(this.tooltipOpen);
      }
    });
  }
}

export default LanguageButton;
