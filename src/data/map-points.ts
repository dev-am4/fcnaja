export type MapLayer = 'mp' | 'budget' | 'project';
export type LocationAccuracy = 'region' | 'province' | 'national';

export type MapFact = { label: string; value: string };

export type MapPoint = {
  id: string;
  layer: MapLayer;
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
  count?: number;
  amountBaht?: number;
  year?: string;
  accuracy: LocationAccuracy;
  facts: MapFact[];
  note: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const layerMeta = {
  mp: { label: 'สส.', short: 'สส.', color: '#315d82', icon: '●' },
  budget: { label: 'งบประมาณ', short: 'งบ', color: '#9a6b1c', icon: '฿' },
  project: { label: 'โครงการ', short: 'โครงการ', color: '#2f7655', icon: '◆' },
} satisfies Record<MapLayer, { label: string; short: string; color: string; icon: string }>;

export const mapPoints: MapPoint[] = [
  {
    id: 'mp-north',
    layer: 'mp',
    title: 'สส. เขตภูมิใจไทย · ภาคเหนือ',
    subtitle: 'กลุ่มตามภูมิภาค',
    lat: 18.55,
    lng: 99.05,
    count: 26,
    year: '2569',
    accuracy: 'region',
    facts: [
      { label: 'สส. เขต', value: '26 คน' },
      { label: 'ฐานข้อมูล', value: 'สภาผู้แทนราษฎร ชุดที่ 27' },
    ],
    note: 'ตำแหน่งหมุดเป็นจุดอ้างอิงระดับภูมิภาค ไม่ใช่สำนักงานหรือบ้านของ สส.',
    sourceLabel: 'HRIS รัฐสภา · สมาชิกสภาผู้แทนราษฎร ชุดที่ 27',
    sourceUrl: 'https://hris.parliament.go.th/manage/map/',
  },
  {
    id: 'mp-northeast',
    layer: 'mp',
    title: 'สส. เขตภูมิใจไทย · ภาคตะวันออกเฉียงเหนือ',
    subtitle: 'กลุ่มตามภูมิภาค',
    lat: 16.25,
    lng: 103.15,
    count: 63,
    year: '2569',
    accuracy: 'region',
    facts: [
      { label: 'สส. เขต', value: '63 คน' },
      { label: 'ฐานข้อมูล', value: 'สภาผู้แทนราษฎร ชุดที่ 27' },
    ],
    note: 'ตำแหน่งหมุดเป็นจุดอ้างอิงระดับภูมิภาค ไม่ใช่สำนักงานหรือบ้านของ สส.',
    sourceLabel: 'HRIS รัฐสภา · สมาชิกสภาผู้แทนราษฎร ชุดที่ 27',
    sourceUrl: 'https://hris.parliament.go.th/manage/map/',
  },
  {
    id: 'mp-central',
    layer: 'mp',
    title: 'สส. เขตภูมิใจไทย · ภาคกลาง',
    subtitle: 'กลุ่มตามภูมิภาค',
    lat: 14.35,
    lng: 100.45,
    count: 40,
    year: '2569',
    accuracy: 'region',
    facts: [
      { label: 'สส. เขต', value: '40 คน' },
      { label: 'ฐานข้อมูล', value: 'สภาผู้แทนราษฎร ชุดที่ 27' },
    ],
    note: 'ตำแหน่งหมุดเป็นจุดอ้างอิงระดับภูมิภาค ไม่ใช่สำนักงานหรือบ้านของ สส.',
    sourceLabel: 'HRIS รัฐสภา · สมาชิกสภาผู้แทนราษฎร ชุดที่ 27',
    sourceUrl: 'https://hris.parliament.go.th/manage/map/',
  },
  {
    id: 'mp-east',
    layer: 'mp',
    title: 'สส. เขตภูมิใจไทย · ภาคตะวันออก',
    subtitle: 'กลุ่มตามภูมิภาค',
    lat: 13.25,
    lng: 101.25,
    count: 13,
    year: '2569',
    accuracy: 'region',
    facts: [
      { label: 'สส. เขต', value: '13 คน' },
      { label: 'ฐานข้อมูล', value: 'สภาผู้แทนราษฎร ชุดที่ 27' },
    ],
    note: 'ตำแหน่งหมุดเป็นจุดอ้างอิงระดับภูมิภาค ไม่ใช่สำนักงานหรือบ้านของ สส.',
    sourceLabel: 'HRIS รัฐสภา · สมาชิกสภาผู้แทนราษฎร ชุดที่ 27',
    sourceUrl: 'https://hris.parliament.go.th/manage/map/',
  },
  {
    id: 'mp-south',
    layer: 'mp',
    title: 'สส. เขตภูมิใจไทย · ภาคใต้',
    subtitle: 'กลุ่มตามภูมิภาค',
    lat: 8.55,
    lng: 99.65,
    count: 31,
    year: '2569',
    accuracy: 'region',
    facts: [
      { label: 'สส. เขต', value: '31 คน' },
      { label: 'ฐานข้อมูล', value: 'สภาผู้แทนราษฎร ชุดที่ 27' },
    ],
    note: 'ตำแหน่งหมุดเป็นจุดอ้างอิงระดับภูมิภาค ไม่ใช่สำนักงานหรือบ้านของ สส.',
    sourceLabel: 'HRIS รัฐสภา · สมาชิกสภาผู้แทนราษฎร ชุดที่ 27',
    sourceUrl: 'https://hris.parliament.go.th/manage/map/',
  },
  {
    id: 'mp-party-list',
    layer: 'mp',
    title: 'สส. บัญชีรายชื่อ · ภูมิใจไทย',
    subtitle: 'ไม่ผูกกับเขตภูมิศาสตร์',
    lat: 13.76,
    lng: 100.50,
    count: 19,
    year: '2569',
    accuracy: 'national',
    facts: [
      { label: 'บัญชีรายชื่อ', value: '19 คน' },
      { label: 'สส. รวมพรรค', value: '192 คน' },
      { label: 'สส. เขต', value: '173 คน' },
    ],
    note: 'หมุดนี้ใช้กรุงเทพฯ เป็นจุดอ้างอิงเชิงข้อมูลเท่านั้น เพราะ สส. บัญชีรายชื่อไม่มีเขตเลือกตั้งเฉพาะพื้นที่',
    sourceLabel: 'HRIS รัฐสภา · สมาชิกสภาผู้แทนราษฎร ชุดที่ 27',
    sourceUrl: 'https://hris.parliament.go.th/manage/map/',
  },

  {
    id: 'budget-yasothon-2569',
    layer: 'budget',
    title: 'งบประมาณทั้งหมดของจังหวัดยโสธร',
    subtitle: 'ปีงบประมาณ 2569',
    lat: 15.79,
    lng: 104.15,
    amountBaht: 213_818_800,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'วงเงิน', value: '213.8188 ล้านบาท' },
      { label: 'หน่วยข้อมูล', value: 'สำนักงานจังหวัดยโสธร' },
    ],
    note: 'หมุดอยู่ที่จุดอ้างอิงระดับจังหวัด ไม่ใช่พิกัดของโครงการใดโครงการหนึ่ง',
    sourceLabel: 'data.go.th · งบประมาณทั้งหมดของจังหวัด 2561–2569',
    sourceUrl: 'https://data.go.th/th/dataset/yst_67_01',
  },
  {
    id: 'budget-phrae-plan-2569',
    layer: 'budget',
    title: 'งบโครงการตามแผนปฏิบัติราชการจังหวัดแพร่',
    subtitle: 'วงเงินที่มีตัวเลขในชุดข้อมูลปี 2569',
    lat: 18.14,
    lng: 100.14,
    amountBaht: 207_033_600,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'วงเงินที่รวมได้', value: '207.0336 ล้านบาท' },
      { label: 'รายการมีตัวเลข', value: '3 ประเด็นการพัฒนา' },
    ],
    note: 'ผลรวมนี้รวมเฉพาะรายการปี 2569 ที่มีตัวเลขในไฟล์ต้นทาง และไม่ถือเป็นงบทั้งหมดของจังหวัดแพร่',
    sourceLabel: 'data.go.th · โครงการตามแผนปฏิบัติราชการจังหวัดแพร่',
    sourceUrl: 'https://data.go.th/th/dataset/phrae_014',
  },
  {
    id: 'budget-lamphun-plan-2569',
    layer: 'budget',
    title: 'งบโครงการตามแผนปฏิบัติราชการจังหวัดลำพูน',
    subtitle: 'ปีงบประมาณ 2569',
    lat: 18.58,
    lng: 99.01,
    amountBaht: 189_624_550,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'วงเงิน', value: '189.62455 ล้านบาท' },
      { label: 'กลุ่มรายการ', value: '5 กลุ่มงบ/ประเด็น' },
    ],
    note: 'หมุดอยู่ที่จุดอ้างอิงระดับจังหวัด ข้อมูลเป็นงบโครงการตามแผนปฏิบัติราชการจังหวัดที่เผยแพร่ในชุดข้อมูลต้นทาง',
    sourceLabel: 'data.go.th · งบประมาณโครงการตามแผนปฏิบัติราชการจังหวัดลำพูน',
    sourceUrl: 'https://data.go.th/dataset/dataset_10_0217',
  },

  {
    id: 'project-prachuap-drug-2569',
    layer: 'project',
    title: 'โครงการทบทวนทักษะชุมชนเพื่อป้องกันและแก้ไขปัญหายาเสพติด',
    subtitle: 'จังหวัดประจวบคีรีขันธ์ · 2569',
    lat: 11.81,
    lng: 99.80,
    amountBaht: 181_800,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'งบประมาณ', value: '181,800 บาท' },
      { label: 'ที่มางบ', value: 'งบบริหารงานจังหวัดแบบบูรณาการ' },
    ],
    note: 'ชุดข้อมูลไม่ได้ให้พิกัดโครงการ จึงวางหมุดระดับจังหวัดและระบุความแม่นยำไว้ชัดเจน',
    sourceLabel: 'data.go.th · โครงการตามยุทธการเมืองสามอ่าวฯ',
    sourceUrl: 'https://data.go.th/dataset/dopa0201',
  },
  {
    id: 'project-kanchanaburi-tourism-standard-2569',
    layer: 'project',
    title: 'พัฒนาแหล่งท่องเที่ยวให้ได้มาตรฐานและเป็นมิตรต่อสิ่งแวดล้อม',
    subtitle: 'จังหวัดกาญจนบุรี · 2569',
    lat: 14.05,
    lng: 99.51,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'ประเด็น', value: 'การท่องเที่ยวสร้างสรรค์' },
      { label: 'แหล่งงบ', value: 'จังหวัด' },
    ],
    note: 'ไฟล์ต้นทางระบุโครงการและหน่วยดำเนินการ แต่ไม่ระบุพิกัดและวงเงินใน resource นี้',
    sourceLabel: 'data.go.th · แผนงานและโครงการสำคัญของจังหวัดกาญจนบุรี',
    sourceUrl: 'https://data.go.th/dataset/69_01_17',
  },
  {
    id: 'project-kanchanaburi-infrastructure-2569',
    layer: 'project',
    title: 'พัฒนาโครงสร้างพื้นฐานเพื่อความสะดวก สะอาด ปลอดภัย และเข้าถึงข้อมูล',
    subtitle: 'จังหวัดกาญจนบุรี · 2569',
    lat: 14.00,
    lng: 99.56,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'ประเด็น', value: 'การท่องเที่ยวสร้างสรรค์' },
      { label: 'หน่วยดำเนินการ', value: 'โยธาธิการและผังเมือง / มทบ.17' },
    ],
    note: 'ตำแหน่งหมุดเป็นระดับจังหวัด เพราะ resource ต้นทางไม่ให้พิกัดโครงการ',
    sourceLabel: 'data.go.th · แผนงานและโครงการสำคัญของจังหวัดกาญจนบุรี',
    sourceUrl: 'https://data.go.th/dataset/69_01_17',
  },
  {
    id: 'project-kanchanaburi-tourism-business-2569',
    layer: 'project',
    title: 'พัฒนาการท่องเที่ยว สินค้าของฝาก ผู้ประกอบการ และบุคลากร',
    subtitle: 'จังหวัดกาญจนบุรี · 2569',
    lat: 14.08,
    lng: 99.56,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'ประเด็น', value: 'การท่องเที่ยวสร้างสรรค์' },
      { label: 'แหล่งงบ', value: 'จังหวัด' },
    ],
    note: 'ตำแหน่งหมุดเป็นระดับจังหวัด เพราะ resource ต้นทางไม่ให้พิกัดโครงการ',
    sourceLabel: 'data.go.th · แผนงานและโครงการสำคัญของจังหวัดกาญจนบุรี',
    sourceUrl: 'https://data.go.th/dataset/69_01_17',
  },
  {
    id: 'project-kanchanaburi-marketing-2569',
    layer: 'project',
    title: 'ส่งเสริมการทำการตลาดด้านการท่องเที่ยว',
    subtitle: 'จังหวัดกาญจนบุรี · 2569',
    lat: 14.02,
    lng: 99.47,
    year: '2569',
    accuracy: 'province',
    facts: [
      { label: 'ประเด็น', value: 'การท่องเที่ยวสร้างสรรค์' },
      { label: 'หน่วยดำเนินการ', value: 'สำนักงานการท่องเที่ยวและกีฬาจังหวัด' },
    ],
    note: 'ตำแหน่งหมุดเป็นระดับจังหวัด เพราะ resource ต้นทางไม่ให้พิกัดโครงการ',
    sourceLabel: 'data.go.th · แผนงานและโครงการสำคัญของจังหวัดกาญจนบุรี',
    sourceUrl: 'https://data.go.th/dataset/69_01_17',
  },
];

export const mapCoverage = {
  mp: {
    headline: '192',
    label: 'สส. ภูมิใจไทย',
    note: '173 เขต + 19 บัญชีรายชื่อ',
  },
  budget: {
    headline: '3',
    label: 'พื้นที่งบที่เชื่อมแล้ว',
    note: 'แสดง coverage จริง ไม่สมมติครบ 77 จังหวัด',
  },
  project: {
    headline: String(mapPoints.filter((point) => point.layer === 'project').length),
    label: 'หมุดโครงการที่เชื่อมแล้ว',
    note: 'เพิ่มได้ต่อเนื่องจาก data.go.th',
  },
};

export function formatBaht(amount?: number) {
  if (!amount) return '';
  if (amount >= 1_000_000) return new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 }).format(amount / 1_000_000) + ' ล้านบาท';
  return new Intl.NumberFormat('th-TH').format(amount) + ' บาท';
}

export function accuracyLabel(accuracy: LocationAccuracy) {
  if (accuracy === 'region') return 'ตำแหน่งอ้างอิงระดับภูมิภาค';
  if (accuracy === 'national') return 'ข้อมูลระดับประเทศ / ไม่ผูกเขต';
  return 'ตำแหน่งอ้างอิงระดับจังหวัด';
}
