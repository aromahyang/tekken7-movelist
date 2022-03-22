import Header from './Header';
import Command from './Command';
import HitInfo from './HitInfo';
import Extra from './Extra';
import Frames from './Frames';
import styles from './TableRow.module.css';

function TableRow({ item, language, languageJson }) {
  const {
    id,
    name,
    hit_count: hitCount,
    command,
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
  } = item;
  const translatedName = languageJson[name][language];

  if (translatedName.startsWith('-')) {
    // special move row
    return (
      <tr>
        <td className={styles['special-td']} data-special-move={name}>
          <div className={styles.index}>{id + 1}</div>
          <p>{translatedName.slice(1, -1)}</p>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td className={styles.td}>
        <div className={styles['left-panel']}>
          <Header id={id} name={translatedName} hitCount={hitCount} />
          <div className={styles.content}>
            <Command
              language={language}
              value={languageJson[command][language]}
            />
            <HitInfo hitLevel={hitLevel} damage={damage} />
          </div>
        </div>
        <div className={styles['right-panel']}>
          <Extra {...{ spin, crush, homing, bound }} />
          <Frames {...{ startFrame, blockFrame, nHitFrame, cHitFrame }} />
        </div>
      </td>
    </tr>
  );
}

export default TableRow;
