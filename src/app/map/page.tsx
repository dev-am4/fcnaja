import MapExplorer from '@/components/MapExplorer';
import { mapCoverage } from '@/data/map-points';

export const metadata = {
  title: 'แผนที่ สส. งบประมาณ และโครงการ',
  description: 'แผนที่ข้อมูลพื้นที่ เชื่อม สส. งบประมาณ และโครงการกับแหล่งข้อมูลต้นทาง',
};

export default function MapPage() {
  return (
    <main className="map-page">
      <div className="container map-page-head">
        <div>
          <div className="eyebrow">Area intelligence</div>
          <h1>สส. · งบ · โครงการ</h1>
        </div>

        <div className="map-kpis" aria-label="coverage">
          <div><strong>{mapCoverage.mp.headline}</strong><span>{mapCoverage.mp.label}</span></div>
          <div><strong>{mapCoverage.budget.headline}</strong><span>{mapCoverage.budget.label}</span></div>
          <div><strong>{mapCoverage.project.headline}</strong><span>{mapCoverage.project.label}</span></div>
        </div>
      </div>

      <div className="container">
        <MapExplorer />
      </div>
    </main>
  );
}
