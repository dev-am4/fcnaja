import { lastVerified } from '@/data/policies';

export const metadata = {
  title: 'แหล่งข้อมูลและวิธีตรวจ',
  description: 'หลักการเทียบคำหาเสียงกับการดำเนินงานโดยแยกชนิดของหลักฐานและช่วงเวลา',
};

export default function MethodologyPage() {
  return (
    <main className="detail">
      <div className="container">
        <div className="eyebrow">Methodology · verified {lastVerified}</div>
        <h1>เราเทียบ “หาเสียงไว้” กับ “ที่ทำ” อย่างไร</h1>
        <p className="lede">
          เว็บนี้ไม่ให้คะแนนนโยบาย แต่จัดข้อมูลเป็นชั้นเพื่อให้ผู้อ่านเห็นว่า
          คำหาเสียงเดิมคืออะไร หลังจากนั้นมีมติ แผน โครงการ หรือผลลัพธ์ใดเกิดขึ้น
          และหลักฐานแต่ละชิ้นยืนยันได้แค่ไหน
        </p>

        <div className="detail-grid">
          <div>
            <section className="panel">
              <h2>1. หาเสียงไว้</h2>
              <p>
                ใช้เว็บไซต์ ข่าว และเอกสารของพรรคภูมิใจไทยเพื่อบันทึกคำประกาศเดิม
                รวมถึงตัวเลข กลุ่มเป้าหมาย และกลไกที่พรรคระบุ ข้อมูลชั้นนี้บอกว่า
                “พรรคกล่าวว่าจะทำอะไร” เท่านั้น
              </p>
            </section>

            <section className="panel">
              <h2>2. ที่ทำ / หลักฐานการดำเนินงาน</h2>
              <p>
                ใช้มติและข่าวจากรัฐบาล กระทรวง หน่วยงานรัฐ รัฐวิสาหกิจ และสถิติทางการ
                เพื่อบันทึกเหตุการณ์หลังคำหาเสียง เช่น บรรจุในนโยบายรัฐบาล อนุมัติโครงการ
                เริ่มดำเนินการ หรือเริ่มใช้สิทธิจริง
              </p>
            </section>

            <section className="panel">
              <h2>3. ไม่รวมสถานะที่ต่างกันเข้าด้วยกัน</h2>
              <p>
                “บรรจุในนโยบายรัฐบาล” ไม่เท่ากับ “ดำเนินการแล้ว”,
                “เริ่มดำเนินการ” ไม่เท่ากับ “ทำครบตามเป้าหมาย” และมาตรการที่คล้ายคำหาเสียง
                จะถูกระบุว่าเป็น “มาตรการที่เกี่ยวข้อง” หากรายละเอียดไม่ตรงกันทั้งหมด
              </p>
            </section>

            <section className="panel">
              <h2>4. ตัวเลขต้องตรงช่วงเวลาและนิยาม</h2>
              <p>
                ตัวอย่างเช่น GDP รายไตรมาสไม่ใช้แทนผลทั้งปี และค่าไฟฐาน 3 บาทต่อหน่วย
                ไม่ถูกเขียนว่าเป็นยอดสุทธิในบิล หากยังมีค่า Ft ค่าบริการ หรือ VAT เพิ่มเติม
                การเทียบตัวเลขจึงต้องระบุหน่วย ช่วงเวลา และเงื่อนไข
              </p>
            </section>

            <section className="panel">
              <h2>5. Evidence gap คืออะไร</h2>
              <p>
                ถ้ายังไม่พบหลักฐานตรง เราจะบอกว่า “ยังไม่มีหลักฐานตรงในชุดข้อมูล”
                ไม่ใช้ถ้อยคำว่า “ไม่ได้ทำ” เว้นแต่มีหลักฐานที่ยืนยันสถานะนั้นโดยตรง
                เช่นเดียวกัน ถ้ามีเพียงแผนหรือคำสั่ง เราจะไม่เขียนว่าโครงการเสร็จแล้ว
              </p>
            </section>

            <section className="panel">
              <h2>6. การอัปเดต</h2>
              <p>
                เมื่อมีข้อมูลใหม่ เราจะเพิ่มเหตุการณ์พร้อมวันที่และแหล่งต้นฉบับ
                โดยรักษาข้อมูลเดิมไว้ให้ย้อนตรวจได้ หลักฐานใหม่สามารถทำให้คำอธิบายสถานะเปลี่ยนได้
                แต่ไม่ควรลบประวัติเหตุการณ์เก่าออก
              </p>
            </section>
          </div>

          <aside>
            <section className="panel">
              <h2>ลำดับแหล่งที่ใช้</h2>
              <div className="source-list">
                <div className="source">
                  <div className="source-top"><strong>คำหาเสียง</strong><small>พรรค</small></div>
                  <p>เว็บไซต์และข่าวพรรค ใช้ยืนยันเฉพาะสิ่งที่พรรคประกาศ</p>
                  <a className="source-link" href="https://bhumjaithai.com/policy" target="_blank" rel="noreferrer">
                    เปิดหน้ารวมนโยบาย ↗
                  </a>
                </div>

                <div className="source">
                  <div className="source-top"><strong>ข้อมูลนโยบายที่ใช้เงิน</strong><small>กกต.</small></div>
                  <p>ใช้ตรวจประกอบข้อมูลที่พรรคยื่นต่อสำนักงานคณะกรรมการการเลือกตั้ง</p>
                  <a className="source-link" href="https://www.ect.go.th/ect_th/th/db_119_ect_th_cms_1/7978" target="_blank" rel="noreferrer">
                    เปิดข้อมูล กกต. ↗
                  </a>
                </div>

                <div className="source">
                  <div className="source-top"><strong>การดำเนินงาน</strong><small>รัฐบาล/หน่วยงานรัฐ</small></div>
                  <p>มติรัฐบาล กระทรวง หน่วยงานกำกับ รัฐวิสาหกิจ และเอกสารโครงการ</p>
                  <a className="source-link" href="https://www.thaigov.go.th/" target="_blank" rel="noreferrer">
                    เปิดเว็บไซต์รัฐบาลไทย ↗
                  </a>
                </div>

                <div className="source">
                  <div className="source-top"><strong>ผลลัพธ์เชิงตัวเลข</strong><small>สถิติทางการ</small></div>
                  <p>ใช้ตัวเลขจากหน่วยงานเจ้าของสถิติ พร้อมระบุช่วงเวลาและนิยาม</p>
                  <a className="source-link" href="https://www.nesdc.go.th/" target="_blank" rel="noreferrer">
                    เปิดสภาพัฒน์ ↗
                  </a>
                </div>
              </div>
            </section>

            <section className="panel">
              <h2>ข้อจำกัด</h2>
              <p>
                การไม่มีหลักฐานในฐานข้อมูลนี้ไม่ได้พิสูจน์ว่าไม่มีการดำเนินงาน และข่าวรัฐบาลหรือข่าวพรรค
                เป็นแหล่งข้อมูลจากผู้มีส่วนได้เสีย จึงต้องแยกออกจากสถิติผลลัพธ์หรือการตรวจสอบอิสระเมื่อมีข้อมูลดังกล่าว
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
