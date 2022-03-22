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

export const DIRECTIONS_EN = {
  'd/b': '1',
  'd/f': '3', 
  'u/b': '7',
  'u/f': '9',
  'd/b+': '1hold',
  '+d/b': '1hold',
  '+d': '2hold',
  'd+': '2hold',
  'd/f+': '3hold',
  '+d/f': '3hold',
  'b+': '4hold',
  '+b': '4hold',
  'f+': '6hold',
  '+f': '6hold',
  'u/b+': '7hold',
  '+u': '8hold',
  'u+': '8hold',
  'u/f+': '9hold',
  '+u/f': '9hold',
  'd': '2',
  'b': '4',
  'n': 'n',
  'f': '6',
  'u': '8',
  'qcf': ['d', 'd/f', 'f'],
  'qcb': ['d', 'd/b', 'b'],
  'hcb': ['f', 'd/f', 'd', 'd/b', 'b'],
};

export const BUTTONS = {
  'LP': 'lp', // 1
  'RP': 'rp', // 2
  'LK': 'lk', // 3
  'RK': 'rk', // 4
  'AP': 'ap', // 1+2
  'AK': 'ak', // 3+4
  'LP+LK': 'al', // 1+3
  'AL': 'al',
  'LP+RK': 'lp+rk', // 1+4
  'RP+LK': 'rp+lk', // 2+3
  'RP+RK': 'ar', // 2+4
  'AR': 'ar',
  'AP+LK': 'ap+lk', // 1+2+3
  'AP+RK': 'ap+rk', // 1+2+4
  'LP+AK': 'lp+ak', // 1+3+4
  'RP+AK': 'rp+ak', // 2+3+4
  'AP+AK': 'ap+ak', // 1+2+3+4
  '[': 'bracketL',
  ']': 'bracketR',
};

export const BUTTONS_EN = {
  '1': 'lp', // 1
  '2': 'rp', // 2
  '3': 'lk', // 3
  '4': 'rk', // 4
  '1+2': 'ap', // 1+2
  '3+4': 'ak', // 3+4
  '1+3': 'al', // 1+3
  '1+4': 'lp+rk', // 1+4
  '2+3': 'rp+lk', // 2+3
  '2+4': 'ar', // 2+4
  '1+2+3': 'ap+lk', // 1+2+3
  '1+2+4': 'ap+rk', // 1+2+4
  '1+3+4': 'lp+ak', // 1+3+4
  '2+3+4': 'rp+ak', // 2+3+4
  '1+2+3+4': 'ap+ak', // 1+2+3+4
  '[': 'bracketL',
  ']': 'bracketR',
};
