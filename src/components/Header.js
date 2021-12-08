import logo from '../assets/images/logo.png';

class Header {
  constructor() {
    this.render();
  }

  template() {
    return `
      <img class="header__image" src=${logo}>
      <h3 class="header__h3">MOVELIST</h3>
    `;
  }

  render() {
    const $header = document.querySelector('.header');
    $header.innerHTML = this.template();
  }
}

export default Header;
