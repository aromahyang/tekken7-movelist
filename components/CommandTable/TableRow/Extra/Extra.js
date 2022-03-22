import styles from './Extra.module.css';

function Extra({ spin, crush, homing, bound }) {
  return (
    <div className={styles.container}>
      {spin && <p className={styles.spin}></p>}
      {crush && <p className={styles.crush}></p>}
      {homing && <p className={styles.homing}></p>}
      {bound && <p className={styles.bound}></p>}
    </div>
  );
}

export default Extra;
