import Link from 'next/link';
import { notFound } from 'next/navigation';
import { policies } from '@/data/policies';

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies.find((item) => item.slug === slug);
  return {
    title: policy ? policy.title : 'ไม่พบนโยบาย',
    description: policy?.short,
  };
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies.find((item) => item.slug === slug);
  if (!policy) notFound();

  return (
    <main className="detail">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">← นโยบายทั้งหมด</Link> · {policy.category}
        </div>

        <div className="detail-hero">
          <div>
            <div className="eyebrow">{policy.category}</div>
            <h1>{policy.title}</h1>
            <p className="lede">{policy.short}</p>
            <div className="hero-meta">
              <span className={`status ${policy.status === 'รอตรวจหลักฐานเพิ่มเติม' ? 'wait' : ''}`}>
                {policy.status}
              </span>
              <span className="pill">{policy.sources.length} แหล่งอ้างอิง</span>
              {policy.timeline.length > 0 && <span className="pill">{policy.timeline.length} เหตุการณ์ใน timeline</span>}
            </div>
          </div>

          <aside className="summary-box">
            <dl>
              <div>
                <dt>คำประกาศหลัก</dt>
                <dd>{policy.promise}</dd>
              </div>
              {policy.target && (
                <div>
                  <dt>เป้าหมาย / ขอบเขต</dt>
                  <dd>{policy.target}</dd>
                </div>
              )}
              {policy.budget && (
                <div>
                  <dt>ตัวเลขด้านงบ / ค่าตอบแทนที่ประกาศ</dt>
                  <dd>{policy.budget}</dd>
                </div>
              )}
              {policy.people && (
                <div>
                  <dt>กลุ่มที่เกี่ยวข้อง</dt>
                  <dd>{policy.people}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>

        <div className="detail-grid">
          <div>
            <section className="panel">
              <h2>สิ่งที่พรรคประกาศ</h2>
              <p>{policy.promise}</p>
              {policy.mechanism && (
                <>
                  <h2 style={{ marginTop: 28 }}>กลไกที่ระบุ</h2>
                  <p>{policy.mechanism}</p>
                </>
              )}
            </section>

            <section className="panel">
              <h2>ข้อสังเกตจากหลักฐานที่มีตอนนี้</h2>
              <p>{policy.evidenceNote}</p>
            </section>

            <section className="panel">
              <h2>Timeline หลักฐาน</h2>
              {policy.timeline.length > 0 ? (
                <div>
                  {policy.timeline.map((item, index) => (
                    <div className="timeline-item" key={`${item.date}-${index}`}>
                      <div className="timeline-date">{item.date}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      {item.sourceUrl && (
                        <a className="source-link" href={item.sourceUrl} target="_blank" rel="noreferrer">
                          เปิดแหล่งต้นฉบับ ↗
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>
                  ยังไม่มีเหตุการณ์ที่ใส่ใน timeline สำหรับ V1
                  ระบบจะเพิ่มเมื่อมีวันที่และแหล่งอ้างอิงที่ระบุได้ชัด
                </p>
              )}
            </section>
          </div>

          <aside>
            <section className="panel">
              <h2>แหล่งข้อมูล</h2>
              <div className="source-list">
                {policy.sources.map((source) => (
                  <div className="source" key={source.url}>
                    <div className="source-top">
                      <strong>{source.label}</strong>
                      <small>{source.type}</small>
                    </div>
                    {source.note && <p>{source.note}</p>}
                    <a className="source-link" href={source.url} target="_blank" rel="noreferrer">
                      {source.url}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <h2>คำค้นที่เกี่ยวข้อง</h2>
              <div className="filters">
                {policy.tags.map((tag) => <span className="pill" key={tag}>{tag}</span>)}
              </div>
            </section>

            <section className="panel">
              <h2>วิธีตีความสถานะ</h2>
              <p>
                สถานะบนเว็บบอกระดับข้อมูลที่เราเชื่อมไว้ ไม่ใช่คะแนนความสำเร็จของนโยบาย
                และไม่ใช่คำแนะนำทางการเมือง
              </p>
              <Link className="source-link" href="/methodology">อ่านวิธีตรวจข้อมูล →</Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
