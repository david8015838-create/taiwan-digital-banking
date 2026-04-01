export type BankType = 'neobank' | 'private' | 'public' | 'other'

export interface Bank {
  name: string
  product: string
  type: BankType
  newRate: string
  oldRate: string
  rateLimit: string
  transferCount: string
  withdrawCount: string
  feature: string
  newRateNum: number   // for sorting: 0 if N/A
  transferNum: number  // for sorting
}

export const banks: Bank[] = [
  // ====== 純網銀 ======
  {
    name: 'LINE Bank',
    product: '口袋帳戶',
    type: 'neobank',
    newRate: '1.5%',
    oldRate: '1.5%',
    rateLimit: '50~100萬',
    transferCount: '50次',
    withdrawCount: '8次',
    feature: 'LINE Pay整合 + 快點卡YOLO 4%回饋',
    newRateNum: 1.5,
    transferNum: 50,
  },
  {
    name: '樂天銀行',
    product: '數位帳戶',
    type: 'neobank',
    newRate: '15%（10天）→ 2.8%',
    oldRate: '1.5%',
    rateLimit: '5萬/無上限',
    transferCount: '15~20次',
    withdrawCount: '10~20次',
    feature: '樂天點數生態圈',
    newRateNum: 15,
    transferNum: 15,
  },
  {
    name: '將來銀行',
    product: '數位帳戶',
    type: 'neobank',
    newRate: '1.8%（任務）',
    oldRate: '1.5%',
    rateLimit: '20萬/無上限',
    transferCount: '50次',
    withdrawCount: '5次',
    feature: '全聯PX Pay整合',
    newRateNum: 1.8,
    transferNum: 50,
  },

  // ====== 民營銀行 ======
  {
    name: '聯邦銀行',
    product: 'New New Bank',
    type: 'private',
    newRate: '15%（首月）',
    oldRate: '1.5%~4%',
    rateLimit: '10萬/30萬',
    transferCount: '10次',
    withdrawCount: '10次',
    feature: '萊爾富5%回饋',
    newRateNum: 15,
    transferNum: 10,
  },
  {
    name: '王道銀行',
    product: 'O-Bank',
    type: 'private',
    newRate: '8.8%（2個月）',
    oldRate: '2.1%',
    rateLimit: '10萬/20萬',
    transferCount: '10次',
    withdrawCount: '3次',
    feature: '1元起息每月給息',
    newRateNum: 8.8,
    transferNum: 10,
  },
  {
    name: '台新銀行',
    product: 'Richart',
    type: 'private',
    newRate: '3.5%',
    oldRate: '1.8%',
    rateLimit: '10萬/30萬',
    transferCount: '5次',
    withdrawCount: '5次',
    feature: '小查罐自動存錢',
    newRateNum: 3.5,
    transferNum: 5,
  },
  {
    name: '凱基銀行',
    product: 'Karry',
    type: 'private',
    newRate: '3%~3.3%',
    oldRate: '—',
    rateLimit: '5萬',
    transferCount: '30次',
    withdrawCount: '—',
    feature: '高跨轉次數',
    newRateNum: 3,
    transferNum: 30,
  },
  {
    name: '遠東銀行',
    product: 'Bankee',
    type: 'private',
    newRate: '2.6%（6個月）',
    oldRate: '1.435%',
    rateLimit: '5萬/無上限',
    transferCount: '6次',
    withdrawCount: '6次',
    feature: '社群圈加碼1.6%',
    newRateNum: 2.6,
    transferNum: 6,
  },
  {
    name: '渣打銀行',
    product: '心幸福',
    type: 'private',
    newRate: '2.5%',
    oldRate: '2.3%',
    rateLimit: '最高300萬',
    transferCount: '每日15次',
    withdrawCount: '—',
    feature: '超高額度300萬',
    newRateNum: 2.5,
    transferNum: 15,
  },
  {
    name: '永豐銀行',
    product: 'DAWHO大戶',
    type: 'private',
    newRate: '1.5%',
    oldRate: '1.5%',
    rateLimit: '30萬',
    transferCount: '10~30次',
    withdrawCount: '10~30次',
    feature: '信用卡國內5%/國外6%回饋',
    newRateNum: 1.5,
    transferNum: 10,
  },
  {
    name: '國泰世華',
    product: 'CUBE/KOKO',
    type: 'private',
    newRate: '4%（完成任務）',
    oldRate: '1.5%',
    rateLimit: '5萬/30萬',
    transferCount: '3次',
    withdrawCount: '—',
    feature: '慶生月最高10%回饋',
    newRateNum: 4,
    transferNum: 3,
  },
  {
    name: '台北富邦',
    product: '數位帳戶',
    type: 'private',
    newRate: '2%',
    oldRate: '—',
    rateLimit: '10萬',
    transferCount: '5次',
    withdrawCount: '5次',
    feature: '富邦生態圈整合',
    newRateNum: 2,
    transferNum: 5,
  },
  {
    name: '上海商銀',
    product: 'CloudBank',
    type: 'private',
    newRate: '2.085%',
    oldRate: '2.085%',
    rateLimit: '20萬無門檻',
    transferCount: '10次',
    withdrawCount: '10次',
    feature: '無門檻即享優利',
    newRateNum: 2.085,
    transferNum: 10,
  },
  {
    name: '新光銀行',
    product: 'OU數位帳戶',
    type: 'private',
    newRate: '—',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '10~20次',
    withdrawCount: '—',
    feature: '央行升息連動',
    newRateNum: 0,
    transferNum: 10,
  },
  {
    name: '匯豐銀行',
    product: 'One能戶',
    type: 'private',
    newRate: '—',
    oldRate: '—',
    rateLimit: '50萬',
    transferCount: '30次',
    withdrawCount: '—',
    feature: '新戶最高1000元回饋',
    newRateNum: 0,
    transferNum: 30,
  },
  {
    name: '星展銀行',
    product: '星禧帳戶',
    type: 'private',
    newRate: '—',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '15次',
    withdrawCount: '—',
    feature: '外商銀行品牌',
    newRateNum: 0,
    transferNum: 15,
  },
  {
    name: '元大銀行',
    product: '數位帳戶',
    type: 'private',
    newRate: '—',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '99次',
    withdrawCount: '—',
    feature: '超高跨轉99次',
    newRateNum: 0,
    transferNum: 99,
  },
  {
    name: '台中銀行',
    product: 'Lolly Bank',
    type: 'private',
    newRate: '1.88%',
    oldRate: '—',
    rateLimit: '10萬',
    transferCount: '10次',
    withdrawCount: '—',
    feature: '在地化服務',
    newRateNum: 1.88,
    transferNum: 10,
  },
  {
    name: '玉山銀行',
    product: '數位帳戶',
    type: 'private',
    newRate: '—',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '—',
    withdrawCount: '—',
    feature: 'Unicard/Pi拍兔',
    newRateNum: 0,
    transferNum: 0,
  },
  {
    name: '中信銀行',
    product: 'My Way',
    type: 'private',
    newRate: '—',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '—',
    withdrawCount: '—',
    feature: 'LINE Pay強勢卡片',
    newRateNum: 0,
    transferNum: 0,
  },

  // ====== 公股銀行 ======
  {
    name: '臺灣銀行',
    product: '數位帳戶',
    type: 'public',
    newRate: '2.075%',
    oldRate: '2.075%',
    rateLimit: '10萬',
    transferCount: '99次',
    withdrawCount: '10次',
    feature: '公股最高跨轉次數',
    newRateNum: 2.075,
    transferNum: 99,
  },
  {
    name: '華南銀行',
    product: 'SnY',
    type: 'public',
    newRate: '2.3%',
    oldRate: '2.3%',
    rateLimit: '10萬',
    transferCount: '20次',
    withdrawCount: '10次',
    feature: '穩定不分新舊戶',
    newRateNum: 2.3,
    transferNum: 20,
  },
  {
    name: '第一銀行',
    product: 'iLEO',
    type: 'public',
    newRate: '2%',
    oldRate: '2%',
    rateLimit: '12萬',
    transferCount: '10次',
    withdrawCount: '10次',
    feature: '無條件即享優利',
    newRateNum: 2,
    transferNum: 10,
  },
  {
    name: '台企銀',
    product: 'Hokii',
    type: 'public',
    newRate: '2.1%~2.4%',
    oldRate: '1.9%',
    rateLimit: '15萬',
    transferCount: '20次',
    withdrawCount: '12次',
    feature: '任務加碼最高3%',
    newRateNum: 2.1,
    transferNum: 20,
  },
  {
    name: '彰化銀行',
    product: 'e財寶',
    type: 'public',
    newRate: '2.5%~3%',
    oldRate: '—',
    rateLimit: '10萬',
    transferCount: '30次',
    withdrawCount: '30次',
    feature: '跨轉跨提都超多',
    newRateNum: 2.5,
    transferNum: 30,
  },
  {
    name: '土地銀行',
    product: '數位帳戶',
    type: 'public',
    newRate: '1.94%',
    oldRate: '1.94%',
    rateLimit: '10萬',
    transferCount: '10次',
    withdrawCount: '5次',
    feature: '公股穩定',
    newRateNum: 1.94,
    transferNum: 10,
  },
  {
    name: '合作金庫',
    product: '數位帳戶',
    type: 'public',
    newRate: '1.5%',
    oldRate: '—',
    rateLimit: '12萬',
    transferCount: '6~16次',
    withdrawCount: '6~8次',
    feature: '公股安心感',
    newRateNum: 1.5,
    transferNum: 6,
  },
  {
    name: '兆豐銀行',
    product: 'MegaLite',
    type: 'public',
    newRate: '牌告+0.395%',
    oldRate: '—',
    rateLimit: '10萬',
    transferCount: '10次',
    withdrawCount: '10次',
    feature: '外匯強項',
    newRateNum: 0,
    transferNum: 10,
  },

  // ====== 其他 ======
  {
    name: '高雄銀行',
    product: 'Hoyaa',
    type: 'other',
    newRate: '牌告',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '10次',
    withdrawCount: '5次',
    feature: '南部在地化服務',
    newRateNum: 0,
    transferNum: 10,
  },
  {
    name: '中華郵政',
    product: '數位帳戶',
    type: 'other',
    newRate: '牌告',
    oldRate: '—',
    rateLimit: '—',
    transferCount: '66次',
    withdrawCount: '5次',
    feature: '全台據點最多',
    newRateNum: 0,
    transferNum: 66,
  },
]

