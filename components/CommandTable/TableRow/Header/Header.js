import styles from './Header.module.css';

function Header({ id, name, hitCount }) {
  return (
    <div className={styles.container}>
      <div className={styles.index}>{id + 1}</div>
      <p className={`${styles.title} ${styles.name}`}>{name}</p>
      <p className={`${styles.title} ${styles['hit-count']}`}>
        {hitCount} {hitCount > 1 ? 'Hits' : 'Hit'}
      </p>
    </div>
  );
}

export default Header;
