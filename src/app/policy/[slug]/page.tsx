import Link from 'next/link';
import { notFound } from 'next/navigation';
import { policies } from '@/data/policies';
import PolicyStoryVisual from '@/components/PolicyStoryVisual';

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
            <div className="eyebrow">{policy.category} · Promise vs Action</div>
            <h1>{policy.title}</h1>
            <p className="lede">{policy.short}</p>
            <div className="hero-meta">
              <span className="status neutral">{policy.actionStatus}</span>
              <span className="pill">{policy.actionEvidence.length} เหตุการณ์</span>
              <span className="pill">{policy.sources.length} แหล่งอ้างอิง</span>
            </div>
          </div>

          <aside className="summary-box">
            <dl>
              <div>
                <dt>หาเสียงไว้</dt>
                <dd>{policy.promise}</dd>
              </div>
              <div>
                <dt>ที่ทำ / หลักฐานล่าสุด</dt>
                <dd>{policy.actionSummary}</dd>
              </div>
              {policy.target && (
                <div>
                  <dt>ขอบเขต / เป้าหมาย</dt>
                  <dd>{policy.target}</dd>
                </div>
              )}
              {policy.budget && (
                <div>
                  <dt>ตัวเลขงบหรือเงื่อนไขที่ต้องแยก</dt>
                  <dd>{policy.budget}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>

        <section className="policy-compare-detail" aria-label="เปรียบเทียบคำหาเสียงกับการดำเนินงาน">
          <div className="promise-column">
            <div className="compare-kicker">01 · หาเสียงไว้</div>
            <h2>{policy.promise}</h2>
            <ul className="fact-list">
              {policy.promisePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="action-column">
            <div className="compare-kicker">02 · ที่ทำ / หลักฐาน</div>
            <div className="action-status-large">{policy.actionStatus}</div>
            <p>{policy.actionSummary}</p>
          </div>
        </section>

        <PolicyStoryVisual policy={policy} />

        <div className="detail-grid">
          <div>
            <section className="panel">
              <div className="panel-kicker">Evidence timeline</div>
              <h2>เกิดอะไรขึ้นหลังคำหาเสียง</h2>

              {policy.actionEvidence.length > 0 ? (
                <div className="timeline">
                  {policy.actionEvidence.map((item, index) => (
                    <div className="timeline-item" key={item.date + '-' + index}>
                      <div className="timeline-date">{item.date}</div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                      <a className="source-link" href={item.sourceUrl} target="_blank" rel="noreferrer">
                        {item.sourceLabel} ↗
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="evidence-empty">
                  <strong>ยังไม่มีเหตุการณ์ทางการที่ผูกตรงกับคำหาเสียงนี้ในชุดข้อมูลปัจจุบัน</strong>
                  <p>
                    หมายความเพียงว่าเว็บยังไม่มีหลักฐานตรงที่เพียงพอ ไม่ได้หมายความว่านโยบายถูกยกเลิกหรือไม่มีการดำเนินงานในทุกกรณี
                  </p>
                </div>
              )}
            </section>

            <section className="panel gap-panel">
              <div className="panel-kicker">Evidence gap</div>
              <h2>ส่วนที่ยังต้องแยกให้ชัด</h2>
              <p>{policy.gap}</p>
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
                      เปิดต้นฉบับ ↗
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <h2>คำค้นที่เกี่ยวข้อง</h2>
              <div className="filters">
                {policy.tags.map((tag) => (
                  <span className="pill" key={tag}>{tag}</span>
                ))}
              </div>
            </section>

            <section className="panel">
              <h2>วิธีอ่านสถานะ</h2>
              <p>
                ป้ายสถานะบอกชนิดของหลักฐานที่พบ เช่น บรรจุในนโยบายรัฐบาล เริ่มดำเนินการ
                หรือมีผลใช้จริง ไม่ใช่คะแนนความสำเร็จ และไม่ใช่คำแนะนำทางการเมือง
              </p>
              <Link className="source-link" href="/methodology">อ่าน Methodology →</Link>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
