import { Product, Project, NewsItem, InsightItem } from './types';

// Products Data
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'floor-soundproof-mat',
    name: '樓板隔音墊',
    tagline: '高密度橡膠隔音，打造寧靜居住空間',
    categoryTag: '樓板隔音',
    description: '採用高密度橡膠聚合而成，具備優異的衝擊音阻隔能力，符合最新建築法規標準。適用於住宅大樓、飯店及商業空間地坪。',
    images: ['https://picsum.photos/800/600?random=1', 'https://picsum.photos/800/600?random=11'],
    specs: [
      { label: '厚度', value: '8mm / 10mm / 12mm' },
      { label: '寬度', value: '1m' },
      { label: '長度', value: '10m / 捲' },
      { label: '密度', value: '750 kg/m³' },
      { label: '隔音性能', value: 'ΔLw ≥ 20dB' }
    ],
    material: 'Recycled Rubber Granules',
    applications: ['集合住宅樓板', '健身房地坪', '機械室減震']
  },
  {
    id: 'p2',
    slug: 'pvc-pipe-fitting',
    name: 'PVC 管/接頭',
    tagline: '耐腐蝕、高強度工業級管材',
    categoryTag: '工業管材',
    description: '工業級硬質 PVC，耐酸鹼腐蝕，適用於化工廠、廢水處理廠及一般建築排水系統。',
    images: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=12'],
    specs: [
      { label: '尺寸', value: '1/2" ~ 12"' },
      { label: '標準', value: 'CNS / ASTM / JIS' },
      { label: '耐溫', value: 'Max 60°C' }
    ],
    material: 'Unplasticized Polyvinyl Chloride (UPVC)',
    applications: ['化工製程配管', '建築排水', '純水系統']
  },
  {
    id: 'p3',
    slug: 'pvc-waterproof-membrane',
    name: 'PVC 防水膜',
    tagline: '隧道與地下結構專用防水系統',
    categoryTag: '結構防水',
    description: '具備高延展性與抗穿刺性，特別適用於隧道、地下室外牆等長期浸水環境。',
    images: ['https://picsum.photos/800/600?random=3', 'https://picsum.photos/800/600?random=13'],
    specs: [
      { label: '厚度', value: '1.5mm / 2.0mm' },
      { label: '寬度', value: '2.05m' },
      { label: '顏色', value: '黃色 / 黑色 / 灰色' }
    ],
    material: 'PVC Resin + Plasticizers',
    applications: ['捷運隧道', '地下室外牆', '蓄水池']
  },
  {
    id: 'p4',
    slug: 'hydrophilic-waterstop',
    name: '水膨脹止水材',
    tagline: '遇水膨脹填補縫隙，雙重防護',
    categoryTag: '止水材料',
    description: '安裝於施工縫中，遇水後體積膨脹堵塞孔隙，有效防止水分滲透。',
    images: ['https://picsum.photos/800/600?random=4', 'https://picsum.photos/800/600?random=14'],
    specs: [
      { label: '膨脹倍率', value: '> 300%' },
      { label: '尺寸', value: '20mm x 10mm' },
      { label: '包裝', value: '30m / 箱' }
    ],
    material: 'Hydrophilic Rubber',
    applications: ['混凝土施工縫', '管件穿牆處']
  },
  {
    id: 'p5',
    slug: 'anti-corrosion-lining',
    name: '防蝕襯裡',
    tagline: '極端環境下的表面防護專家',
    categoryTag: '防蝕工程',
    description: '針對化學槽體內部進行襯裡施作，抵抗強酸強鹼侵蝕，延長設備壽命。',
    images: ['https://picsum.photos/800/600?random=5', 'https://picsum.photos/800/600?random=15'],
    specs: [
      { label: '厚度', value: '3mm ~ 5mm' },
      { label: '接著強度', value: '> 5 N/mm' },
      { label: '耐化學性', value: 'Excellent' }
    ],
    material: 'PE / PP / PVDF Sheet',
    applications: ['酸洗槽', '廢水池', '化學儲槽']
  },
  {
    id: 'p6',
    slug: 'pvc-waterstop',
    name: 'PVC 止水帶',
    tagline: '伸縮縫與施工縫的標準解決方案',
    categoryTag: '止水材料',
    description: '傳統且可靠的止水材料，利用肋條增加滲透路徑，適用於各類混凝土結構接縫。',
    images: ['https://picsum.photos/800/600?random=6', 'https://picsum.photos/800/600?random=16'],
    specs: [
      { label: '寬度', value: '150mm ~ 300mm' },
      { label: '形式', value: '中置型 / 外貼型' },
      { label: '抗拉強度', value: '> 14 MPa' }
    ],
    material: 'PVC Compound',
    applications: ['水壩', '地下箱涵', '擋土牆']
  },
  {
    id: 'p7',
    slug: 'sealant',
    name: '填縫膠',
    tagline: '高耐候性建築填縫密封',
    categoryTag: '密封材料',
    description: '單液型聚氨酯(PU)或矽利康密封膠，具備優異的彈性與附著力。',
    images: ['https://picsum.photos/800/600?random=7', 'https://picsum.photos/800/600?random=17'],
    specs: [
      { label: '表乾時間', value: '30 min' },
      { label: '斷裂伸長率', value: '> 500%' },
      { label: '包裝', value: '600ml 臘腸包' }
    ],
    material: 'Polyurethane / Silicone',
    applications: ['外牆伸縮縫', '門窗框邊', 'PC板接縫']
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: 'prj1',
    title: '台北捷運某線段隧道防水',
    category: 'tunnel',
    location: '台北市',
    year: '2023',
    images: ['https://picsum.photos/800/600?random=21', 'https://picsum.photos/800/600?random=22'],
    description: '本工程採用全包覆式PVC防水膜系統，針對高地下水位區段進行強化防護，確保捷運營運安全。',
    materials: ['PVC 防水膜', '不織布緩衝層'],
    relatedProductSlugs: ['pvc-waterproof-membrane']
  },
  {
    id: 'prj2',
    title: '竹科晶圓廠廢水池防蝕',
    category: 'commercial',
    location: '新竹市',
    year: '2024',
    images: ['https://picsum.photos/800/600?random=23', 'https://picsum.photos/800/600?random=24'],
    description: '針對高腐蝕性酸鹼廢水池，施作5mm厚PE防蝕襯裡，並針對管口進行特殊收邊處理。',
    materials: ['PE 防蝕襯裡', '化學錨栓'],
    relatedProductSlugs: ['anti-corrosion-lining', 'pvc-pipe-fitting']
  },
  {
    id: 'prj3',
    title: '台中七期豪宅樓板隔音',
    category: 'residential',
    location: '台中市',
    year: '2022',
    images: ['https://picsum.photos/800/600?random=25', 'https://picsum.photos/800/600?random=26'],
    description: '全棟採用8mm高密度橡膠隔音墊，實測降低衝擊音達22dB，大幅提升居住品質。',
    materials: ['樓板隔音墊', '制震膠'],
    relatedProductSlugs: ['floor-soundproof-mat']
  },
  {
    id: 'prj4',
    title: '南迴公路橋樑伸縮縫止水',
    category: 'road-bridge',
    location: '台東縣',
    year: '2021',
    images: ['https://picsum.photos/800/600?random=27', 'https://picsum.photos/800/600?random=28'],
    description: '跨海大橋伸縮縫採用高彈性止水帶與耐候填縫膠，抵抗強風與位移。',
    materials: ['PVC 止水帶', '填縫膠'],
    relatedProductSlugs: ['pvc-waterstop', 'sealant']
  },
  {
    id: 'prj5',
    title: '桃園機場第三航廈地下結構',
    category: 'public',
    location: '桃園市',
    year: '2025',
    images: ['https://picsum.photos/800/600?random=29', 'https://picsum.photos/800/600?random=30'],
    description: '巨型地下開挖工程，使用遇水膨脹止水條處理連續壁接縫。',
    materials: ['水膨脹止水材', '止水帶'],
    relatedProductSlugs: ['hydrophilic-waterstop']
  },
  {
    id: 'prj6',
    title: '高雄輕軌軌道減震工程',
    category: 'rail',
    location: '高雄市',
    year: '2023',
    images: ['https://picsum.photos/800/600?random=31', 'https://picsum.photos/800/600?random=32'],
    description: '軌道版下方鋪設減震墊，減少列車運行對周邊建築的震動影響。',
    materials: ['橡膠減震墊'],
    relatedProductSlugs: ['floor-soundproof-mat']
  },
  {
    id: 'prj7',
    title: '離岸風電陸上變電站',
    category: 'other',
    location: '彰化縣',
    year: '2024',
    images: ['https://picsum.photos/800/600?random=33', 'https://picsum.photos/800/600?random=34'],
    description: '沿海高鹽害環境，電纜溝槽採用特殊防蝕塗裝與止水處理。',
    materials: ['填縫膠', '防蝕塗料'],
    relatedProductSlugs: ['sealant']
  },
  // Add more to reach 12...
  {
    id: 'prj8',
    title: '信義區商辦大樓地下室',
    category: 'commercial',
    location: '台北市',
    year: '2022',
    images: ['https://picsum.photos/800/600?random=35', 'https://picsum.photos/800/600?random=36'],
    description: '深開挖地下室外牆防水工程。',
    materials: ['PVC 防水膜'],
    relatedProductSlugs: ['pvc-waterproof-membrane']
  },
  {
    id: 'prj9',
    title: '台南科學園區蓄水池',
    category: 'public',
    location: '台南市',
    year: '2023',
    images: ['https://picsum.photos/800/600?random=37', 'https://picsum.photos/800/600?random=38'],
    description: '大型民生用水蓄水池內襯。',
    materials: ['PE 防蝕襯裡'],
    relatedProductSlugs: ['anti-corrosion-lining']
  },
  {
    id: 'prj10',
    title: '花東鐵路雙軌化隧道',
    category: 'tunnel',
    location: '花蓮縣',
    year: '2024',
    images: ['https://picsum.photos/800/600?random=39', 'https://picsum.photos/800/600?random=40'],
    description: '新奧工法隧道防水層施作。',
    materials: ['PVC 防水膜', '不織布'],
    relatedProductSlugs: ['pvc-waterproof-membrane']
  },
  {
    id: 'prj11',
    title: '新北市集合住宅防水',
    category: 'residential',
    location: '新北市',
    year: '2023',
    images: ['https://picsum.photos/800/600?random=41', 'https://picsum.photos/800/600?random=42'],
    description: '屋頂與露台防水工程。',
    materials: ['填縫膠', 'PU防水'],
    relatedProductSlugs: ['sealant']
  },
  {
    id: 'prj12',
    title: '高鐵高架橋伸縮縫更換',
    category: 'rail',
    location: '苗栗縣',
    year: '2022',
    images: ['https://picsum.photos/800/600?random=43', 'https://picsum.photos/800/600?random=44'],
    description: '既有橋樑維修工程。',
    materials: ['PVC 止水帶'],
    relatedProductSlugs: ['pvc-waterstop']
  }
];

