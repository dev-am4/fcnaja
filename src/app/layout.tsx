import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import 'leaflet/dist/leaflet.css';

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
              <Link href="/policies">นโยบาย</Link>
              <Link href="/map">แผนที่</Link>
              <Link href="/timeline">Timeline</Link>
              <Link href="/methodology">แหล่งข้อมูล</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footer-compact">
            <strong>BJT Policy Tracker</strong>
            <span>ข้อมูลสาธารณะ · ไม่ใช่เว็บไซต์ทางการของพรรค</span>
            <Link href="/methodology">วิธีตรวจข้อมูล →</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
