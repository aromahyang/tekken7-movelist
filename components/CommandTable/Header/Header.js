import { useRef } from 'react';
import FilterTooltip from '~/components/FilterTooltip';
import InformationTooltip from '~/components/InformationTooltip';
import LanguageTooltip from '~/components/LanguageTooltip';
import useTooltip from '~/hooks/useTooltip';
import styles from './Header.module.css';

function Header({
  langIndex,
  character,
  languageJson,
  extraMoveFilter,
  menuOpen,
  onSpecialMoveClick,
  onExtraMoveChange,
  onLanguageChange,
  onScrollTopClick,
}) {
  const filterRef = useRef(null);
  const infoRef = useRef(null);
  const langRef = useRef(null);
  const { tooltipIndex, showTooltip, hideTooltip } = useTooltip();

  const handleMenuClick = () => {
    const $characterContainer = document.querySelector('.character-container');
    $characterContainer.style.display = 'flex';
    menuOpen.current = true;
  };

  const handleButtonClick = (ref, index) => {
    if (!ref.current) {
      return;
    }

    if (tooltipIndex === index) {
      hideTooltip();
    } else {
      const { top, right } = ref.current.getBoundingClientRect();
      showTooltip(index, `${top + 36}px`, `calc(100% - ${right}px)`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles['left-panel']}>
        <button
          className={`icon-button ${styles['icon-button']}`}
          onClick={handleMenuClick}
        >
          <i className="fas fa-bars"></i>
        </button>
        <p className="command_table-header__name">{character.name}</p>
      </div>
      <div className={styles['right-panel']}>
        <button
          ref={filterRef}
          className={styles.filter}
          title="Filter"
          aria-label="Filter move button"
          onClick={() => handleButtonClick(filterRef, 0)}
        >
          FILTER
        </button>
        <FilterTooltip
          buttonRef={filterRef}
          langIndex={langIndex}
          languageJson={languageJson}
          extraMoveFilter={extraMoveFilter}
          onSpecialMoveClick={onSpecialMoveClick}
          onExtraMoveChange={onExtraMoveChange}
        />
        <button
          ref={infoRef}
          className={`icon-button ${styles['icon-button']}`}
          title="Information"
          aria-label="Information"
          onClick={() => handleButtonClick(infoRef, 1)}
        >
          <i className="fas fa-info"></i>
        </button>
        <InformationTooltip buttonRef={infoRef} langIndex={langIndex} />
        <button
          ref={langRef}
          className={`icon-button ${styles['icon-button']}`}
          title="Languages"
          aria-label="Languages"
          onClick={() => handleButtonClick(langRef, 2)}
        >
          <i className="fas fa-globe"></i>
        </button>
        <LanguageTooltip
          buttonRef={langRef}
          langIndex={langIndex}
          onLanguageChange={onLanguageChange}
        />
        <button
          className={`icon-button ${styles['icon-button']}`}
          title="Scroll Top"
          aria-label="Scroll top"
          onClick={onScrollTopClick}
        >
          <i className="fas fa-angle-double-up"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
