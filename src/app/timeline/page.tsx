import Link from 'next/link';
import { lastVerified } from '@/data/policies';
import { timelineEvents } from '@/lib/policy-visuals';

export const metadata = {
  title: 'Timeline หลักฐาน',
  description: 'ลำดับเหตุการณ์ที่เชื่อมคำหาเสียงของพรรคภูมิใจไทยกับข้อมูลการดำเนินงานจากแหล่งทางการ',
};

export default function TimelinePage() {
  return (
    <main className="detail timeline-page">
      <div className="container">
        <div className="breadcrumb"><Link href="/">← กลับหน้าแรก</Link></div>
        <div className="eyebrow">Evidence timeline · verified {lastVerified}</div>
        <h1>จากคำหาเสียง<br />สู่เหตุการณ์ที่ตรวจได้</h1>
        <p className="lede">
          Timeline นี้รวบรวมเฉพาะเหตุการณ์ที่มีวันที่หรือช่วงเวลาจากแหล่งรัฐบาล หน่วยงานรัฐ
          หรือสถิติทางการ ไม่ได้ใช้จำนวนเหตุการณ์เป็นคะแนนหรือข้อสรุปว่านโยบายใดสำเร็จกว่าอีกนโยบาย
        </p>

        <div className="timeline-ruler" aria-hidden="true">
          <span>เม.ย. 2569</span>
          <span>มิ.ย.</span>
          <span>ส.ค.</span>
          <span>ต.ค. 2569</span>
        </div>

        <div className="master-timeline">
          {timelineEvents.map((event) => (
            <article className="master-event" key={event.policySlug + event.date + event.title}>
              <div className="master-event-marker" aria-hidden="true" />
              <div className="master-event-date">{event.date}</div>
              <div className="master-event-body">
                <div className="master-event-meta">
                  <span>{event.category}</span>
                  <Link href={`/policy/${event.policySlug}`}>{event.policyTitle} ↗</Link>
                </div>
                <h2>{event.title}</h2>
                <p>{event.detail}</p>
                <a className="source-link" href={event.sourceUrl} target="_blank" rel="noreferrer">
                  {event.sourceLabel} · เปิดต้นฉบับ ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="timeline-footnote">
          <strong>หมายเหตุการอ่าน</strong>
          <p>
            เดือนหรือไตรมาสที่ไม่มีวันที่เฉพาะจะแสดงตามช่วงเวลาที่แหล่งต้นฉบับระบุ
            ตำแหน่งในหน้านี้เป็นลำดับเวลา ไม่ใช่ระยะเวลาการดำเนินโครงการหรือคะแนนความคืบหน้า
          </p>
        </div>
      </div>
    </main>
  );
}