export const neoBanks = [
  {
    id: 'line',
    name: 'LINE Bank',
    subtitle: '口袋帳戶',
    logoText: 'L',
    logoClass: 'line',
    gradient: 'linear-gradient(135deg, rgba(0,179,0,0.5), rgba(0,179,0,0))',
    newRate: '1.5%',
    oldRate: '1.5%',
    rateLimit: '50~100萬',
    transferCount: '50次/月',
    withdrawCount: '8次/月',
    cardType: '快點卡 YOLO',
    cardReward: '國內消費4%',
    ecosystem: 'LINE Pay',
    features: [
      '100%純線上開戶，3分鐘完成',
      'LINE Pay無縫整合，消費即時通知',
      '快點卡YOLO國內消費4%回饋',
      '免最低存款餘額要求',
      '台灣第一家純網銀，市占最高',
    ],
    targetGroup: '重度LINE使用者、電商消費族',
  },
  {
    id: 'rakuten',
    name: '樂天銀行',
    subtitle: '數位帳戶',
    logoText: 'R',
    logoClass: 'rakuten',
    gradient: 'linear-gradient(135deg, rgba(220,38,38,0.5), rgba(220,38,38,0))',
    newRate: '15%（前10天）→ 2.8%',
    oldRate: '1.5%',
    rateLimit: '5萬/無上限',
    transferCount: '15~20次/月',
    withdrawCount: '10~20次/月',
    cardType: '樂天信用卡',
    cardReward: '樂天點數回饋',
    ecosystem: '樂天市場',
    features: [
      '新戶首10天享15%超高利率',
      '長期舊戶利率2.8%仍具競爭力',
      '樂天點數生態圈整合',
      '外資背景，國際匯款便利',
      '日系服務品質，介面簡潔',
    ],
    targetGroup: '樂天愛用者、日系品牌信仰者',
  },
  {
    id: 'jianglai',
    name: '將來銀行',
    subtitle: '數位帳戶',
    logoText: 'J',
    logoClass: 'jianglai',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.5), rgba(37,99,235,0))',
    newRate: '1.8%（完成任務）',
    oldRate: '1.5%',
    rateLimit: '20萬/無上限',
    transferCount: '50次/月',
    withdrawCount: '5次/月',
    cardType: '簽帳金融卡',
    cardReward: '全聯回饋',
    ecosystem: '全聯PX Pay',
    features: [
      '全聯PX Pay深度整合',
      '完成任務享1.8%優惠利率',
      '跨轉次數多達50次/月',
      '中信、全聯、中華電信三方合資',
      '聚焦超市消費族群',
    ],
    targetGroup: '全聯常客、日常超市消費族',
  },
]

