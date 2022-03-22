import Image from 'next/image';
import { getCommand } from '~/utils/tableRows';
import ARROWS from '~/public/images/arrows';
import BUTTONS from '~/public/images/buttons';
import styles from './Command.module.css';

function Command({ language, value }) {
  return (
    <div className={styles.container}>
      {getCommand(language, value).map(({ arrow, button, src, value }, i) =>
        arrow | button ? (
          <div key={i}>
            {/* <Image
              src={arrow ? ARROWS[src] : BUTTONS[src]}
              alt={value}
              width="100%"
              height="100%"
            /> */}
            <img src={arrow ? ARROWS[src] : BUTTONS[src]} alt={value} />
          </div>
        ) : (
          <span key={i}>{src}</span>
        )
      )}
    </div>
  );
}

export default Command;
