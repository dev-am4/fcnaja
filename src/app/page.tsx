import Link from 'next/link';
import PolicyMiniBoard from '@/components/PolicyMiniBoard';
import { lastVerified, policies } from '@/data/policies';
import { mapCoverage } from '@/data/map-points';
import { timelineEvents } from '@/lib/policy-visuals';

export default function HomePage() {
  return (
    <main className="home-visual-first">
      <section className="home-hero">
        <div className="container">
          <div className="eyebrow">BJT Policy Tracker · 2569</div>
          <h1>นโยบาย<br />พื้นที่<br />งบประมาณ</h1>
          <p>ดูภาพรวมก่อน · อ่านหลักฐานเมื่อกดเข้าไป</p>
          <div className="home-update">อัปเดต {lastVerified}</div>
        </div>
      </section>

      <section className="home-gateways">
        <div className="container gateway-grid">
          <Link href="/policies" className="gateway-card">
            <span>01</span>
            <strong>{policies.length}</strong>
            <h2>นโยบาย</h2>
            <i>→</i>
          </Link>

          <Link href="/map" className="gateway-card map-card">
            <span>02</span>
            <strong>{mapCoverage.mp.headline}</strong>
            <h2>แผนที่พื้นที่</h2>
            <i>→</i>
          </Link>

          <Link href="/timeline" className="gateway-card">
            <span>03</span>
            <strong>{timelineEvents.length}</strong>
            <h2>เหตุการณ์</h2>
            <i>→</i>
          </Link>
        </div>
      </section>

      <section className="section home-map-teaser">
        <div className="container">
          <div className="home-section-head">
            <div>
              <span>MAP</span>
              <h2>สส. · งบ · โครงการ</h2>
            </div>
            <Link href="/map">เปิดแผนที่ →</Link>
          </div>

          <Link href="/map" className="map-teaser-card">
            <div className="map-teaser-visual" aria-hidden="true">
              <span className="teaser-pin pin-1">63</span>
              <span className="teaser-pin pin-2">26</span>
              <span className="teaser-pin budget-pin pin-3">฿</span>
              <span className="teaser-pin project-pin pin-4">◆</span>
              <span className="teaser-pin pin-5">31</span>
            </div>

            <div className="map-teaser-stats">
              <div><strong>{mapCoverage.mp.headline}</strong><span>{mapCoverage.mp.label}</span></div>
              <div><strong>{mapCoverage.budget.headline}</strong><span>{mapCoverage.budget.label}</span></div>
              <div><strong>{mapCoverage.project.headline}</strong><span>{mapCoverage.project.label}</span></div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section home-policy-section">
        <div className="container">
          <div className="home-section-head">
            <div>
              <span>POLICIES</span>
              <h2>สถานะทุกนโยบาย</h2>
            </div>
            <Link href="/policies">ดูทั้งหมด →</Link>
          </div>
          <PolicyMiniBoard />
        </div>
      </section>

      <section className="section home-source-strip">
        <div className="container source-strip">
          <span>แหล่งข้อมูล</span>
          <Link href="/methodology">พรรค · กกต. · รัฐบาล · หน่วยงานรัฐ · สถิติทางการ →</Link>
        </div>
      </section>
    </main>
  );
}