export interface CardReward {
  bank: string
  product: string
  domesticRate: number
  overseasRate: number
  category: string
}

export const cardRewards: CardReward[] = [
  { bank: '永豐銀行', product: 'DAWHO大戶', domesticRate: 5, overseasRate: 6, category: '簽帳金融卡' },
  { bank: 'LINE Bank', product: '快點卡YOLO', domesticRate: 4, overseasRate: 2, category: '簽帳金融卡' },
  { bank: '聯邦銀行', product: 'New New Bank', domesticRate: 3, overseasRate: 1.5, category: '簽帳金融卡' },
  { bank: '樂天銀行', product: '樂天卡', domesticRate: 2, overseasRate: 2, category: '信用卡' },
  { bank: '台新銀行', product: 'Richart', domesticRate: 1.5, overseasRate: 1, category: '簽帳金融卡' },
]

export interface TransferRanking {
  bank: string
  product: string
  type: BankType
  count: number
  display: string
}

export const transferRankings: TransferRanking[] = [
  { bank: '元大銀行', product: '數位帳戶', type: 'private', count: 99, display: '99次' },
  { bank: '臺灣銀行', product: '數位帳戶', type: 'public', count: 99, display: '99次' },
  { bank: '凱基銀行', product: 'Karry', type: 'private', count: 30, display: '30次' },
  { bank: '匯豐銀行', product: 'One能戶', type: 'private', count: 30, display: '30次' },
  { bank: '彰化銀行', product: 'e財寶', type: 'public', count: 30, display: '30次' },
  { bank: 'LINE Bank', product: '口袋帳戶', type: 'neobank', count: 50, display: '50次' },
  { bank: '將來銀行', product: '數位帳戶', type: 'neobank', count: 50, display: '50次' },
  { bank: '中華郵政', product: '數位帳戶', type: 'other', count: 66, display: '66次' },
].sort((a, b) => b.count - a.count) as TransferRanking[]

