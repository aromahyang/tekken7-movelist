import thumbnails from '../assets/thumbnails';

class CharacterCard {
  constructor(props) {
    const { name, thumbnail, selected, $target } = props;
    this.name = name;
    this.thumbnail = thumbnail;
    this.selected = selected;
    this.$target = $target;
    this.render();
  }

  template() {
    return `
    <tr>
      <td
        class="character-card ${this.selected ? 'character-card--selected' : ''}"
        data-character="${this.name}"
        ${window.innerWidth <= 800 ? 'colspan="2"' : ''}
      >
        <img
          class="character-card__image"
          src="${thumbnails[this.thumbnail]}"
          data-character="${this.name}"
        />
        <p
          class="character-card__name"
          data-character="${this.name}"
        >
          ${this.name}
        </p>
      </td>
    </tr>
    `;
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
  }
}

export default CharacterCard;
