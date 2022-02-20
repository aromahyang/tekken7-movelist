import characterJson from './assets/json/characters.json';
import controlJson from './assets/json/controls.json';
import languageJson from './assets/json/languages';
import movelistJson from './assets/json/movelists';
import {
  CharacterCard,
  Table,
  InformationButton,
  LanguageButton,
} from './components';
import { tooltipEvent } from './events';
import {
  CHARACTER_INDEX_COOKIE,
  LANGUAGE_INDEX_COOKIE,
  getCookie,
  setCookie,
} from './utils/cookies';
import smoothScrollTop from './utils/scroll';
import { trickHeight } from './utils/deviceHeight';
import './index.css';
import './tooltip.css';

class App {
  constructor() {
    this.controlMap;
    this.language;
    this.characters;
    this.charIndex = 0;
    this.langIndex = 0;
    this.charMenuOpen = false;
    this.tooltipOpen = [false, false, false]; // filter, information, language

    this.$charContainer = document.querySelector('.character-container');
    this.$tbodyOfCharacters = document.querySelector('.character-content');
    this.$wrapperOfMovelist = document.querySelector('.move-table-wrapper');
    this.$tbodyOfMovelist = document.querySelector('.move-table > tbody');

    this.mounted();
    this.addEvent();
    this.render();
  }

  mounted() {
    trickHeight();
    if (navigator.language === 'ko') {
      // change title by browser langauge
      document.title = '철권7 프레임표';
    }
    this.controlMap = controlJson;
    this.characters = characterJson;
    this.charIndex = getCookie(CHARACTER_INDEX_COOKIE) ?? 0;
    const current = this.characters[this.charIndex];
    this.langIndex = getCookie(LANGUAGE_INDEX_COOKIE) ?? 0;
    this.language = languageJson[current.first_name];
    new InformationButton({
      langIndex: this.langIndex,
      onClick: () => {
        window.dispatchEvent(tooltipEvent(1));
        this.tooltipOpen[0] = false;
        this.tooltipOpen[1] = !this.tooltipOpen[1];
        this.tooltipOpen[2] = false;
        return this.tooltipOpen[1];
      },
    });
    new LanguageButton({
      onClick: () => {
        window.dispatchEvent(tooltipEvent(2));
        this.tooltipOpen[0] = false;
        this.tooltipOpen[1] = false;
        this.tooltipOpen[2] = !this.tooltipOpen[2];
        return this.tooltipOpen[2];
      },
    });
  }

  addEvent() {
    window.addEventListener('resize', () => {
      trickHeight();
      if (window.innerWidth <= 800) {
        this.$charContainer.style.display = this.charMenuOpen ? 'flex' : 'none';
      } else {
        this.$charContainer.style.display = 'flex';
      }
      this.renderCharacterCards();
    });

    window.addEventListener('languageChange', () => {
      this.langIndex = getCookie(LANGUAGE_INDEX_COOKIE);
      this.renderTable();
      window.dispatchEvent(tooltipEvent(-1));
      this.tooltipOpen = [false, false, false];
    });

    this.$tbodyOfCharacters.addEventListener('click', (e) => {
      const { target } = e;
      if (!target.dataset.character) {
        return;
      }

      const { character } = target.dataset;
      this.charIndex = +character;
      setCookie(CHARACTER_INDEX_COOKIE, character);
      this.render();
      smoothScrollTop(this.$wrapperOfMovelist);
      this.charMenuOpen = false;
      if (window.innerWidth <= 800) {
        this.$charContainer.style.display = 'none';
      }
    });

    const $menuButton = document.querySelector('.movelist-header__button');
    $menuButton.addEventListener('click', () => {
      this.charMenuOpen = true;
      this.$charContainer.style.display = 'flex';
    });

    const $closeButton = document.querySelector(
      '.close-button-wrapper > button'
    );
    $closeButton.addEventListener('click', () => {
      this.charMenuOpen = false;
      this.$charContainer.style.display = 'none';
    });

    const $scrollTopButton = document.querySelector('.scroll-top-button');
    $scrollTopButton.addEventListener('click', () => {
      smoothScrollTop(this.$wrapperOfMovelist);
    });
  }

  renderCharacterCards() {
    const current = this.characters[this.charIndex];
    this.$tbodyOfCharacters.innerHTML = '';
    this.characters.forEach((char, i) => {
      new CharacterCard({
        ...char,
        index: i,
        selected: char.name === current.name,
        $target: this.$tbodyOfCharacters,
      });
    });
  }

  renderTable() {
    const { name, filename } = this.characters[this.charIndex];
    new Table({
      name,
      movelistJson: movelistJson[filename],
      languageJson: languageJson[filename],
      langIndex: this.langIndex,
      $target: this.$tbodyOfMovelist,
    });
  }

  render() {
    this.renderCharacterCards();
    this.renderTable();
  }
}

export default App;
