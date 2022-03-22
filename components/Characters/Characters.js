import { useEffect, useRef } from 'react';
import CharacterCard from './CharacterCard';
import styles from './Characters.module.css';

function Characters({ list = [], selectedIndex = 0, menuOpen, onClick }) {
  const ref = useRef(null);

  const handleResize = () => {
    if (ref.current) {
      if (window.innerWidth > 800) {
        ref.current.style.display = 'flex';
      } else {
        ref.current.style.display = menuOpen.current ? 'flex' : 'none';
      }
    }
  };

  const init = () => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  useEffect(init, []);

  const hideContainer = () => {
    if (ref.current) {
      ref.current.style.display = 'none';
      menuOpen.current = false;
    }
  };

  const handleCardClick = (index) => {
    if (window.innerWidth <= 800) {
      hideContainer();
    }
    onClick(index);
  };

  const handleCloseClick = () => {
    hideContainer();
  };

  return (
    <section ref={ref} className={`character-container ${styles.container}`}>
      <div className={styles.header}>
        <button className={styles.close} onClick={handleCloseClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <p className="title">CHARACTERS</p>
      </div>
      <div className={styles.content}>
        {list.map((item, i) => (
          <CharacterCard
            key={i}
            selected={selectedIndex === i}
            character={item}
            index={i}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
}

export default Characters;
