/* utils for table row */
import { DIRECTIONS, BUTTONS, EXTRA_COMMAND } from './commands';

function getCmdImgFromEng(command) {
  // const indexOfParenthesis = command.indexOf(')');
  // command =
  //   indexOfParenthesis < 0 || indexOfParenthesis === command.length - 1
  //     ? command
  //     : command.slice(0, indexOfParenthesis + 1) +
  //       ' ' +
  //       command.slice(indexOfParenthesis + 1);
  // const chunks = command.split(' ');
  // const indexOfComma = chunks.findIndex((item) => item.includes(','));
  // const items = chunks.map((item, i) => {
  //   const result = { text: item };
  //   if (item.includes(',')) {
  //     result.prev = false;
  //     result.command = true;
  //     result.value = item.split(',');
  //   } else {
  //     result.prev = i < indexOfComma;
  //     result.command = EXTRA_COMMAND.includes(item);
  //     result.value = item;
  //   }
  //   return result;
  // });
  // console.log(items);
  return command;
}

function getCmdImgFromKr(command) {
  return command;
}

function getCmdImgFromJp(command) {
  return command;
}

export function getCommand(language, command) {
  if (language === 'en') {
    return getCmdImgFromEng(command);
  } else if (language === 'kr') {
    return getCmdImgFromKr(command);
  } else {
    return getCmdImgFromJp(command);
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
    return level;
  });
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

  return { sum: list.length === 1 && list[0] === '-' ? '-' : sum, exp: list.length ? list.join('+') : '' };
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
