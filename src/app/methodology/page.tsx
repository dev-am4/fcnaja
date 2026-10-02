export const metadata = {
  title: 'แหล่งข้อมูลและวิธีตรวจ',
  description: 'หลักการจัดโครงข้อมูลและการแยกคำประกาศออกจากหลักฐานการดำเนินงาน',
};

export default function MethodologyPage() {
  return (
    <main className="detail">
      <div className="container">
        <div className="eyebrow">Methodology</div>
        <h1>แหล่งข้อมูลและวิธีตรวจ</h1>
        <p className="lede">
          หลักของเว็บคือแยก “ใครเป็นผู้กล่าว”, “เอกสารอะไรยืนยัน”, “เหตุการณ์เกิดเมื่อใด”
          และ “ผลลัพธ์วัดจากอะไร” ออกจากกัน เพื่อไม่ให้คำหาเสียงถูกแสดงเหมือนเป็นผลลัพธ์ที่เกิดขึ้นแล้ว
        </p>

        <div className="detail-grid">
          <div>
            <section className="panel">
              <h2>1. คำประกาศของพรรค</h2>
              <p>
                ใช้เว็บไซต์ เอกสาร และข่าวที่พรรคเผยแพร่เพื่อบันทึกว่าพรรคเสนออะไร
                ข้อมูลประเภทนี้จะถูกติดป้ายว่า “พรรค” และไม่ถือเป็นการยืนยันผลลัพธ์โดยอัตโนมัติ
              </p>
            </section>

            <section className="panel">
              <h2>2. เอกสารทางการ</h2>
              <p>
                เมื่อเพิ่มข้อมูลขั้นถัดไป จะตรวจเทียบกับ กกต. มติหรือประกาศของรัฐ
                เอกสารงบประมาณ กฎหมาย กฎระเบียบ และข้อมูลสถิติของหน่วยงานที่เกี่ยวข้อง
                พร้อมเก็บวันที่และ URL ต้นฉบับ
              </p>
            </section>

            <section className="panel">
              <h2>3. สถานะบนเว็บ</h2>
              <p>
                “มีรายละเอียดจากพรรค” หมายถึงเชื่อมรายละเอียดต้นทางแล้ว,
                “มีข้อมูลการดำเนินงาน” หมายถึงมี event หรือข้อมูลเกี่ยวกับการดำเนินงานให้ตรวจต่อ,
                และ “รอตรวจหลักฐานเพิ่มเติม” หมายถึงยังไม่มีรายละเอียดเพียงพอสำหรับการสรุปเชิงข้อเท็จจริง
              </p>
            </section>

            <section className="panel">
              <h2>4. ไม่ใช้คะแนนแทนหลักฐาน</h2>
              <p>
                เว็บไม่ใช้คะแนน ผ่าน/ตก หรือเปอร์เซ็นต์ความสำเร็จเป็นข้อสรุปหลัก
                เพราะการให้น้ำหนักแต่ละองค์ประกอบอาจเปลี่ยนความหมายทางการเมือง
                จึงแสดง timeline ตัวเลข และแหล่งข้อมูลให้ผู้อ่านพิจารณาเอง
              </p>
            </section>

            <section className="panel">
              <h2>5. ประวัติการเปลี่ยนแปลง</h2>
              <p>
                เมื่อมีข้อมูลใหม่ แนวทางที่ตั้งใจใช้คือเพิ่ม event ใหม่ใน timeline
                และรักษาหลักฐานเดิมไว้ เพื่อให้ย้อนดูได้ว่าเหตุการณ์หรือข้อมูลเปลี่ยนเมื่อใด
              </p>
            </section>
          </div>

          <aside>
            <section className="panel">
              <h2>แหล่งตั้งต้น</h2>
              <div className="source-list">
                <div className="source">
                  <div className="source-top"><strong>พรรคภูมิใจไทย · นโยบาย</strong><small>พรรค</small></div>
                  <a className="source-link" href="https://bhumjaithai.com/policy" target="_blank" rel="noreferrer">
                    https://bhumjaithai.com/policy
                  </a>
                </div>
                <div className="source">
                  <div className="source-top"><strong>สำนักงานคณะกรรมการการเลือกตั้ง</strong><small>กกต.</small></div>
                  <a className="source-link" href="https://www.ect.go.th/ect_th/th/db_119_ect_th_cms_1/7978" target="_blank" rel="noreferrer">
                    ข้อมูลนโยบายที่ต้องใช้จ่ายเงินของพรรคการเมือง
                  </a>
                </div>
              </div>
            </section>

            <section className="panel">
              <h2>หลักการอัปเดต</h2>
              <p>
                ตัวเลขหรือข้อกล่าวอ้างใหม่ต้องมีแหล่งที่มา ระบุช่วงเวลา และไม่ใช้ข่าวของผู้มีส่วนได้เสีย
                เป็นแหล่งยืนยันอิสระเพียงแหล่งเดียว
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
