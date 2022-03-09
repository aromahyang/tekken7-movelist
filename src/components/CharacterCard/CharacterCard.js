import thumbnails from '~/assets/thumbnails';

class CharacterCard {
  constructor(props) {
    const { cardname, filename, index, selected, $target } = props;
    this.name = cardname;
    this.index = index;
    this.thumbnail = filename.toLowerCase();
    this.selected = selected;
    this.$target = $target;
    this.render();
  }

  template() {
    return `
      <div
        class="character-card ${this.selected ? 'character-card--selected' : ''}"
        data-character="${this.index}"
        ${window.innerWidth <= 800 ? 'colspan="2"' : ''}
      >
        <img
          class="character-card__image"
          src="${thumbnails[this.thumbnail]}"
          data-character="${this.index}"
        />
        <p
          class="character-card__name"
          data-character="${this.index}"
        >
          ${this.name}
        </p>
      </div>
    `;
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
  }
}

export default CharacterCard;
