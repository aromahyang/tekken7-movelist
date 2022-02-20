import { getFrame, getStartFrame } from '~/utils/tableRow';

class Frames {
  constructor(props) {
    this.data = props;
  }

  template() {
    const { startFrame, blockFrame, nHitFrame, cHitFrame } = this.data;
    const block = getFrame('block', blockFrame);
    const normalHit = getFrame('hit', nHitFrame);
    const counterHit = getFrame('counter', cHitFrame);
    return `
      <div class="move-frame">
        <div class="move-frame__header">Start</div>
        <div class="move-frame__content">
          ${getStartFrame(startFrame)}${getStartFrame(startFrame) !== '-' ? 'F' : ''}
        </div>
        <div class="move-frame__header">Block</div>
        <div class="move-frame__content move-frame__block">
          <p class="move-frame__content--${block.suffix}">
            ${block.frame}
          </p>
        </div>
        <div class="move-frame__header">Hit</div>
        <div class="move-frame__content move-frame__hit">
          <p class="move-frame__content--${normalHit.suffix}">
            ${normalHit.frame}
          </p>
        </div>
        <div class="move-frame__header">Counter</div>
        <div class="move-frame__content move-frame__counter">
          <p class="move-frame__content--${counterHit.suffix}">
            ${counterHit.frame}
          </p>
        </div>
      </div>
    `;
  }
}

export default Frames;
