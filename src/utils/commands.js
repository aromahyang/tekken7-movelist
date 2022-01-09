export const EXTRA_COMMAND = ['or', '[', ']'];
export const DIRECTIONS = {
  '↙': '1',
  '↓': '2',
  '↘': '3',
  '←': '4',
  'n': 'n',
  '→': '6',
  '↖': '7',
  '↑': '8',
  '↗': '9',
  '↙~': '1hold',
  '↓~': '2hold',
  '↘~': '3hold',
  '←~': '4hold',
  '→~': '6hold',
  '↖~': '7hold',
  '↑~': '8hold',
  '↗~': '9hold',
};

export const COMMAND_EN = {
  'd/b': '1',
  'd': '2',
  'd/f': '3',
  'b': '4',
  'n': 'n',
  'f': '6',
  'u/b': '7',
  'u': '8',
  'u/f': '9',
  '+': 'hold', // TODO: 1hold
  '+d': '2hold',
  'd/f+': '3hold',
  'b+': '4hold',
  'f+': '6hold',
  '+': 'hold', // TODO
  '+u': '8hold',
  '+': 'hold', // 9TODO
};

export const BUTTONS = {
  'LP': 'lp', // 1
  'RP': 'rp', // 2
  'LK': 'lk', // 3
  'RK': 'rk', // 4
  'AP': 'ap', // 1+2
  'AK': 'ak', // 3+4
  'LP+LK': 'al', // 1+3
  'LP+RK': 'lp+rk', // 1+4
  'RP+LK': 'rp+lk', // 2+3
  'RP+RK': 'ar', // 2+4
  'AP+LK': 'ap+lk', // 1+2+3
  'AP+RK': 'ap+rk', // 1+2+4
  'LP+AK': 'lp+ak', // 1+3+4
  'RP+AK': 'rp+ak', // 2+3+4
  'AP+AK': 'ap+ak', // 1+2+3+4
};

export const SPECIAL_MOVE = {
  'DF': 'Destructive Form', // Alisa
};
