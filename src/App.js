import characterJson from './assets/json/characters.json';
import controlJson from './assets/json/controls.json';
import languageJson from './assets/json/languages';
import movelistJson from './assets/json/movelists';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import Table from './components/Table';
import bgImg from './assets/images/background.jpg';
import {
  CHARACTER_INDEX_COOKIE,
  LANGUAGE_INDEX_COOKIE,
  getCookie,
  saveCookie
} from './utils/cookies';
import './index.css';

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
    this.$tbodyOfMovelist = document.querySelector('.move-table > tbody');
    this.$langSelect = document.querySelector('.movelist-header__select');

    this.mounted();
    this.addEvent();
    this.render();
  }

  mounted() {
    this.controlMap = controlJson;
    this.characters = characterJson;
    this.charIndex = getCookie(CHARACTER_INDEX_COOKIE) ?? 0;
    const current = this.characters[this.charIndex];
    this.langIndex = getCookie(LANGUAGE_INDEX_COOKIE) ?? 0;
    this.$langSelect[this.langIndex].selected = true;
    this.language = languageJson[current.first_name];
  }

  addEvent() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 800) {
        this.$charContainer.style.display = this.charMenuOpen
          ? 'flex'
          : 'none';
      } else {
        this.$charContainer.style.display = 'flex';
      }
      this.renderCharacterCards();
    });

    this.$tbodyOfCharacters.addEventListener('click', (e) => {
      const { target } = e;
      if (!target.dataset.character) {
        return;
      }

      const { character } = target.dataset;
      if (+character === 43) {
        alert(`Sorry. No data for Panda`);
        return;
      }
      this.charIndex = +character;
      saveCookie(CHARACTER_INDEX_COOKIE, character);
      this.render();
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

    this.$langSelect.addEventListener('change', (e) => {
      const { value } = e.target;
      this.langIndex = +value;
      saveCookie(LANGUAGE_INDEX_COOKIE, value);
      this.renderTable();
    });

    const $infoButton = document.querySelector('.information-button');
    $infoButton.addEventListener('click', () => {});

    const $scrollTopButton = document.querySelector('.scroll-top-button');
    $scrollTopButton.addEventListener('click', () => {
      document
        .querySelector('.move-table-wrapper')
        .scroll({ top: 0, behavior: 'smooth' });
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
    document.body.style.backgroundImage = `url(${bgImg})`;

    new Header();

    this.renderCharacterCards();
    this.renderTable();
  }
}

export default App;