// News Data
export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    slug: '2024-annual-meeting',
    date: '2024.01.15',
    title: '2024 煒鑫實業年度大會圓滿落幕',
    summary: '展望新的一年，我們將持續投入研發更環保的防水材料。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=50'
  },
  {
    id: 'n2',
    slug: 'new-product-launch',
    date: '2023.11.20',
    title: '全新一代高密度隔音墊正式上市',
    summary: '通過國家級實驗室認證，隔音效果再升級。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=51'
  },
  {
    id: 'n3',
    slug: 'exhibition-taipei',
    date: '2023.09.10',
    title: '參展 2023 台北國際建材展',
    summary: '歡迎蒞臨南港展覽館 1館 4樓 M區攤位參觀指教。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=52'
  },
  {
    id: 'n4',
    slug: 'iso-certification',
    date: '2023.06.05',
    title: '榮獲 ISO 9001 品質管理認證',
    summary: '品質是我們的承諾，透過國際認證展現專業。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=53'
  },
  {
    id: 'n5',
    slug: 'employee-training',
    date: '2023.04.12',
    title: '春季工務部教育訓練',
    summary: '加強施工安全意識與新工法教學。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=54'
  },
  {
    id: 'n6',
    slug: 'charity-event',
    date: '2023.01.30',
    title: '參與偏鄉修繕公益計畫',
    summary: '善盡企業社會責任，協助偏鄉學校修補漏水教室。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=55'
  }
];

