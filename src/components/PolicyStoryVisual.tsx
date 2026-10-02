import type { Policy } from '@/data/policies';

function ElectricityVisual() {
  return (
    <section className="policy-story-card">
      <div className="story-head">
        <span className="story-kicker">Price structure</span>
        <h2>คำหาเสียงกับอัตราที่ประกาศใช้</h2>
        <p>เทียบเฉพาะค่าไฟฐานของ 200 หน่วยแรก ไม่ใช่ยอดสุทธิทั้งบิล</p>
      </div>
      <div className="rate-axis">
        <div className="rate-axis-line">
          <span className="rate-tick" style={{ left: '0%' }}>0</span>
          <span className="rate-tick" style={{ left: '25%' }}>1</span>
          <span className="rate-tick" style={{ left: '50%' }}>2</span>
          <span className="rate-tick" style={{ left: '75%' }}>3</span>
          <span className="rate-tick" style={{ left: '100%' }}>4 บาท</span>
          <span className="rate-marker promise" style={{ left: '73%' }}>
            <strong>&lt; 3 บาท</strong><small>คำหาเสียง</small>
          </span>
          <span className="rate-marker actual" style={{ left: '75%' }}>
            <strong>3.0000 บาท</strong><small>ค่าไฟฐานที่ PEA ประกาศ</small>
          </span>
        </div>
      </div>
      <div className="story-note">ยังมีค่าบริการ ค่า Ft และ VAT แยกจากค่าไฟฐาน</div>
    </section>
  );
}

function DisasterVisual() {
  return (
    <section className="policy-story-card">
      <div className="story-head">
        <span className="story-kicker">Coverage compare</span>
        <h2>ความคุ้มครองใกล้กัน แต่โครงงบต่างกัน</h2>
      </div>
      <div className="metric-compare-grid">
        <div className="metric-block">
          <span>หาเสียงไว้</span><strong>100,000 บาท</strong><small>ความคุ้มครองสูงสุดตามคำประกาศ</small>
        </div>
        <div className="metric-arrow">→</div>
        <div className="metric-block action">
          <span>โครงการที่อนุมัติ</span><strong>100,000 บาท</strong><small>สูงสุดต่อหลังคาเรือนต่อภัย</small>
        </div>
      </div>
      <div className="budget-band">
        <div><span>คำหาเสียง</span><strong>1,000 บาท / ครัวเรือน</strong></div>
        <div><span>กรอบค่าเบี้ยที่อนุมัติ</span><strong>15,500 ล้านบาท</strong></div>
      </div>
    </section>
  );
}

function GdpVisual() {
  return (
    <section className="policy-story-card">
      <div className="story-head">
        <span className="story-kicker">Different time windows</span>
        <h2>เป้าระดับปี vs ข้อมูลรายไตรมาส</h2>
        <p>วางบนสเกลเดียวกันเพื่อเห็นขนาดตัวเลข แต่ไม่ใช้ตัดสินเป้าทั้งปี</p>
      </div>
      <div className="gdp-scale">
        <div className="gdp-grid"><span>0%</span><span>1%</span><span>2%</span><span>3%</span><span>4%</span></div>
        <div className="gdp-line">
          <span className="gdp-reference" style={{ left: '75%' }}><b>3%+</b><small>เป้าภาพรวม</small></span>
          <span className="gdp-point" style={{ left: '47.5%' }}><b>1.9%</b><small>Q2/2569 · YoY</small></span>
        </div>
      </div>
      <div className="story-note">ช่วงเวลาไม่เหมือนกัน จึงไม่ควรอ่านเป็นคะแนนว่า “ทำได้กี่เปอร์เซ็นต์ของเป้า”</div>
    </section>
  );
}

