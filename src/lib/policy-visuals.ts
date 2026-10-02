import { policies, type Policy } from '@/data/policies';

export type VisualStageKey = 'no-direct' | 'policy-related' | 'in-progress' | 'active-measured';

export type VisualStage = {
  key: VisualStageKey;
  label: string;
  description: string;
};

export const visualStages: VisualStage[] = [
  {
    key: 'no-direct',
    label: 'ยังไม่มีหลักฐานตรง',
    description: 'ในฐานข้อมูลปัจจุบันยังไม่มี event ทางการที่ผูกตรงกับคำหาเสียง',
  },
  {
    key: 'policy-related',
    label: 'บรรจุ / มีมาตรการที่เกี่ยวข้อง',
    description: 'พบการบรรจุในนโยบายรัฐบาลหรือมาตรการที่เกี่ยวข้อง แต่ยังไม่ใช่หลักฐานการใช้จริงทั้งหมด',
  },
  {
    key: 'in-progress',
    label: 'กำลังขับเคลื่อน',
    description: 'มีการดำเนินงานหรือการเตรียมระบบจากหน่วยงานที่เกี่ยวข้อง',
  },
  {
    key: 'active-measured',
    label: 'เริ่มใช้ / มีข้อมูลวัดผล',
    description: 'มีการเริ่มใช้สิทธิ มาตรการ หรือมีตัวชี้วัดทางการที่ระบุช่วงเวลาได้',
  },
];

export function getVisualStage(policy: Policy): VisualStageKey {
  if (policy.actionEvidence.length === 0 || policy.actionStatus.includes('ยังไม่มีหลักฐานตรง')) {
    return 'no-direct';
  }

  if (
    policy.actionStatus.includes('มีผลใช้') ||
    policy.actionStatus.includes('เริ่มคุ้มครอง') ||
    policy.actionStatus.includes('ลงทะเบียนปี 2569') ||
    policy.actionStatus.includes('ตัวชี้วัดทางการล่าสุด')
  ) {
    return 'active-measured';
  }

  if (
    policy.actionStatus.includes('เริ่มขับเคลื่อน') ||
    policy.actionStatus.includes('มีการดำเนินงานที่ตรวจได้') ||
    policy.actionStatus.includes('พบการดำเนินงานบางองค์ประกอบ') ||
    policy.actionStatus.includes('มีการขับเคลื่อน') ||
    policy.actionStatus.includes('รัฐบาลและกระทรวง')
  ) {
    return 'in-progress';
  }

  return 'policy-related';
}

export const stageCounts = visualStages.map((stage) => ({
  ...stage,
  count: policies.filter((policy) => getVisualStage(policy) === stage.key).length,
}));

export const categoryCounts = Array.from(
  policies.reduce((map, policy) => {
    map.set(policy.category, (map.get(policy.category) ?? 0) + 1);
    return map;
  }, new Map<string, number>())
).map(([category, count]) => ({ category, count }))
 .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category, 'th'));

export const evidenceMatrix = policies.map((policy) => ({
  slug: policy.slug,
  title: policy.title,
  category: policy.category,
  promiseSource: policy.sources.some((source) => source.type === 'พรรค'),
  officialSource: policy.sources.some((source) =>
    ['กกต.', 'รัฐบาล', 'หน่วยงานรัฐ', 'สถิติทางการ'].includes(source.type)
  ),
  datedAction: policy.actionEvidence.length > 0,
  officialStats: policy.sources.some((source) => source.type === 'สถิติทางการ'),
}));

const thaiMonths: Record<string, number> = {
  'ม.ค.': 1,
  'ก.พ.': 2,
  'มี.ค.': 3,
  'เม.ย.': 4,
  'พ.ค.': 5,
  'มิ.ย.': 6,
  'ก.ค.': 7,
  'ส.ค.': 8,
  'ก.ย.': 9,
  'ต.ค.': 10,
  'พ.ย.': 11,
  'ธ.ค.': 12,
};

function toSortKey(dateLabel: string): number {
  const quarter = dateLabel.match(/ไตรมาส\s*(\d)\/(\d{4})/);
  if (quarter) {
    const q = Number(quarter[1]);
    const buddhistYear = Number(quarter[2]);
    const month = q * 3;
    return (buddhistYear - 543) * 10000 + month * 100 + 28;
  }

  const full = dateLabel.match(/(?:(\d{1,2})\s+)?(ม\.ค\.|ก\.พ\.|มี\.ค\.|เม\.ย\.|พ\.ค\.|มิ\.ย\.|ก\.ค\.|ส\.ค\.|ก\.ย\.|ต\.ค\.|พ\.ย\.|ธ\.ค\.)\s+(\d{4})/);
  if (full) {
    const day = Number(full[1] ?? 1);
    const month = thaiMonths[full[2]] ?? 1;
    const year = Number(full[3]) - 543;
    return year * 10000 + month * 100 + day;
  }

  return 0;
}

export const timelineEvents = policies
  .flatMap((policy) =>
    policy.actionEvidence.map((event) => ({
      ...event,
      policySlug: policy.slug,
      policyTitle: policy.title,
      category: policy.category,
      sortKey: toSortKey(event.date),
    }))
  )
  .sort((a, b) => a.sortKey - b.sortKey || a.policyTitle.localeCompare(b.policyTitle, 'th'));

export const latestTimelineEvents = [...timelineEvents].reverse().slice(0, 6);
