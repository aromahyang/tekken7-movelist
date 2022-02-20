import {
  LANGUAGE_INDEX_COOKIE,
  getCookie,
  setCookie,
} from '../../../utils/cookies';
import { languageEvent } from '../../../events';

class LanguageTooltip {
  constructor({ $button }) {
    this.$button = $button;
    this.$target = document.querySelector('.language-tooltip-container');
    this.addEvent();
  }

  addEvent() {
    this.$target
      .querySelectorAll(`input[name="language"][type="radio"]`)
      .forEach((element) => {
        element.addEventListener('change', (e) => {
          const { value } = e.target;
          setCookie(LANGUAGE_INDEX_COOKIE, value);
          window.dispatchEvent(languageEvent(+value));
        });
      });
  }

  render(open) {
    if (open) {
      this.$target.style.display = 'block';
      const clientRect = this.$button.getBoundingClientRect();
      this.$target.style.top = `${clientRect.top + 36}px`;
      this.$target.style.right = `calc(100% - ${clientRect.right}px)`;
      this.$target.querySelectorAll(`input[name="language"][type="radio"]`)[
        getCookie(LANGUAGE_INDEX_COOKIE) ?? 0
      ].checked = true;
    } else {
      this.$target.style.display = 'none';
    }
  }
}

export default LanguageTooltip;