// Insights Data
export const INSIGHTS: InsightItem[] = [
  {
    id: 'i1',
    slug: 'tunnel-waterproofing-tech',
    category: '工法研討',
    title: '隧道防水膜鋪設關鍵技術解析',
    summary: '探討全包覆式防水系統在深層隧道的應用挑戰與解決方案。',
    content: '...',
    image: 'https://picsum.photos/800/600?random=60'
  },
  {
    id: 'i2',
    slug: 'soundproof-regulations',
    category: '法規新知',
    title: '2024 最新樓板隔音法規懶人包',
    summary: '一次搞懂分貝標準與驗收規範，避免工程糾紛。',
    content: '...',
    image: 'https://picsum.photos/800/600?random=61'
  },
  {
    id: 'i3',
    slug: 'anti-corrosion-selection',
    category: '材料選擇',
    title: '如何選擇正確的防蝕襯裡材料？',
    summary: 'PE, PP, PVDF, PVC 各種材質耐化學性比較表。',
    content: '...',
    image: 'https://picsum.photos/800/600?random=62'
  },
  {
    id: 'i4',
    slug: 'waterstop-installation',
    category: '施工實務',
    title: '止水帶安裝常見錯誤與補救',
    summary: '確保止水帶位置固定正確，避免混凝土澆置時位移。',
    content: '...',
    image: 'https://picsum.photos/800/600?random=63'
  },
  {
    id: 'i5',
    slug: 'green-building',
    category: '趨勢觀察',
    title: '綠建築與防水工程的結合',
    summary: '環保材料如何協助取得綠建築標章。',
    content: '...',
    image: 'https://picsum.photos/800/600?random=64'
  },
  {
    id: 'i6',
    slug: 'basement-leakage',
    category: '維修診斷',
    title: '地下室滲水原因診斷與對策',
    summary: '從裂縫型態判斷漏水原因，選擇最適當的修補工法。',
    content: '...',
    image: 'https://picsum.photos/800/600?random=65'
  }
];