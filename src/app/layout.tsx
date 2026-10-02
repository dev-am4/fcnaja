import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BJT Policy Tracker',
    template: '%s | BJT Policy Tracker',
  },
  description: 'ฐานข้อมูลอ่านง่ายสำหรับติดตามคำประกาศนโยบาย แหล่งอ้างอิง และเหตุการณ์ที่เกี่ยวข้องกับนโยบายของพรรคภูมิใจไทย',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link className="brand" href="/">
              <span className="brand-mark">BJT</span>
              <span className="brand-copy">
                <strong>Policy Tracker</strong>
                <small>ภูมิใจไทย · ข้อมูลและหลักฐาน</small>
              </span>
            </Link>
            <nav className="nav-links" aria-label="เมนูหลัก">
              <Link href="/#policies">นโยบาย</Link>
              <Link href="/#how-to-read">วิธีอ่าน</Link>
              <Link href="/methodology">แหล่งข้อมูล</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <strong>BJT Policy Tracker</strong>
              <p>โครงการรวบรวมข้อมูลสาธารณะเพื่อช่วยให้ผู้อ่านเห็นคำประกาศ แหล่งข้อมูล และลำดับเหตุการณ์แยกออกจากกัน</p>
            </div>
            <p>ไม่ใช่เว็บไซต์ทางการของพรรคภูมิใจไทย และไม่ให้คะแนนหรือแนะนำการตัดสินใจทางการเมือง</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