function EducationVisual() {
  const rows = [
    ['แพลตฟอร์มเรียนฟรี', false, 'ยังไม่มีหลักฐานตรงในชุดข้อมูล'],
    ['Skill Bridge', true, 'มีโครงการและจำนวนโครงการที่ตรวจได้'],
    ['Learning Passport', false, 'ยังต้องมีหลักฐานแยก'],
  ] as const;

  return (
    <section className="policy-story-card">
      <div className="story-head">
        <span className="story-kicker">Component evidence map</span>
        <h2>นโยบายเดียวมีหลายองค์ประกอบ</h2>
      </div>
      <div className="component-map">
        {rows.map(([label, found, note]) => (
          <div className="component-row" key={label}>
            <div><strong>{label}</strong><small>{note}</small></div>
            <span className={found ? 'component-state found' : 'component-state pending'}>
              {found ? 'มีหลักฐาน' : 'รอหลักฐาน'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WelfareVisual() {
  return (
    <section className="policy-story-card">
      <div className="story-head"><span className="story-kicker">Milestone flow</span><h2>กระบวนการลงทะเบียนปี 2569</h2></div>
      <div className="milestone-flow">
        <div className="milestone-node"><span>17 ก.ค. 2569</span><strong>ประกาศผลผู้ผ่านเกณฑ์</strong></div>
        <div className="milestone-connector">→</div>
        <div className="milestone-node"><span>ช่วงทบทวนสิทธิ</span><strong>ตรวจคุณสมบัติ / ยืนยันตัวตน</strong></div>
        <div className="milestone-connector">→</div>
        <div className="milestone-node action"><span>1 ต.ค. 2569</span><strong>เริ่มสิทธิสำหรับผู้ผ่านคุณสมบัติ</strong></div>
      </div>
    </section>
  );
}

function RehabVisual() {
  return (
    <section className="policy-story-card">
      <div className="story-head"><span className="story-kicker">Implementation path</span><h2>จากเป้าหมาย 878 อำเภอสู่การเตรียมระบบ</h2></div>
      <div className="implementation-flow">
        <div className="flow-node promise"><span>คำหาเสียง</span><strong>878 อำเภอ</strong><small>1 อำเภอ 1 ศูนย์บำบัด</small></div>
        <div className="flow-arrow">→</div>
        <div className="flow-node"><span>8 ก.ค. 2569</span><strong>สธ. กำหนดให้ครอบคลุมทุกอำเภอ</strong><small>ระดับระบบปฐมภูมิ</small></div>
        <div className="flow-arrow">→</div>
        <div className="flow-node"><span>23 ก.ค. 2569</span><strong>มีพื้นที่เตรียมทีม</strong><small>ตัวอย่างหลักฐานจากชุมพร</small></div>
        <div className="flow-arrow">→</div>
        <div className="flow-node pending"><span>ยังต้องตรวจต่อ</span><strong>จำนวนศูนย์ที่เปิดจริงทั่วประเทศ</strong><small>ยังไม่มี count ยืนยันครบ 878</small></div>
      </div>
    </section>
  );
}

function GenericVisual({ policy }: { policy: Policy }) {
  return (
    <section className="policy-story-card">
      <div className="story-head"><span className="story-kicker">Evidence structure</span><h2>โครงหลักฐานของนโยบายนี้</h2></div>
      <div className="generic-evidence-grid">
        <div><span>คำหาเสียง</span><strong>{policy.promisePoints.length}</strong><small>ประเด็นที่บันทึกจากคำประกาศ</small></div>
        <div><span>เหตุการณ์มีวันที่</span><strong>{policy.actionEvidence.length}</strong><small>event ที่เชื่อมกับแหล่งทางการ</small></div>
        <div><span>แหล่งอ้างอิง</span><strong>{policy.sources.length}</strong><small>รวมแหล่งพรรคและแหล่งทางการ</small></div>
      </div>
      <div className="story-note">จำนวนเหล่านี้บอกโครงข้อมูลในฐานเท่านั้น ไม่ใช่คะแนนความสำเร็จของนโยบาย</div>
    </section>
  );
}

export default function PolicyStoryVisual({ policy }: { policy: Policy }) {
  switch (policy.slug) {
    case 'electricity-under-3': return <ElectricityVisual />;
    case 'disaster-fund': return <DisasterVisual />;
    case 'gdp-3-plus': return <GdpVisual />;
    case 'free-education': return <EducationVisual />;
    case 'welfare-card-plus': return <WelfareVisual />;
    case 'district-drug-rehab': return <RehabVisual />;
    default: return <GenericVisual policy={policy} />;
  }
}
