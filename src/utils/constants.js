export const LANGUAGE_LIST = ['en', 'kr', 'jp'];
export const BUCKET = 'tekken7-movelist-assets';

export const EXTRA_COMMAND = ['or', '[', ']'];
export const DIRECTIONS = {
  '↙': '1',
  'd/b': '1',
  '↓': '2',
  'd': '2',
  '↘': '3',
  'd/f': '3',
  '←': '4',
  'b': '4',
  'n': 'n',
  '→': '6',
  'f': '6',
  '↖': '7',
  'u/b': '7',
  '↑': '8',
  'u': '8',
  '↗': '9',
  'u/f': '9',
  '↙~': '1hold',
  '+': 'hold', // TODO
  '↓~': '2hold',
  '+d': '2hold',
  '↘~': '3hold',
  'd/f+': '3hold',
  '←~': '4hold',
  'b+': '4hold',
  '→~': '6hold',
  'f+': '6hold',
  '↖~': '7hold',
  '+': 'hold', // TODO
  '↑~': '8hold',
  '+u': '8hold',
  '↗~': '9hold',
  '+': 'hold', // TODO
};

export const BUTTONS = {
  'LP': 'lp', // 1
  'RP': 'rp', // 2
  'LK': 'lk', // 3
  'RK': 'rk', // 4
  'AP': 'ap', // 1+2
  'LP+LK': 'lp+lk', // 1+3
  'LP+RK': 'lp+rk', // 1+4
  'RP+LK': 'rp+lk', // 2+3
  'RP+RK': 'rp+rk', // 2+4
  'AK': 'ak', // 3+4
  'AP+LK': 'ap+lk', // 1+2+3
  'AP+RK': 'ap+rk', // 1+2+4
  'LP+AK': 'lp+ak', // 1+3+4
  'RP+AK': 'rp+ak', // 2+3+4
  'AP+AK': 'ap+ak', // 1+2+3+4
};
