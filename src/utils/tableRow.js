/* utils for table row */

export function getHitLevel(list) {
  return list.reduce((prev, curr, i) => {
    const level = [];
    const target = curr.length > 2 ? curr[0] : curr;
    switch (target) {
      case 'H':
      case 'HP':
      case 'HT':
      case 'AT': {
        // HP: High Parrying, HT: High Throw, AT: Aerial Throw
        level[0] = 'HIGH';
        break;
      }

      case 'M':
      case 'SM': {
        level[0] = 'MID';
        break;
      }

      case 'L': {
        level[0] = 'LOW';
        break;
      }

      case 'MH': {
        level[0] = 'MID';
        level[1] = 'HIGH';
        break;
      }

      case 'MM': {
        level[0] = 'MID';
        level[1] = 'MID';
        break;
      }

      case 'ML': {
        level[0] = 'MID';
        level[1] = 'LOW';
        break;
      }

      case 'LH': {
        level[0] = 'LOW';
        level[1] = 'HIGH';
        break;
      }

      case 'LL': {
        level[0] = 'LOW';
        level[1] = 'LOW';
        break;
      }

      case 'SP': {
        level[0] = 'SPECIAL';
        break;
      }

      case 'UB': {
        level[0] = 'UNBLOCK';
        break;
      }

      default: {
        level[0] = '';
      }
    }

    return (
      prev +
      `
        ${level
          .map(
            (l) => `
            <p class="move-card-hit-info__level--${l.toLowerCase()}">
              ${l}
            </p>
          `
          )
          .join('<p>/</p>')}
        ${i < list.length - 1 ? '<i class="fas fa-chevron-right"></i>' : ''}
      `
    );
  }, '');
}

export function getDamage(list) {
  const sum = list.reduce((prev, curr) => {
    const parenthesisIndex = curr.indexOf('(');
    const target =
      parenthesisIndex < 0 ? curr : curr.slice(0, parenthesisIndex);
    const xIndex = target.indexOf('x');
    if (xIndex < 0) {
      return prev + +target;
    }

    const num1 = target.slice(0, xIndex);
    const num2 = target.slice(xIndex + 1);
    return prev + +num1 * +num2;
  }, 0);
  return `
    <span class="move-card-hit-info__sum">
      ${list.length === 1 && list[0] === '-' ? '-' : sum}
    </span>
    ${
      list.length > 1
        ? `
      <span class="move-card-hit-info__expression">
        (${list.join('+')})
      </span>
          `
        : ''
    }
  `;
}

export function getStartFrame(frame) {
  const startIndex = frame.indexOf('(');
  if (startIndex < 0) {
    return frame;
  } else {
    return frame.slice(0, startIndex);
  }
}

export function getFrame(type, frame) {
  let suffix = 'none';
  if (type === 'block') {
    if (frame.startsWith('+')) {
      suffix = 'positive';
    } else if (frame.startsWith('-')) {
      if (frame === '-') {
        suffix = 'none';
      } else {
        const num = frame.slice(1);
        if (!isNaN(+num) && +num >= 10) {
          suffix = 'negative';
        } else {
          suffix = 'zero';
        }
      }
    }
  } else {
    suffix = 'none';
  }

  return `
    <div class="move-frame__content move-frame__${type}">
      <p class="move-frame__content--${suffix}">${frame}</p>
    </div>
  `;
}
