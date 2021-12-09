import characterJson from './assets/json/characters.json';
import controlJson from './assets/json/controls.json';
import languageJson from './assets/json/languages';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard';
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

    this.mounted();
    this.addEvent();
    this.render();
  }

  mounted() {
    this.controlMap = controlJson;
    this.characters = characterJson;
    this.character = this.characters[0].first_name;
    this.language = languageJson[this.character];
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
  }

  render() {
    document.body.style.backgroundImage = `url(${bgImg})`;

    new Header();

    this.$tbodyOfCharacters.innerHTML = '';
    this.characters.forEach((char, i) => {
      new CharacterCard({
        ...char,
        index: i,
        selected: this.character === char.first_name,
        $target: this.$tbodyOfCharacters,
      });
    });
  }
}

export default App;
