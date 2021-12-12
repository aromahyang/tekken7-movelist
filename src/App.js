import characterJson from './assets/json/characters.json';
import controlJson from './assets/json/controls.json';
import languageJson from './assets/json/languages';
import movelistJson from './assets/json/movelists';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
import Table from './components/Table';
import bgImg from './assets/images/background.jpg';
import './index.css';

class App {
  constructor() {
    this.controlMap;
    this.language;
    this.characters;
    this.character = '';
    this.langIndex = 0;
    this.charMenuOpen = false;

    this.$tbodyOfCharacters = document.querySelector(
      '.character-table > tbody'
    );
    this.$tbodyOfMovelist = document.querySelector('.move-table > tbody');

    this.mounted();
    this.addEvent();
    this.render();
  }

  mounted() {
    this.controlMap = controlJson;
    this.characters = characterJson;
    const current = this.characters[0];
    this.character = `${current.first_name} ${current.last_name}`;
    this.language = languageJson[current.first_name];
  }

  addEvent() {
    this.$tbodyOfCharacters.addEventListener('click', (e) => {
      const { target } = e;
      if (!target.dataset.character) {
        return;
      }

      const { character } = target.dataset;
      this.character = character;
      this.render();
    });

    const $langSelect = document.querySelector('.movelist-header__select');
    $langSelect.addEventListener('change', (e) => {
      const { value } = e.target;
      this.langIndex = +value;
      this.renderTable();
    });
  }

  renderCharacterCards() {
    this.$tbodyOfCharacters.innerHTML = '';
    this.characters.forEach((char) => {
      new CharacterCard({
        ...char,
        selected: this.character === `${char.first_name} ${char.last_name}`,
        $target: this.$tbodyOfCharacters,
      });
    });
  }

  renderTable() {
    const firstName = this.character.split(' ')[0];
    new Table({
      $target: this.$tbodyOfMovelist,
      movelistJson: movelistJson[firstName],
      languageJson: languageJson[firstName],
      fullName: this.character,
      langIndex: this.langIndex,
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
