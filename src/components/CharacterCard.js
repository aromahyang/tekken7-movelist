import thumbnails from '../assets/thumbnails';

class CharacterCard {
  constructor(props) {
    const { first_name: firstName, last_name: lastName, index } = props;
    this.firstName = firstName;
    this.lastName = lastName;
    this.index = index;
  }

  template() {
    return ``;
  }

  render() {
    const $tbody = document.querySelector('.character-table > tbody');
    const $tr = document.createElement('tr');
    $tr.innerHTML = `
      <td class="character-card">
        <img class="character-card__image" src="${
          thumbnails[this.firstName].default
        }" />
        <p class="character-card__name">${this.firstName}</p>
      </td>
    `;
    $tbody.append($tr);
  }
}

export default CharacterCard;
