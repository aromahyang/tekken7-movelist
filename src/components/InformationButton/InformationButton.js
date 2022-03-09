import InformationTooltip from './InformationTooltip';

class InformationButton {
  constructor({ langIndex, onClick }) {
    this.$target = document.querySelector('.information-button');
    this.tooltip = new InformationTooltip({ $button: this.$target });
    this.tooltipOpen = false;
    this.langIndex = langIndex;
    this.onClick = onClick;
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTooltipChange = this.handleTooltipChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.addEvent();
  }

  handleButtonClick() {
    this.tooltipOpen = !this.tooltipOpen;
    this.tooltip.render({
      open: this.tooltipOpen,
      langIndex: this.langIndex,
    });
    this.onClick();
  }

  handleTooltipChange(event) {
    if (event.detail.index !== 1) {
      this.tooltipOpen = false;
      this.tooltip.render({
        open: this.tooltipOpen,
        langIndex: this.langIndex,
      });
    }
  }

  handleLanguageChange(event) {
    this.langIndex = event.detail.index;
  }

  handleResize() {
    if (this.tooltipOpen) {
      this.tooltip.render({
        open: this.tooltipOpen,
        langIndex: this.langIndex,
      });
    }
  }

  addEvent() {
    this.$target.addEventListener('click', this.handleButtonClick);
    window.addEventListener('tooltipChange', this.handleTooltipChange);
    window.addEventListener('languageChange', this.handleLanguageChange);
    window.addEventListener('resize', this.handleResize);
  }
}

export default InformationButton;
