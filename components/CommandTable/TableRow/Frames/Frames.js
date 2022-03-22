import { getFrame, getStartFrame } from '~/utils/tableRows';
import styles from './Frames.module.css';

function Frames({ startFrame, blockFrame, nHitFrame, cHitFrame }) {
  const start = getStartFrame(startFrame);
  const block = getFrame('block', blockFrame);
  const normalHit = getFrame('hit', nHitFrame);
  const counterHit = getFrame('counter', cHitFrame);

  return (
    <div className={styles.container}>
      <p>Start</p>
      <p className={styles.content}>
        {start}
        {start !== '-' ? 'F' : ''}
      </p>
      <p>Block</p>
      <p
        className={`${styles.content} ${styles[block.suffix]}`}
      >
        {block.frame}
      </p>
      <p>Hit</p>
      <p className={styles.content}>{normalHit.frame}</p>
      <p>Counter</p>
      <p className={styles.content}>{counterHit.frame}</p>
    </div>
  );
}

export default Frames;
