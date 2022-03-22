import { getDamage, getHitLevel } from '~/utils/tableRows';
import styles from './HitInfo.module.css';

function HitInfo({ hitLevel, damage }) {
  const { sum, extra, exp } = getDamage(damage);

  return (
    <div className={styles.container}>
      <div className={styles['hit-level']}>
        {getHitLevel(hitLevel).map((data, i) =>
          data.map((level, j) => (
            <p key={`${i}_${j}`} className={styles[level.toLowerCase()]}>
              {level}
            </p>
          ))
        )}
      </div>
      <div className="hit-info__damage">
        <span>
          {sum}
          {extra ? '+α' : ''}
        </span>
        {exp && <span className={styles.expression}>({exp})</span>}
      </div>
    </div>
  );
}

export default HitInfo;
