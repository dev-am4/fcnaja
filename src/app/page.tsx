import PolicyExplorer from '@/components/PolicyExplorer';
import { lastVerified, policies } from '@/data/policies';

export default function HomePage() {
  const categories = new Set(policies.map((policy) => policy.category)).size;
  const withEvidence = policies.filter((policy) => policy.actionEvidence.length > 0).length;
  const directImplementation = policies.filter((policy) =>
    ['มีผลใช้กับบิลแล้ว', 'มีโครงการและเริ่มคุ้มครองแล้ว', 'มีโครงการลงทะเบียนปี 2569'].includes(policy.actionStatus)
  ).length;

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Bhumjaithai · Promise vs Action · 2569</div>
          <h1>หาเสียงไว้อะไร<br />แล้วเกิดอะไรขึ้นจริง</h1>
          <p className="hero-copy">
            เทียบคำหาเสียงของพรรคภูมิใจไทยกับมติรัฐบาล การดำเนินงานของหน่วยงานรัฐ
            และตัวชี้วัดทางการ โดยระบุวันที่ แหล่งที่มา และช่องว่างของหลักฐานอย่างชัดเจน
          </p>

          <div className="hero-meta">
            <span className="pill"><span className="dot" /> ตรวจข้อมูลล่าสุด {lastVerified}</span>
            <span className="pill">พรรคเดียว · เทียบทีละนโยบาย</span>
            <span className="pill">ไม่ให้คะแนน · ไม่สรุปผ่าน/ตก</span>
          </div>

          <div className="stats" aria-label="ภาพรวมข้อมูล">
            <div className="stat">
              <strong>{policies.length}</strong>
              <span>นโยบายจากหน้ารวมนโยบายของพรรคที่นำมาเทียบ</span>
            </div>
            <div className="stat">
              <strong>{withEvidence}</strong>
              <span>นโยบายที่มีหลักฐานฝั่งการดำเนินงานหรือมาตรการที่เกี่ยวข้องในชุดข้อมูล</span>
            </div>
            <div className="stat">
              <strong>{directImplementation}</strong>
              <span>รายการที่มีหลักฐานการเริ่มใช้มาตรการ/สิทธิจริงแบบระบุช่วงเวลาได้</span>
            </div>
            <div className="stat">
              <strong>{categories}</strong>
              <span>หมวดนโยบายสำหรับค้นหาและไล่อ่านตามประเด็น</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how-to-read">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">How to read</div>
              <h2 className="section-title">คำหาเสียงกับ “ที่ทำ” ไม่ใช่ข้อมูลชนิดเดียวกัน</h2>
              <p className="section-copy">
                เราแยกข้อเสนอเดิมออกจากมติ แผนงาน การเริ่มใช้จริง และตัวเลขผลลัพธ์
                เพื่อไม่ให้การประกาศนโยบายถูกแสดงเหมือนเป็นผลสำเร็จ และไม่ใช้มาตรการที่คล้ายกันแทนนโยบายเดิมโดยอัตโนมัติ
              </p>
            </div>
          </div>

          <div className="compare-band">
            <div className="compare-side">
              <div className="compare-kicker">01 · หาเสียงไว้</div>
              <h3>บันทึกคำประกาศและตัวเลขเดิม</h3>
              <p>แสดงว่าพรรคเสนออะไร เป้าหมายคือใคร ตัวเลขสำคัญเท่าไร และกลไกที่ประกาศไว้คืออะไร</p>
              <ul className="compare-list">
                <li><span>1</span>ใช้เว็บไซต์/ข่าว/เอกสารของพรรคเป็นแหล่งคำประกาศ</li>
                <li><span>2</span>แยกตัวเลขหาเสียงออกจากตัวเลขที่อนุมัติจริง</li>
                <li><span>3</span>ไม่เติมรายละเอียดที่ต้นทางไม่ได้ระบุ</li>
              </ul>
            </div>

            <div className="compare-side">
              <div className="compare-kicker">02 · ที่ทำ / หลักฐาน</div>
              <h3>แสดงเหตุการณ์ตามวันที่</h3>
              <p>ใช้มติรัฐบาล หน่วยงานรัฐ และสถิติทางการเป็นหลัก แล้วบอกข้อจำกัดว่าแต่ละหลักฐานยืนยันได้แค่ไหน</p>
              <ul className="compare-list">
                <li><span>→</span>“บรรจุในนโยบายรัฐบาล” ไม่เท่ากับ “ดำเนินการแล้ว”</li>
                <li><span>→</span>“เริ่มดำเนินการ” ไม่เท่ากับ “ครบตามเป้าหมาย”</li>
                <li><span>→</span>ตัวชี้วัดรายไตรมาสไม่ใช้แทนผลทั้งปี</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="policies">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Promise vs Action database</div>
              <h2 className="section-title">เทียบครบทีละนโยบาย</h2>
              <p className="section-copy">
                การ์ดทุกใบแสดง “หาเสียงไว้” เทียบกับ “ที่ทำ/หลักฐานล่าสุด” ทันที
                กดเข้าไปดูตัวเลข เหตุการณ์ ช่องว่าง และแหล่งอ้างอิงทั้งหมด
              </p>
            </div>
          </div>
          <PolicyExplorer />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="method">
            <div>
              <div className="eyebrow" style={{ color: '#8fc1a5' }}>Evidence first</div>
              <h2 className="section-title">ตัวอย่างที่ต้องอ่านแบบละเอียด</h2>
              <p>
                “ค่าไฟ 3 บาท” มีผลกับบิลเดือนกันยายน 2569 แล้ว แต่ 3 บาทเป็นอัตราค่าไฟฐาน
                ยังไม่รวมค่าบริการ ค่า Ft และ VAT ส่วน “GDP 3% พลัส” ต้องเทียบกับข้อมูลช่วงเวลาเดียวกัน
                ไม่ควรเอา GDP ไตรมาสเดียวมาตัดสินเป้าหมายทั้งปี
              </p>
            </div>
            <div className="method-steps">
              <div className="method-step"><strong>Promise</strong><p>คำหาเสียงและตัวเลขจากพรรค</p></div>
              <div className="method-step"><strong>Action</strong><p>มติ แผน โครงการ หรือการเริ่มใช้จริงจากหน่วยงานรัฐ</p></div>
              <div className="method-step"><strong>Gap</strong><p>ส่วนที่ยังไม่มีหลักฐานตรง หรือเงื่อนไขจริงต่างจากคำหาเสียง</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
