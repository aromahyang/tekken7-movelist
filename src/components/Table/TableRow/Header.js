class Header {
  constructor(props) {
    this.data = props;
  }

  template() {
    const { id, name, hitCount } = this.data;
    return `
      <div class="move-card-header">
        <div class="move-card-header__index">${id + 1}</div>
        <div class="move-card-header__name">${name}</div>
        <div class="move-card-header__hit-count">
          ${hitCount} ${hitCount > 1 ? 'Hits' : 'Hit'}
        </div>
      </div>
    `;
  }
}

export default Header;
