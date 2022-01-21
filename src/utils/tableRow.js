/* utils for table row */
import { DIRECTIONS, DIRECTIONS_EN, BUTTONS, BUTTONS_EN } from './commands';

function getCmdImgFromEng(command) {
  const DIRECTION_REGEX = new RegExp(
    Object.keys(DIRECTIONS_EN)
      .map((dir) => (dir.includes('+') ? dir.replace('+', '\\+') : dir))
      .join('|')
  );
  const BUTTONS_REGEX = new RegExp(
    Object.keys(BUTTONS_EN)
      .map((btn) =>
        btn !== '[' && btn !== ']'
          ? btn.includes('+')
            ? btn.replaceAll('+', '\\+')
            : btn
          : `\\${btn}`
      )
      .join('|')
  );
  const COMMAND_REGEX = new RegExp(
    `(${BUTTONS_REGEX.source}|${DIRECTION_REGEX.source})`,
    'g'
  );
  const openParenthesisIndex = command.indexOf('(');
  const closeParenthesisIndex = command.indexOf(')');
  const customCommand =
    openParenthesisIndex < 0
      ? command
      : command.slice(0, openParenthesisIndex) +
        ' ' +
        command.slice(openParenthesisIndex, closeParenthesisIndex + 1) +
        ' ' +
        command.slice(closeParenthesisIndex + 1);
  const chunks = customCommand.split(' ').reduce((arr, cur) => {
    if (
      /^\(*[a-zA-Z]+\)*$/.test(cur) &&
      !new RegExp(`^[${Object.keys(DIRECTIONS_EN).join('')}]+$`).test(cur)
    ) {
      // check whether current chunk contains only characters and is composed with only direction commands
      arr.push({ arrow: false, button: false, src: cur });
    } else {
      const newChunks = cur.split(COMMAND_REGEX).filter((item) => !!item);
      const temp = [];
      newChunks.forEach((item, index) => {
        if (item === '+') {
          temp[temp.length - 1] = {
            ...temp[temp.length - 1],
            cmd: temp[temp.length - 1].cmd + item + newChunks[index + 1],
            src: BUTTONS_EN[
              temp[temp.length - 1].cmd + item + newChunks[index + 1]
            ],
          };
        } else {
          if (index > 0 && newChunks[index - 1] === '+') {
          } else {
            if (DIRECTIONS_EN[item]) {
              if (typeof DIRECTIONS_EN[item] === 'string') {
                temp.push({
                  cmd: item,
                  arrow: true,
                  button: false,
                  src: DIRECTIONS_EN[item],
                });
              } else {
                DIRECTIONS_EN[item].forEach((dir) => {
                  temp.push({
                    cmd: dir,
                    arrow: true,
                    button: false,
                    src: DIRECTIONS_EN[dir],
                  });
                });
              }
            } else if (BUTTONS_EN[item]) {
              temp.push({
                cmd: item,
                arrow: false,
                button: true,
                src: BUTTONS_EN[item],
              });
            } else {
              temp.push({ cmd: item, arrow: false, button: false, src: item });
            }
          }
        }
      });
      arr = arr.concat(temp);
    }
    return arr;
  }, []);
  return chunks;
}

function getCmdImg(command) {
  const DIRECTION_REGEX = new RegExp(Object.keys(DIRECTIONS).join('|'));
  const BUTTONS_REGEX = new RegExp(
    Object.keys(BUTTONS)
      .map((btn) => (btn !== '[' && btn !== ']' ? btn : `\\${btn}`))
      .join('|')
  );
  const COMMAND_REGEX = new RegExp(
    `(${BUTTONS_REGEX.source}|${DIRECTION_REGEX.source})`,
    'g'
  );
  const chunks = command
    .split(' ')
    .map((chunk) => chunk.split(COMMAND_REGEX))
    .flat();
  if (command === '→LK,AP') {
    console.log(chunks);
  }
  const newChunks = chunks.reduce((arr, cur, i) => {
    if (!cur) {
      return arr;
    }
    if (cur === '~') {
      arr[arr.length - 1] = arr[arr.length - 1] + cur;
    } else if (cur === '+') {
      arr[arr.length - 1] = arr[arr.length - 1] + cur + chunks[i + 1];
    } else if (cur === ',') {
    } else {
      if (i > 0 && chunks[i - 1] === '+') {
        return arr;
      }
      arr.push(cur);
    }
    return arr;
  }, []);
  return newChunks.map((str) => {
    if (DIRECTIONS[str]) {
      return { arrow: true, button: false, src: DIRECTIONS[str] };
    }
    if (BUTTONS[str]) {
      return { arrow: false, button: true, src: BUTTONS[str] };
    }
    return { arrow: false, button: false, src: str };
  });
}

export function getCommand(language, command) {
  if (language !== 'en') {
    return getCmdImg(command);
  } else {
    return getCmdImgFromEng(command);
  }
}

export function getHitLevel(list) {
  return list.map((item) => {
    const level = [];
    const target = item.length > 2 ? item[0] : item;
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
      case 'SM':
      case 'PU': {
        level[0] = 'MID';
        break;
      }

      case 'L': {
        level[0] = 'LOW';
        break;
      }

      case 'HH': {
        level[0] = 'HIGH';
        level[1] = 'HIGH';
        break;
      }

      case 'HM': {
        level[0] = 'HIGH';
        level[1] = 'MID';
        break;
      }

      case 'HL': {
        level[0] = 'HIGH';
        level[1] = 'LOW';
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

      case 'MT': {
        level[0] = 'MID';
        break;
      }

      case 'LH': {
        level[0] = 'LOW';
        level[1] = 'HIGH';
        break;
      }

      case 'LM': {
        level[0] = 'LOW';
        level[1] = 'MID';
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

      case 'P': {
        level[0] = 'PARRY';
        break;
      }

      default: {
        level[0] = '-';
      }
    }
    return level;
  });
}

export function getDamage(list) {
  const sum = list.reduce((prev, curr) => {
    const parenthesisIndex = curr.indexOf('(');
    const numString =
      parenthesisIndex < 0 ? curr : curr.slice(0, parenthesisIndex);
    const xIndex = numString.indexOf('x');
    if (xIndex > -1) {
      const num1 = numString.slice(0, xIndex);
      const num2 = numString.slice(xIndex + 1);
      return prev + +num1 * +num2;
    }

    const alphaIndex = numString.indexOf('+'); // +α
    if (alphaIndex > -1) {
      const defaultDamage = numString.slice(0, alphaIndex);
      return prev + +defaultDamage;
    }

    return prev + +numString;
  }, 0);

  return {
    sum: list.length === 1 && list[0] === '-' ? '-' : sum,
    exp: list.length > 1 ? list.join('+') : '',
    extra: list.join('').includes('+α'),
  };
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

  return { suffix, frame };
}
