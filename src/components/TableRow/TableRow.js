import Header from './Header';
import Command from './Command';
import Extra from './Extra';
import Frames from './Frames';
import { LANGUAGE_LIST } from '../../utils/constants';

class TableRow {
  constructor({ data, languageJson, langIndex }) {
    this.data = data;
    this.languageJson = languageJson;
    this.langIndex = langIndex;
  }

  template() {
    const {
      id,
      name,
      hit_count: hitCount,
      command: commandList,
      hit_level: hitLevel,
      damage,
      tail_spin: spin,
      power_crush: crush,
      homing_attack: homing,
      wall_bound: bound,
      start_frame: startFrame,
      block_frame: blockFrame,
      normal_hit_frame: nHitFrame,
      counter_hit_frame: cHitFrame,
    } = this.data;
    const language = LANGUAGE_LIST[this.langIndex];
    const translatedName = this.languageJson[name][language];
    const isSpecial = translatedName.startsWith('-');

    if (isSpecial) {
      return `
        <td class="special-move-card-container">
          <div class="move-card-header__index">${id + 1}</div>
          <p>${translatedName.slice(1, -1)}</p>
        </td>
      `;
    }

    const header = new Header({
      id,
      name: translatedName,
      hitCount,
    });
    const command = new Command({
      language,
      command: this.languageJson[commandList][language],
      hitLevel,
      damage,
    });
    const extra = new Extra({ spin, crush, homing, bound });
    const frames = new Frames({
      startFrame,
      blockFrame,
      nHitFrame,
      cHitFrame,
    });
    return `
      <tr>
        <td class="move-card-container">
          <div class="left-card-pannel">
            ${header.template()}
            ${command.template()}
          </div>
          <div class="right-card-pannel">
            ${extra.template()}
            ${frames.template()}
          </div>
        </td>
      </tr>
    `;
  }
}

export default TableRow;
