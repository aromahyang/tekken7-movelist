import { INFORMATION } from '../utils/information';
import { LANGUAGE_LIST } from '../utils/languages';

class Information {
  constructor({ $button, $target, langIndex }) {
    this.$button = $button;
    this.$target = $target;
    this.language = LANGUAGE_LIST[langIndex];
    this.render();
  }

  template() {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const japanese =
      /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4e00-\u9faf]/; // reference: https://stackoverflow.com/a/15034560
    const wordRegex = new RegExp(`\\w|${korean.source}|${japanese.source}`);
    const regex = new RegExp(
      `(${wordRegex.source})+\\s:\\s(${wordRegex.source})+(\\s(${wordRegex.source})+)*`,
      'g'
    );
    const chunks = INFORMATION[this.language].matchAll(regex);
    return `
      <div class="tooltip-content">
        ${[...chunks]
          .map((chunk) => `<p>${chunk[0]}</p>`)
          .join('')}
      </div>
    `;
  }

  render() {
    this.$target.style.display = 'block';
    const clientRect = this.$button.getBoundingClientRect();
    this.$target.style.top = `${clientRect.top + 32}px`;
    this.$target.style.right = `calc(100% - ${clientRect.right}px)`;
    this.$target.innerHTML = this.template();
  }
}

export default Information;
