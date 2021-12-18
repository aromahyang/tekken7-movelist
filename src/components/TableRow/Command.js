import { getCommand, getDamage, getHitLevel } from '../../utils/tableRow';

class Command {
  constructor(props) {
    this.data = props;
  }

  template() {
    const { language, command } = this.data;
    const damage = getDamage(this.data.damage);
    const hitLevel = getHitLevel(this.data.hitLevel);
    return `
      <div class="move-card-content">
        <div class="move-card-command">
          ${getCommand(language, command)}
        </div>
        <div class="move-card-hit-info">
          <div class="move-card-hit-info__level">
            ${hitLevel.map((level, i) => `
              ${level
                .map((l) => `
                  <p class="move-card-hit-info__level--${l.toLowerCase()}">
                    ${l}
                  </p>
                `)
                .join('<p>/</p>')}
              ${i < hitLevel.length
                ? `
                  <i class="fas fa-chevron-right"></i>
                `
                : ''}
            `)}
          </div>
          <div class="move-card-hit-info__damage">
            <span class="move-card-hit-info__sum">
              ${damage.sum}
            </span>
            ${
              damage.exp
                ? `
              <span class="move-card-hit-info__expression">
                (${damage.exp})
              </span>
                  `
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }
}

export default Command;
