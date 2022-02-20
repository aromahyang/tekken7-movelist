import InformationTooltip from './InformationTooltip';

class InformationButton {
  constructor({ langIndex, onClick }) {
    this.$target = document.querySelector('.information-button');
    this.tooltip = new InformationTooltip({ $button: this.$target });
    this.tooltipOpen = false;
    this.langIndex = langIndex;
    this.onClick = onClick;
    this.addEvent();
  }

  addEvent() {
    this.$target.addEventListener('click', () => {
      this.tooltipOpen = this.onClick();
      this.tooltip.render({ open: this.tooltipOpen, langIndex: this.langIndex });
    });
    window.addEventListener('tooltipChange', (e) => {
      if (e.detail.index !== 1) {
        this.tooltipOpen = false;
        this.tooltip.render({ open: this.tooltipOpen, langIndex: this.langIndex });
      }
    });
    window.addEventListener('resize', () => {
      if (this.tooltipOpen) {
        this.tooltip.render({ open: this.tooltipOpen, langIndex: this.langIndex });
      }
    });
  }
}

export default InformationButton;
