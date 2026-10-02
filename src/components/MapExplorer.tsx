'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { accuracyLabel, formatBaht, layerMeta, mapPoints, type MapLayer } from '@/data/map-points';

const initialLayers: Record<MapLayer, boolean> = { mp: true, budget: true, project: true };

export default function MapExplorer() {
  const mapNode = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<import('leaflet').Map | null>(null);
  const markerLayer = useRef<import('leaflet').LayerGroup | null>(null);
  const [layers, setLayers] = useState(initialLayers);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visiblePoints = useMemo(
    () => mapPoints.filter((point) => layers[point.layer]),
    [layers]
  );

  const selected = mapPoints.find((point) => point.id === selectedId) ?? null;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!mapNode.current || mapInstance.current) return;
      const L = await import('leaflet');
      if (cancelled || !mapNode.current) return;

      const map = L.map(mapNode.current, {
        center: [13.4, 101],
        zoom: 5,
        zoomControl: false,
        attributionControl: true,
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      markerLayer.current = L.layerGroup().addTo(map);
      mapInstance.current = map;
    }

    init();
    return () => {
      cancelled = true;
      mapInstance.current?.remove();
      mapInstance.current = null;
      markerLayer.current = null;
    };
  }, []);

  useEffect(() => {
    async function redraw() {
      if (!mapInstance.current || !markerLayer.current) return;
      const L = await import('leaflet');
      markerLayer.current.clearLayers();

      visiblePoints.forEach((point) => {
        const meta = layerMeta[point.layer];
        const marker = L.marker([point.lat, point.lng], {
          icon: L.divIcon({
            className: 'map-div-icon',
            html: `<span class="map-marker map-marker-${point.layer}" aria-label="${meta.label}">${point.count ?? meta.icon}</span>`,
            iconSize: [38, 38],
            iconAnchor: [19, 19],
          }),
          title: point.title,
        });

        marker.on('click', () => setSelectedId(point.id));
        marker.bindTooltip(
          `<strong>${point.title}</strong><br/><span>${point.amountBaht ? formatBaht(point.amountBaht) : point.subtitle}</span>`,
          { direction: 'top', offset: [0, -16] }
        );
        marker.addTo(markerLayer.current!);
      });
    }

    redraw();
  }, [visiblePoints]);

  return (
    <div className="map-shell">
      <div className="map-controls">
        {(Object.keys(layerMeta) as MapLayer[]).map((layer) => {
          const meta = layerMeta[layer];
          const count = mapPoints.filter((point) => point.layer === layer).length;
          return (
            <button
              type="button"
              key={layer}
              className={`map-layer-toggle layer-${layer} ${layers[layer] ? 'active' : ''}`}
              onClick={() => setLayers((current) => ({ ...current, [layer]: !current[layer] }))}
              aria-pressed={layers[layer]}
            >
              <i aria-hidden="true" />
              <span>{meta.label}</span>
              <b>{count}</b>
            </button>
          );
        })}
      </div>

      <div className="map-stage">
        <div ref={mapNode} className="map-canvas" />

        <div className={`map-detail-drawer ${selected ? 'open' : ''}`}>
          {selected ? (
            <>
              <button type="button" className="map-drawer-close" onClick={() => setSelectedId(null)} aria-label="ปิด">×</button>
              <span className={`map-detail-type layer-${selected.layer}`}>{layerMeta[selected.layer].label}</span>
              <h2>{selected.title}</h2>
              <p className="map-detail-sub">{selected.subtitle}</p>

              <div className="map-facts">
                {selected.facts.map((fact) => (
                  <div key={fact.label}>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                ))}
              </div>

              <div className="map-accuracy">{accuracyLabel(selected.accuracy)}</div>

              <div className="map-drawer-actions">
                <Link className="map-primary-link" href={`/map/${selected.id}`}>ดูรายละเอียด</Link>
                <a className="map-source-link" href={selected.sourceUrl} target="_blank" rel="noreferrer">ต้นทาง ↗</a>
              </div>
            </>
          ) : (
            <div className="map-drawer-empty">
              <span>แตะหมุด</span>
              <strong>ดูข้อมูลและแหล่งอ้างอิง</strong>
            </div>
          )}
        </div>
      </div>

      <div className="map-legend">
        <span><i className="legend-dot mp" /> สส. / cluster</span>
        <span><i className="legend-dot budget" /> งบประมาณ</span>
        <span><i className="legend-dot project" /> โครงการ</span>
        <span className="map-legend-note">หมุดที่ไม่มีพิกัดต้นทางจะระบุเป็นระดับจังหวัด/ภูมิภาค</span>
      </div>
    </div>
  );
}
