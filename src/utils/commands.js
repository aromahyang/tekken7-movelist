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
  // '+': 'hold', // TODO: 1hold
  '+d': '2hold',
  'd/f+': '3hold',
  'b+': '4hold',
  'f+': '6hold',
  // '+': 'hold', // TODO: 7hold
  '+u': '8hold',
  // '+': 'hold', // TODO: 9hold
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
  '[': 'bracketL',
  ']': 'bracketR',
};

export const PREV_MOVE = {
  'wc': 'While crouching',
  'Durint sit': 'While crounching', // 아마 오타인 듯
};

export const SPECIAL_MOVE_KR = {
  King: {},
  Kuma: {
    'HS': '헌팅스타일',
  },
  Lars: {
    'DE': '다이나믹엔트리',
    'SE': '사일런트엔트리',
  },
  Law: {
    'CD': '차지드래곤',
    'FS': '페이크스탭',
  },
  Lee: {
    'HMS': '히트맨스타일',
    'MS': '미스트스탭',
    'SW': '스웨이',
  },
  Marduk: {
    'CS': '크라우칭스타일',
  },
  MasterRaven: {
    'HF': '헤이즈필드',
  },
  Miguel: {
    'SS': '새비지스탠스',
  },
  Negan: {
    'ITM': '인티미데이션',
  },
  Shaheen: {
    'SI': '스네이크인',
  },
  Zafina: {
    'MT': '모드타란튤라',
    'MSC': '모드스케어크로우',
    'MM': '모드맨티스',
  },
};

export const SPECIAL_MOVE_JP = {
  King: {
    'CBB': 'キャノンボールバスター',
    'CHFL': 'チキンウイングフェイスロック',
    'JS': 'ジャーマン スープレックス',
    'RACS': 'リバースゴリースペシャルボム',
    'SAH': 'スタンディングアキレスホールド',
  },
  Kuma: {
    'HS': 'ハンティング スタイル',
  },
  Lars: {
    'DE': 'ダイナミックエントリ',
    'SE': 'サイレントエントリ',
  },
  Law: {
    'CD': 'チャージドラゴン',
    'FS': 'フェイクステップ',
  },
  Lee: {
    'HMS': 'ヒットマンスタイル',
    'MS': 'ミストステップ',
    'SW': 'スウェー',
  },
  Marduk: {
    'CS': 'クラウチングスタイル',
    'MP': 'マウントポジション',
  },
  MasterRaven: {
    'HF': 'ヘイズフィールド',
  },
  Miguel: {
    'SS': 'サヴェッジスタンス',
  },
  Negan: {
    'ITM': 'インティミデーション',
  },
  Shaheen: {
    'SI': 'スネークイン',
  },
  Zafina: {
    'MT': 'モードタランチュラ',
    'MSC': 'モードスゲアクロウ',
    'MM': 'モードマンティス',
  },
};

export const SPECIAL_MOVE_EN = {
  Alisa: {
    'DF': 'Destructive Form',
  },
  Kunimitsu: {
    'BT': 'Back Turn', // 확인 필요, (or Disengage)
  },
  Josie: {
    'SS': 'Switch Stance',
    'SB': 'Sway Back',
  },
  Julia: {
    'WB': 'Wind Roll',
  },
  Kazumi: {
    'FW': 'Fearless Warrior',
  },
  Kazuya: {
    'DT': 'Devil Transformation',
  },
  King: {
    'AB': 'Arm Breaker',
    'CB': 'Cannonball Buster',
    'CC': 'Cobra Clutch',
    'CT': 'Cobra Twist',
    'JS': 'Jaguar Step',
    'MD': 'Manhattan Drop',
    'PB': 'Power Bomb',
    'RAS': 'Reverse Arm Slam',
    'RDDT': 'Reverse DDT',
    'RSSB': 'Reverse Special Stretch Bomb',
    'SHH': 'Standing Heel Hold',
    'VB': 'Victory Bomb',
  },
  Kuma: {
    'FR': 'Forward Roll',
  },
  Lars: {
    'DE': 'Dynamic Entry',
    'SE': 'Silent Entry',
  },
  Law: {
    'DC': 'Dragon Charge',
    'FS': 'Fake Step',
  },
  Lee: {
    'HM': 'Hitman',
    'MS': 'Mist Step',
    'SW': 'Sway',
  },
  Lei: {
    'DMW': 'Drunken Master Walk',
    'PI': 'Phoenix Illusion',
    'SW': 'Sidewind',
    'BT': 'Back Turn',
  },
  Leroy: {
    'HM': 'Hermit',
  },
  Lucky: {
    'BT': 'Back Turn',
    'LT': 'Left Twist',
    'SC': 'Scoot',
  },
  MasterRaven: {
    'HZ': 'Haze',
    'BT': 'Back Turn',
  },
  Miguel: {
    'SS': 'Savage Stance',
  },
  Negan: {
    'Int': 'Intimidation',
  },
  Shaheen: {
    'SS': 'Stealth Step',
  },
  Xiaoyu: {
    'BT': 'Back Turn',
    'PX': 'Phoenix',
  },
  Yoshimitsu: {
    'BT': 'Back Turn',
    'MD': 'Manji Dragonfly',
    'MnK': 'Mutou no Kiwami',
  },
  Zafina: {
    'TS': 'Tarantulra Stance',
    'SS': 'Scarecrow stance',
    'MS': 'Mantis stance',
  },
};
