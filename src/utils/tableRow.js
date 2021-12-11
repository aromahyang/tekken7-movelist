/* utils for table row */

export function getHitLevel(list) {
  return list.reduce((prev, curr, i) => {
    let level = '';
    if (curr === 'H') {
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
    return prev + +curr;
  }, 0);
  return `
    <span class="move-card-hit-info__sum">
      ${sum}
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