export interface BankeeStrength {
  icon: string
  title: string
  desc: string
}

export interface BankeeWeakness {
  icon: string
  title: string
  desc: string
  severity: 'high' | 'medium' | 'low'
}

export interface BankeeOpportunity {
  icon: string
  title: string
  desc: string
  priority: '高優先' | '中優先' | '低優先'
}

export const bankeeStrengths: BankeeStrength[] = [
  { icon: '👥', title: '社群圈加碼機制', desc: '全台唯一以社群圈概念設計的數位帳戶，邀請好友加入社群圈可額外加碼1.6%利率，打造差異化護城河' },
  { icon: '🏢', title: '遠東集團後盾', desc: '遠東銀行為遠東集團旗下，集團涵蓋百貨、遠傳電信、遠東SOGO等，具備多元生態圈整合潛力' },
  { icon: '💰', title: '優惠額度無上限', desc: '新戶6個月2.6%利率無存款上限（5萬門檻），相較部分競爭者限制更彈性' },
  { icon: '📱', title: 'App 設計友善', desc: 'Bankee App介面設計以年輕族群為主要客群，社群功能整合於金融服務中，體驗具差異化' },
  { icon: '🔒', title: '民營銀行穩定性', desc: '遠東銀行成立逾60年，兼具民營銀行彈性與百年企業穩健，監管合規有保障' },
]

