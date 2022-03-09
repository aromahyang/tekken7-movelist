import characterJson from './assets/json/characters.json';
import controlJson from './assets/json/controls.json';
import languageJson from './assets/json/languages';
import movelistJson from './assets/json/movelists';
import {
  CharacterCard,
  Table,
  InformationButton,
  LanguageButton,
  FilterButton,
} from './components';
import { tooltipEvent } from './events';
import {
  CHARACTER_INDEX_COOKIE,
  LANGUAGE_INDEX_COOKIE,
  getCookie,
  setCookie,
} from './utils/cookies';
import { smoothScrollTop } from './utils/scroll';
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

    this.$charContainer = document.querySelector('.character-container');
    this.$tbodyOfCharacters = document.querySelector('.character-content');
    this.$wrapperOfMovelist = document.querySelector('.move-table-wrapper');
    this.$tbodyOfMovelist = document.querySelector('.move-table > tbody');

    this.filterButton = null;
    this.commandTable = null;

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
    this.filterButton = new FilterButton({
      langIndex: this.langIndex,
      character: this.characters[this.charIndex].filename,
      onClick: () => {
        window.dispatchEvent(tooltipEvent(0));
      },
    });
    new InformationButton({
      langIndex: this.langIndex,
      onClick: () => {
        window.dispatchEvent(tooltipEvent(1));
      },
    });
    new LanguageButton({
      onClick: () => {
        window.dispatchEvent(tooltipEvent(2));
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

    window.addEventListener('languageChange', (e) => {
      this.langIndex = e.detail.index;
      this.renderTable();
      window.dispatchEvent(tooltipEvent(-1));
    });

    this.$tbodyOfCharacters.addEventListener('click', (e) => {
      // 캐릭터 선택 시
      const { target } = e;
      if (!target.dataset.character) {
        return;
      }

      const { character } = target.dataset;
      this.charIndex = +character;
      setCookie(CHARACTER_INDEX_COOKIE, character);
      window.dispatchEvent(tooltipEvent(-1));
      this.render();
      smoothScrollTop(this.$wrapperOfMovelist);
      this.charMenuOpen = false;
      if (window.innerWidth <= 800) {
        this.$charContainer.style.display = 'none';
      }
      this.filterButton.removeEvent();
      this.filterButton = new FilterButton({
        langIndex: this.langIndex,
        character: this.characters[this.charIndex].filename,
        onClick: () => {
          window.dispatchEvent(tooltipEvent(0));
        },
      });
    });

    const $menuButton = document.querySelector('.movelist-header__button');
    $menuButton.addEventListener('click', () => {
      // 모바일에서 캐릭터 메뉴 버튼 클릭 시
      this.charMenuOpen = true;
      this.$charContainer.style.display = 'flex';
    });

    const $closeButton = document.querySelector(
      '.close-button-wrapper > button'
    );
    $closeButton.addEventListener('click', () => {
      // 모바일에서 캐릭터 메뉴 닫기 버튼 클릭 시
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
    if (this.commandTable) {
      this.commandTable.removeEvent();
    }
    this.commandTable = new Table({
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
