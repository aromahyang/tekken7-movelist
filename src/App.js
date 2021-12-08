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
    this.charIndex = 0;
    this.langIndex = 0;
    this.charMenuOpen = false;
    this.mounted();
    this.render();
  }

  mounted() {
    this.controlMap = controlJson;
    this.characters = characterJson;
    this.language = languageJson[this.characters[this.charIndex].first_name];
  }

  render() {
    document.body.style.backgroundImage = `url(${bgImg})`;
    const header = new Header();
    header.render();

    this.characters.forEach((char, i) => {
      const card = new CharacterCard({ ...char, index: i });
      card.render();
    });
  }
}

export default App;
