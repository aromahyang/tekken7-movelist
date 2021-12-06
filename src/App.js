import s3 from './stores/s3.js';
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
  }

  mounted() {
    (async () => {
      const control = await s3
        .getObject({
          Bucket: 'tekken7-movelist-assets',
          Key: 'json/controls.json',
        })
        .promise();
      const characters = await s3
        .getObject({
          Bucket: 'tekken7-movelist-assets',
          Key: 'json/characters.json',
        })
        .promise();
      this.controlMap = JSON.parse(control.Body.toString('utf-8'));
      this.characters = JSON.parse(characters.Body.toString('utf-8'));

      const language = await s3
        .getObject({
          Bucket: 'tekken7-movelist-assets',
          Key: `json/language/${
            this.characters[this.charIndex].first_name
          }.json`,
        })
        .promise();
      this.language = JSON.parse(language.Body.toString('utf-8'));
    })();
  }
}

export default App;
