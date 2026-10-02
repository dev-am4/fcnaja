import Link from 'next/link';
import { categoryCounts, evidenceMatrix, latestTimelineEvents, stageCounts } from '@/lib/policy-visuals';

export default function PolicyVisualDashboard() {
  const maxCategory = Math.max(...categoryCounts.map((item) => item.count), 1);

  return (
    <>
      <section className="section visual-section" id="visual-overview">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Visual overview</div>
              <h2 className="section-title">เห็นภาพรวมก่อนอ่านรายละเอียด</h2>
              <p className="section-copy">
                กราฟทั้งหมดด้านล่างแสดงจำนวน หลักฐานที่มี และลำดับเหตุการณ์เท่านั้น
                ไม่ใช่คะแนนความสำเร็จหรือการจัดอันดับนโยบาย
              </p>
            </div>
            <Link className="text-link" href="/timeline">ดู Timeline ทั้งหมด →</Link>
          </div>

          <div className="visual-grid">
            <article className="viz-card viz-wide">
              <div className="viz-head">
                <div>
                  <span className="viz-kicker">Documented stage distribution</span>
                  <h3>นโยบายกระจายอยู่ในสถานะหลักแบบไหน</h3>
                </div>
              </div>

              <div className="stage-bar" aria-label="สัดส่วนสถานะตามหลักฐาน">
                {stageCounts.map((stage) => (
                  <div
                    key={stage.key}
                    className={`stage-segment stage-${stage.key}`}
                    style={{ flexGrow: stage.count }}
                    title={`${stage.label}: ${stage.count} นโยบาย`}
                  >
                    {stage.count > 0 && <span>{stage.count}</span>}
                  </div>
                ))}
              </div>

              <div className="stage-legend">
                {stageCounts.map((stage) => (
                  <div className="stage-legend-item" key={stage.key}>
                    <span className={`legend-swatch stage-${stage.key}`} />
                    <div>
                      <strong>{stage.label}</strong>
                      <small>{stage.count} นโยบาย · {stage.description}</small>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="viz-card">
              <div className="viz-head">
                <div>
                  <span className="viz-kicker">Policy categories</span>
                  <h3>หมวดนโยบายในฐานข้อมูล</h3>
                </div>
              </div>

              <div className="category-bars">
                {categoryCounts.map((item) => (
                  <div className="category-bar-row" key={item.category}>
                    <div className="category-bar-label">
                      <span>{item.category}</span>
                      <strong>{item.count}</strong>
                    </div>
                    <div className="category-bar-track">
                      <span style={{ width: `${(item.count / maxCategory) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="viz-card">
              <div className="viz-head">
                <div>
                  <span className="viz-kicker">Evidence coverage</span>
                  <h3>หลักฐานแต่ละชั้นมีอยู่ตรงไหนบ้าง</h3>
                </div>
              </div>

              <div className="matrix-wrap">
                <table className="evidence-matrix">
                  <thead>
                    <tr>
                      <th>นโยบาย</th>
                      <th>คำหาเสียง</th>
                      <th>แหล่งรัฐ</th>
                      <th>มีวันที่ Action</th>
                      <th>สถิติทางการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evidenceMatrix.map((row) => (
                      <tr key={row.slug}>
                        <td><Link href={`/policy/${row.slug}`}>{row.title}</Link></td>
                        <td><span className={`matrix-dot ${row.promiseSource ? 'on' : 'off'}`} aria-label={row.promiseSource ? 'มี' : 'ยังไม่มี'} /></td>
                        <td><span className={`matrix-dot ${row.officialSource ? 'on' : 'off'}`} aria-label={row.officialSource ? 'มี' : 'ยังไม่มี'} /></td>
                        <td><span className={`matrix-dot ${row.datedAction ? 'on' : 'off'}`} aria-label={row.datedAction ? 'มี' : 'ยังไม่มี'} /></td>
                        <td><span className={`matrix-dot ${row.officialStats ? 'on' : 'off'}`} aria-label={row.officialStats ? 'มี' : 'ยังไม่มี'} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="viz-note">จุดทึบ = มีหลักฐานประเภทนั้นในฐานข้อมูลปัจจุบัน · จุดวง = ยังไม่มีในฐานข้อมูล</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section timeline-preview-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Evidence timeline</div>
              <h2 className="section-title">เหตุการณ์ล่าสุดที่ผูกกับนโยบาย</h2>
              <p className="section-copy">
                เรียงจากวันที่ในเอกสารหรือข่าวทางการ เพื่อให้เห็นว่าหลังคำหาเสียงมีอะไรเกิดขึ้นตามลำดับ
              </p>
            </div>
            <Link className="text-link" href="/timeline">เปิด Timeline เต็ม →</Link>
          </div>

          <div className="timeline-strip">
            {latestTimelineEvents.map((event) => (
              <Link className="timeline-strip-item" href={`/policy/${event.policySlug}`} key={event.policySlug + event.date + event.title}>
                <span className="timeline-strip-date">{event.date}</span>
                <strong>{event.policyTitle}</strong>
                <span>{event.title}</span>
                <small>{event.sourceLabel}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
