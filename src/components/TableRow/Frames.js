import { getFrame, getStartFrame } from '../../utils/tableRow';

class Frames {
  constructor(props) {
    this.data = props;
  }

  template() {
    const { startFrame, blockFrame, nHitFrame, cHitFrame } = this.data;
    return `
      <div class="move-frame">
        <div class="move-frame__header">Start</div>
        <div class="move-frame__content">
          ${getStartFrame(startFrame)}${
      getStartFrame(startFrame) !== '-' ? 'F' : ''
    }
        </div>
        <div class="move-frame__header">Block</div>
        ${getFrame('block', blockFrame)}
        <div class="move-frame__header">Hit</div>
        ${getFrame('hit', nHitFrame)}
        <div class="move-frame__header">Counter</div>
        ${getFrame('counter', cHitFrame)}
      </div>
    `;
  }
}

export default Frames;
