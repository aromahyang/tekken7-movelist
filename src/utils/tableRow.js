/* utils for table row */

export function getHitLevel(list) {
  return list.reduce((prev, curr, i) => {
    let level = '';
    if (curr === 'H' || curr === 'HP' || curr === 'AT') {
      level = 'HIGH';
    } else if (curr === 'M') {
      level = 'MID';
    } else if (curr === 'L') {
      level = 'LOW';
    } else if (curr === 'SP') {
      level = 'SPECIAL';
    }
    const className = level.toLowerCase();

    return (
      prev +
      `
      <p class="move-card-hit-info__level--${className}">
        ${level}
      </p>
      ${i < list.length - 1 ? '<i class="fas fa-chevron-right"></i>' : ''}
    `
    );
  }, '');
}

export function getDamage(list) {
  const sum = list.reduce((prev, curr) => {
    const index = curr.indexOf('x');
    if (index < 0) {
      return prev + +curr;
    }

    const num1 = curr.slice(0, index);
    const num2 = curr.slice(index + 1);
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
