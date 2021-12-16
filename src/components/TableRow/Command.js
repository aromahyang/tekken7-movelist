import { getCommand, getDamage, getHitLevel } from '../../utils/tableRow';

class Command {
  constructor(props) {
    this.data = props;
  }

  template() {
    const { language, command, hitLevel, damage } = this.data;
    return `
      <div class="move-card-content">
        <div class="move-card-command">
          ${getCommand(language, command)}
        </div>
        <div class="move-card-hit-info">
          <div class="move-card-hit-info__level">
            ${getHitLevel(hitLevel)}
          </div>
          <div class="move-card-hit-info__damage">
            ${getDamage(damage)}
          </div>
        </div>
      </div>
    `;
  }
}

export default Command;