export const bankeeWeaknesses: BankeeWeakness[] = [
  { icon: '🔄', title: '跨轉次數嚴重不足', desc: '每月僅6次免費跨行轉帳，遠低於市場平均（LINE Bank 50次、元大 99次、郵局 66次），重度轉帳用戶體驗差', severity: 'high' },
  { icon: '📉', title: '舊戶利率競爭力弱', desc: '舊戶利率僅1.435%，低於市場平均（華南 2.3%、台灣銀行 2.075%），長期留客誘因不足', severity: 'high' },
  { icon: '🤝', title: '社群機制門檻高', desc: '社群圈加碼需邀請好友，對無社交網絡的用戶實際利率僅1%，實際獲益門檻相較競爭者更複雜', severity: 'medium' },
  { icon: '🌐', title: '生態圈整合有限', desc: '缺乏如 LINE Pay（LINE Bank）、全聯PX Pay（將來銀行）等強力第三方支付整合，消費場景受限', severity: 'medium' },
  { icon: '📣', title: '品牌知名度偏低', desc: 'Bankee在純網銀品牌戰中存在感弱，缺乏爆炸性行銷事件，年輕族群首選率偏低', severity: 'medium' },
  { icon: '💳', title: '簽帳卡回饋未進榜', desc: '簽帳金融卡回饋率在台灣市場未進前五名（永豐5%、LINE Bank 4%等），消費回饋競爭力待加強', severity: 'low' },
]

export const bankeeOpportunities: BankeeOpportunity[] = [
  { icon: '🚀', title: '大幅提升跨轉次數', desc: '建議提升至至少20次/月，可設計任務制（完成條件達30次），直接消除用戶最大痛點', priority: '高優先' },
  { icon: '📈', title: '優化舊戶利率結構', desc: '引入動態任務利率（如台企銀Hokii模式），讓活躍舊戶維持2%+利率，降低流失率', priority: '高優先' },
  { icon: '🛒', title: '整合遠東集團生態圈', desc: '深度串聯遠東SOGO百貨、遠傳電信、愛買等集團資產，打造「消費即加碼」場景，差異化競爭', priority: '中優先' },
  { icon: '🤖', title: '強化AI理財功能', desc: '跟進台新Richart小查罐趨勢，推出AI智能存款建議、消費分析、自動化儲蓄，吸引年輕族群', priority: '中優先' },
  { icon: '👨‍👩‍👧', title: '社群圈機制升級', desc: '將社群圈從「邀請好友」升級為「興趣社群」或「職場社群」，降低社交門檻，擴大適用族群', priority: '中優先' },
  { icon: '💡', title: '推出限時爆款新戶優惠', desc: '參考聯邦15%/王道8.8%模式，設計具話題性的新戶限時高利活動，提升品牌曝光與獲客', priority: '低優先' },
]

export const marketTrends = [
  {
    icon: '📈',
    title: '利率競爭白熱化',
    desc: '2025年聯邦、王道等民營銀行以新戶15%吸客，公股行庫也跟進調升，整體市場利率水準上移',
    tag: '利率',
    tagColor: '#22c55e',
  },
  {
    icon: '🔗',
    title: '生態圈綁定加速',
    desc: 'LINE Bank整合LINE Pay，將來銀行串聯全聯PX Pay，樂天接入樂天市場，平台化成主流趨勢',
    tag: '整合',
    tagColor: '#60a5fa',
  },
  {
    icon: '💳',
    title: '簽帳卡崛起',
    desc: '永豐DAWHO大戶5%/6%、LINE Bank快點卡4%創新高，簽帳金融卡回饋率逼近傳統信用卡',
    tag: '回饋',
    tagColor: '#f97316',
  },
  {
    icon: '🏛️',
    title: '公股數位化追趕',
    desc: '台灣銀行、華南、彰化等公股行庫加速推出數位帳戶，利率和服務向民營看齊',
    tag: '公股',
    tagColor: '#4ade80',
  },
  {
    icon: '🤖',
    title: 'AI理財功能擴充',
    desc: '各行庫AI客服、智能推薦、自動存款（台新小查罐）等功能普及，差異化競爭白熱化',
    tag: 'AI',
    tagColor: '#a78bfa',
  },
  {
    icon: '📱',
    title: '超高跨轉次數戰',
    desc: '元大銀行99次、臺灣銀行99次、中華郵政66次，跨轉次數成為吸引日常交易族群的關鍵指標',
    tag: '服務',
    tagColor: '#fbbf24',
  },
  {
    icon: '🌏',
    title: '外資銀行加碼數位',
    desc: '渣打心幸福300萬上限、匯豐One能戶、星展星禧帳戶積極布局，外商數位帳戶差異化競爭加劇',
    tag: '外資',
    tagColor: '#f472b6',
  },
]
