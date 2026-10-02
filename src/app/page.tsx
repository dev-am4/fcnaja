import PolicyExplorer from '@/components/PolicyExplorer';
import { policies } from '@/data/policies';

export default function HomePage() {
  const categories = new Set(policies.map((policy) => policy.category)).size;
  const withTimeline = policies.filter((policy) => policy.timeline.length > 0).length;
  const withAction = policies.filter((policy) => policy.status === 'มีข้อมูลการดำเนินงาน').length;

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Bhumjaithai policy intelligence · 2569</div>
          <h1>นโยบายที่ประกาศไว้<br />หลักฐานไปถึงไหนแล้ว</h1>
          <p className="hero-copy">
            รวมข้อมูลนโยบายพรรคภูมิใจไทยไว้ในหน้าเดียว แล้วแยกให้ชัดว่าอะไรคือคำประกาศของพรรค
            อะไรคือรายละเอียดที่ตรวจจากแหล่งต้นทางได้ และอะไรคือเหตุการณ์การดำเนินงานที่มีวันที่กับหลักฐานอ้างอิง
          </p>

          <div className="hero-meta">
            <span className="pill"><span className="dot" /> อัปเดตฐานข้อมูล: 2 ต.ค. 2569</span>
            <span className="pill">พรรคเดียว · หลักฐานหลายแหล่ง</span>
            <span className="pill">ไม่ให้คะแนน · ไม่จัดอันดับ</span>
          </div>

          <div className="stats" aria-label="ภาพรวมข้อมูล">
            <div className="stat"><strong>{policies.length}</strong><span>นโยบายในหน้ารวมของพรรคที่ถูกจัดเข้าโครงข้อมูล</span></div>
            <div className="stat"><strong>{categories}</strong><span>หมวดเพื่อช่วยอ่านเป็นประเด็นและค้นหาได้เร็วขึ้น</span></div>
            <div className="stat"><strong>{withTimeline}</strong><span>นโยบายที่มีเหตุการณ์ลงวันที่ใน timeline แล้ว</span></div>
            <div className="stat"><strong>{withAction}</strong><span>นโยบายที่มีข้อมูลการดำเนินงานในชุดข้อมูล V1</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="policies">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Explore policies</div>
              <h2 className="section-title">ดูทุกนโยบายในที่เดียว</h2>
              <p className="section-copy">
                ค้นหาด้วยคำธรรมดา หรือเลือกหมวด ทุกการ์ดพาไปหน้ารายละเอียดที่รวมคำประกาศ
                กลไก ตัวเลขที่พรรคระบุ ลำดับเหตุการณ์ และแหล่งต้นฉบับไว้ด้วยกัน
              </p>
            </div>
          </div>
          <PolicyExplorer />
        </div>
      </section>

      <section className="section" id="how-to-read">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Promise vs evidence</div>
              <h2 className="section-title">อ่านโดยไม่ปน “คำประกาศ” กับ “สิ่งที่เกิดขึ้น”</h2>
              <p className="section-copy">
                เว็บใช้สถานะเชิงข้อมูลและ timeline แทนคะแนน เพื่อให้ผู้อ่านเห็นหลักฐานและตัดสินความหมายของข้อมูลด้วยตัวเอง
              </p>
            </div>
          </div>

          <div className="compare-band">
            <div className="compare-side">
              <div className="compare-kicker">01 · Promise</div>
              <h3>พรรคประกาศว่าจะทำอะไร</h3>
              <p>เก็บเป้าหมาย กลุ่มเป้าหมาย กลไก ตัวเลข และถ้อยคำสำคัญจากแหล่งต้นทาง โดยติดป้ายให้ชัดว่าเป็นข้อมูลจากพรรค</p>
              <ul className="compare-list">
                <li><span>✓</span>แสดงตัวเลขเฉพาะที่มีแหล่งต้นฉบับ</li>
                <li><span>✓</span>ไม่เติมรายละเอียดจากการคาดเดา</li>
                <li><span>✓</span>เปิดลิงก์ย้อนกลับไปยังแหล่งที่มาได้</li>
              </ul>
            </div>
            <div className="compare-side">
              <div className="compare-kicker">02 · Evidence</div>
              <h3>จากนั้นดูว่าเกิดเหตุการณ์อะไรขึ้น</h3>
              <p>เมื่อมีมติ ประกาศ งบ กฎ หรือผลลัพธ์ จะเพิ่มเป็น event ใหม่ใน timeline พร้อมวันที่และที่มา ไม่เขียนทับประวัติเดิม</p>
              <ul className="compare-list">
                <li><span>→</span>แยกข่าวพรรคออกจากเอกสารทางการ</li>
                <li><span>→</span>ระบุช่วงเวลาของข้อมูลทุกครั้ง</li>
                <li><span>→</span>เก็บข้อจำกัดของหลักฐานไว้ในหน้าเดียวกัน</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="method">
            <div>
              <div className="eyebrow" style={{ color: '#8fc1a5' }}>Evidence first</div>
              <h2 className="section-title">เว็บนี้ออกแบบให้ตรวจย้อนกลับได้</h2>
              <p>
                หน้าแต่ละนโยบายจะบอกว่าข้อมูลชิ้นนั้นมาจากพรรค กกต. หน่วยงานรัฐ หรือแหล่งภายนอก
                และจะไม่ใช้แหล่งประเภทหนึ่งแทนอีกประเภทหนึ่งโดยไม่บอกผู้อ่าน
              </p>
            </div>
            <div className="method-steps">
              <div className="method-step"><strong>คำประกาศ</strong><p>สิ่งที่พรรคเสนอหรือหาเสียง</p></div>
              <div className="method-step"><strong>หลักฐานทางการ</strong><p>เอกสาร กฎ มติ งบประมาณ และข้อมูลหน่วยงานรัฐ</p></div>
              <div className="method-step"><strong>ผลลัพธ์</strong><p>ตัวชี้วัดจริง พร้อมช่วงเวลา ประชากร และข้อจำกัดของข้อมูล</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
