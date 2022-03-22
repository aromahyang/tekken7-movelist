import { forwardRef, useEffect, useState } from 'react';
import Header from './Header';
import TableRow from './TableRow';
import styles from './CommandTable.module.css';
import MOVELISTS from '~/public/json/movelists';
import LANGUAGES from '~/public/json/languages';
import EXTRA_MOVES from '~/utils/extraMoves';
import { LANGUAGE_LIST } from '~/utils/languages';

function CommandTable(
  { character, langIndex, menuOpen, onLanguageChange },
  ref
) {
  const [extraMoves, setExtraMoves] = useState(new Set());
  const [isScrollableToTd, setScrollableToTd] = useState({
    flag: false,
    value: '',
  });

  const handleScrollTopClick = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSpecialMoveClick = (value) => {
    if (extraMoves.size) {
      setExtraMoves(new Set());
    }
    setScrollableToTd({ flag: true, value });
  };

  const scrollToTd = () => {
    if (isScrollableToTd.flag) {
      if (ref.current) {
        const element = ref.current.querySelector(
          `td[data-special-move=${isScrollableToTd.value}]`
        );
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          scrollToTd();
          return;
        }
      }
      setScrollableToTd({ flag: false, value: '' });
    }
  };
  useEffect(scrollToTd, [ref, isScrollableToTd]);

  const handleExtraMoveChange = (value) => {
    setExtraMoves((prev) => {
      if (prev.has(value)) {
        return new Set([...prev].filter((v) => v !== value));
      } else {
        return new Set([...prev, value]);
      }
    });
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getList = () => {
    const { movelist } = MOVELISTS[character.filename];
    if (!extraMoves.size) {
      return movelist;
    }

    return movelist.filter((item) => {
      let result = false;
      for (let value of extraMoves) {
        result ||= item[EXTRA_MOVES[value]];
        if (result) {
          break;
        }
      }
      return result;
    });
  };

  return (
    <section className={styles.container}>
      <Header
        langIndex={langIndex}
        character={character}
        languageJson={LANGUAGES[character.filename]}
        extraMoveFilter={extraMoves}
        menuOpen={menuOpen}
        onSpecialMoveClick={handleSpecialMoveClick}
        onExtraMoveChange={handleExtraMoveChange}
        onLanguageChange={onLanguageChange}
        onScrollTopClick={handleScrollTopClick}
      />
      <div ref={ref} className={styles['table-wrapper']}>
        <table className={styles.table}>
          <tbody>
            {getList().map((item, i) => (
              <TableRow
                key={i}
                item={item}
                language={LANGUAGE_LIST[langIndex]}
                languageJson={LANGUAGES[character.filename]}
                extraMoveFilter={extraMoves}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default forwardRef(CommandTable);
