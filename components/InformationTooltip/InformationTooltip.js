import Tooltip from '~/components/Tooltip';
import { LANGUAGE_LIST } from '~/utils/languages';
import { INFORMATION } from '~/utils/information';
import styles from './InformationTooltip.module.css';

function InformationTooltip({ buttonRef, langIndex }) {
  const renderContent = () => {
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const japanese =
      /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4e00-\u9faf]/; // reference: https://stackoverflow.com/a/15034560
    const wordRegex = new RegExp(`\\w|${korean.source}|${japanese.source}`);
    const regex = new RegExp(
      `(${wordRegex.source})+\\s:\\s(${wordRegex.source})+(\\s(${wordRegex.source})+)*`,
      'g'
    );
    const chunks = INFORMATION[LANGUAGE_LIST[langIndex]].matchAll(regex);
    return [...chunks].map((chunk, i) => <p key={i}>{chunk[0]}</p>);
  };

  return (
    <Tooltip buttonRef={buttonRef} target={1}>
      <section className={`tooltip-content ${styles.content}`}>
        {renderContent()}
      </section>
    </Tooltip>
  );
}

export default InformationTooltip;
