import thumbnails from '../assets/thumbnails';

class CharacterCard {
  constructor(props) {
    const {
      first_name: firstName,
      last_name: lastName,
      index,
      selected,
      $target,
    } = props;
    this.firstName = firstName;
    this.lastName = lastName;
    this.index = index;
    this.selected = selected;
    this.$target = $target;
    this.render();
  }

  template() {
    return `
    <tr>
      <td class="character-card ${
        this.selected ? 'character-card--selected' : ''
      }" data-character="${this.firstName}">
        <img class="character-card__image" src="${
          thumbnails[this.firstName]
        }" data-character="${this.firstName}" />
        <p class="character-card__name" data-character="${this.firstName}">${
      this.firstName
    }</p>
      </td>
    </tr>
    `;
  }

  render() {
    this.$target.insertAdjacentHTML('beforeend', this.template());
  }
}

export default CharacterCard;
