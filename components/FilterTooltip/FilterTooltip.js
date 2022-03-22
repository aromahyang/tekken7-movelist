import Tooltip from '~/components/Tooltip';
import useTooltip from '~/hooks/useTooltip';
import { LANGUAGE_LIST } from '~/utils/languages';
import styles from './FilterTooltip.module.css';

function FilterTooltip({
  buttonRef,
  langIndex,
  languageJson,
  extraMoveFilter,
  onSpecialMoveClick,
  onExtraMoveChange,
}) {
  const { hideTooltip } = useTooltip();

  const handleSpecialMoveClick = (event) => {
    const { specialMove } = event.target.dataset;
    if (specialMove) {
      hideTooltip();
      onSpecialMoveClick(specialMove);
    }
  };

  const handleExtraMoveChange = (event) => {
    const { value } = event.target;
    onExtraMoveChange(+value);
  };

  const renderSpecialMoves = () => {
    const specialMoves = Object.entries(languageJson)
      .filter(([_, item]) => item[LANGUAGE_LIST[langIndex]].startsWith('-'))
      .map(([id, item]) => ({
        id,
        value: item[LANGUAGE_LIST[langIndex]].slice(1, -1),
      }));

    return specialMoves.map((item, i) => (
      <span key={i}>
        <span
          className={styles.special}
          data-special-move={item.id}
          onClick={handleSpecialMoveClick}
        >
          {item.value}
        </span>
        {i < specialMoves.length - 1 && ' | '}
      </span>
    ));
  };

  return (
    <Tooltip buttonRef={buttonRef} target={0}>
      <section className={`tooltip-content ${styles.content}`}>
        <div>
          {langIndex !== 0 && <span>Scroll to </span>}
          {renderSpecialMoves()}
          {langIndex === 0 && <span> 로 이동</span>}
        </div>
        <div className={styles.divider} />
        <div>
          {[
            { label: langIndex === 0 ? '호밍기' : 'Homing Attack', value: 1 },
            { label: langIndex === 0 ? '파워크래시' : 'Power Crush', value: 2 },
            { label: langIndex === 0 ? '스크류' : 'Tail Spin', value: 3 },
            { label: langIndex === 0 ? '월바운드' : 'Wall Bound', value: 4 },
          ].map(({ label, value }, i) => (
            <label key={i}>
              <input
                type="checkbox"
                value={value}
                checked={extraMoveFilter.has(value)}
                onChange={handleExtraMoveChange}
              />
              <span className={styles.checkmark} />
              {label}
            </label>
          ))}
        </div>
      </section>
    </Tooltip>
  );
}

export default FilterTooltip;
