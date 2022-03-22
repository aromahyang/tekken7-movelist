import Tooltip from '~/components/Tooltip';
import useTooltip from '~/hooks/useTooltip';
import { LANGUAGE_INDEX_COOKIE, setCookie } from '~/utils/cookies';
import styles from './LanguageTooltip.module.css';

function LanguageTooltip({ buttonRef, langIndex = 0, onLanguageChange }) {
  const { hideTooltip } = useTooltip();

  const handleChange = (event) => {
    const { value } = event.target;
    setCookie(LANGUAGE_INDEX_COOKIE, value);
    hideTooltip();
    onLanguageChange(+value);
  };

  return (
    <Tooltip buttonRef={buttonRef} target={2}>
      <section className={`tooltip-content ${styles.content}`}>
        {[
          { label: '한국어', value: 0 },
          { label: 'English', value: 1 },
          { label: '日本語', value: 2 },
        ].map(({ label, value }, i) => (
          <label key={i}>
            {' '}
            <input
              type="radio"
              name="language"
              value={value}
              defaultChecked={langIndex === value}
              onChange={handleChange}
            />{' '}
            {label}{' '}
          </label>
        ))}
      </section>
    </Tooltip>
  );
}

export default LanguageTooltip;
