import logo from '../assets/images/logo.png';

class Header {
  constructor() {
    this.mounted();
  }

  mounted() {
    const $header = document.querySelector(".header");
    $header.innerHTML = `
      <img class="header__image" src=${logo}>
      <h3 class="header__h3">MOVELIST</h3>
    `;
  }
}

export default Header;
