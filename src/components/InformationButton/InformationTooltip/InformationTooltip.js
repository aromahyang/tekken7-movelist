import { INFORMATION } from '~/utils/information';
import { LANGUAGE_LIST } from '~/utils/languages';

class InformationTooltip {
  constructor({ $button }) {
    this.$button = $button;
    this.$target = document.querySelector('.information-tooltip-container');
  }

  template(langIndex) {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const japanese =
      /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4e00-\u9faf]/; // reference: https://stackoverflow.com/a/15034560
    const wordRegex = new RegExp(`\\w|${korean.source}|${japanese.source}`);
    const regex = new RegExp(
      `(${wordRegex.source})+\\s:\\s(${wordRegex.source})+(\\s(${wordRegex.source})+)*`,
      'g'
    );
    const chunks = INFORMATION[LANGUAGE_LIST[langIndex]].matchAll(regex);
    return `
      <section class="tooltip-content information-tooltip">
        ${[...chunks].map((chunk) => `<p>${chunk[0]}</p>`).join('')}
      </section>
    `;
  }

  render({ open, langIndex }) {
    if (open) {
      this.$target.style.display = 'block';
      const clientRect = this.$button.getBoundingClientRect();
      this.$target.style.top = `${clientRect.top + 36}px`;
      this.$target.style.right = `calc(100% - ${clientRect.right}px)`;
      this.$target.innerHTML = this.template(langIndex);
    } else {
      this.$target.style.display = 'none';
    }
  }
}

export default InformationTooltip;
