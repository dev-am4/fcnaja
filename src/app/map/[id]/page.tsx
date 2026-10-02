import Link from 'next/link';
import { notFound } from 'next/navigation';
import { accuracyLabel, formatBaht, layerMeta, mapPoints } from '@/data/map-points';

export function generateStaticParams() {
  return mapPoints.map((point) => ({ id: point.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const point = mapPoints.find((item) => item.id === id);
  return {
    title: point ? point.title : 'ไม่พบข้อมูล',
    description: point?.subtitle,
  };
}

export default async function MapDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const point = mapPoints.find((item) => item.id === id);
  if (!point) notFound();

  const meta = layerMeta[point.layer];

  return (
    <main className="detail map-detail-page">
      <div className="container">
        <div className="breadcrumb"><Link href="/map">← กลับแผนที่</Link></div>

        <div className={`map-detail-hero layer-${point.layer}`}>
          <span className="map-detail-glyph" aria-hidden="true">{point.count ?? meta.icon}</span>
          <div>
            <span>{meta.label}{point.year ? ` · ${point.year}` : ''}</span>
            <h1>{point.title}</h1>
            <p>{point.subtitle}</p>
          </div>
        </div>

        <div className="map-detail-grid">
          <section className="panel">
            <div className="map-detail-facts">
              {point.amountBaht ? (
                <div className="map-detail-money">
                  <span>วงเงิน</span>
                  <strong>{formatBaht(point.amountBaht)}</strong>
                </div>
              ) : null}
              {point.facts.map((fact) => (
                <div key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <aside className="panel">
            <h2>ตำแหน่งบนแผนที่</h2>
            <p>{accuracyLabel(point.accuracy)}</p>
            <p>{point.note}</p>
          </aside>
        </div>

        <section className="panel map-source-panel">
          <span className="panel-kicker">Source</span>
          <h2>{point.sourceLabel}</h2>
          <a className="source-link" href={point.sourceUrl} target="_blank" rel="noreferrer">
            เปิดข้อมูลต้นทาง ↗
          </a>
        </section>
      </div>
    </main>
  );
}
