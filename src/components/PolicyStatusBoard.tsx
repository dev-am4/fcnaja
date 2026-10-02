'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { policies } from '@/data/policies';
import { getVisualStage, visualStages, type VisualStageKey } from '@/lib/policy-visuals';

type StatusFilter = 'all' | VisualStageKey;

const categoryOptions = ['ทั้งหมด', ...Array.from(new Set(policies.map((policy) => policy.category)))];

function hasOfficialSource(slug: string) {
  const policy = policies.find((item) => item.slug === slug);
  return Boolean(policy?.sources.some((source) =>
    ['กกต.', 'รัฐบาล', 'หน่วยงานรัฐ', 'สถิติทางการ'].includes(source.type)
  ));
}

function hasPartySource(slug: string) {
  const policy = policies.find((item) => item.slug === slug);
  return Boolean(policy?.sources.some((source) => source.type === 'พรรค'));
}

export default function PolicyStatusBoard() {
  const [status, setStatus] = useState<StatusFilter>('all');
  const [category, setCategory] = useState('ทั้งหมด');
  const [query, setQuery] = useState('');

  const statusCounts = useMemo(() => {
    return Object.fromEntries(
      visualStages.map((stage) => [
        stage.key,
        policies.filter((policy) => getVisualStage(policy) === stage.key).length,
      ])
    ) as Record<VisualStageKey, number>;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return policies.filter((policy) => {
      const stage = getVisualStage(policy);
      const statusMatch = status === 'all' || stage === status;
      const categoryMatch = category === 'ทั้งหมด' || policy.category === category;
      const searchMatch = !q || [
        policy.title,
        policy.short,
        policy.promise,
        policy.actionSummary,
        policy.category,
        ...policy.tags,
      ].join(' ').toLowerCase().includes(q);

      return statusMatch && categoryMatch && searchMatch;
    });
  }, [status, category, query]);

  return (
    <section className="status-board-shell" aria-label="สถานะนโยบายทั้งหมด">
      <div className="status-summary-grid">
        {visualStages.map((stage) => (
          <button
            type="button"
            key={stage.key}
            className={`status-summary-card tone-${stage.key} ${status === stage.key ? 'selected' : ''}`}
            onClick={() => setStatus(status === stage.key ? 'all' : stage.key)}
            aria-pressed={status === stage.key}
          >
            <span className="status-summary-icon" aria-hidden="true">{stage.icon}</span>
            <span className="status-summary-copy">
              <strong>{statusCounts[stage.key]}</strong>
              <b>{stage.label}</b>
              <small>{stage.description}</small>
            </span>
          </button>
        ))}
      </div>

      <div className="status-board-toolbar">
        <div className="status-board-search">
          <span aria-hidden="true">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ค้นหานโยบาย เช่น ค่าไฟ, ผู้สูงอายุ, SME"
            aria-label="ค้นหานโยบาย"
          />
        </div>

        <select
          className="status-board-select"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="เลือกหมวดนโยบาย"
        >
          {categoryOptions.map((item) => <option key={item}>{item}</option>)}
        </select>

        <button
          type="button"
          className={`status-board-all ${status === 'all' ? 'active' : ''}`}
          onClick={() => setStatus('all')}
        >
          ทั้งหมด {policies.length}
        </button>
      </div>

      <div className="evidence-key" aria-label="คำอธิบายสัญลักษณ์หลักฐาน">
        <span><i className="e-dot on" /> คำหาเสียงต้นทาง</span>
        <span><i className="e-dot official" /> แหล่งรัฐ/ทางการ</span>
        <span><i className="e-dot dated" /> มีเหตุการณ์ลงวันที่</span>
        <span><i className="e-dot active" /> เริ่มใช้จริง/มีข้อมูลวัดผล</span>
      </div>

      <div className="status-board-resultbar">
        <strong>{filtered.length}</strong>
        <span>นโยบายที่ตรงกับตัวกรอง</span>
      </div>

      <div className="policy-status-grid">
        {filtered.map((policy) => {
          const stageKey = getVisualStage(policy);
          const stage = visualStages.find((item) => item.key === stageKey)!;
          const latestEvent = policy.actionEvidence.at(-1);
          const partySource = hasPartySource(policy.slug);
          const officialSource = hasOfficialSource(policy.slug);
          const datedAction = policy.actionEvidence.length > 0;
          const active = stageKey === 'active-measured';

          return (
            <Link
              href={`/policy/${policy.slug}`}
              key={policy.slug}
              className={`policy-status-card tone-${stageKey}`}
            >
              <div className="policy-status-rail" />

              <div className="policy-status-head">
                <div>
                  <span className="policy-status-category">{policy.category}</span>
                  <h3>{policy.title}</h3>
                </div>
                <div className="policy-status-symbol" aria-hidden="true">{stage.icon}</div>
              </div>

              <div className="policy-status-label">
                <span className="status-shape" aria-hidden="true" />
                <strong>{stage.shortLabel}</strong>
              </div>

              <div className="policy-evidence-track" aria-label="ระดับหลักฐานที่มี">
                <span className={partySource ? 'track-step filled promise' : 'track-step'} title="คำหาเสียงต้นทาง" />
                <span className={officialSource ? 'track-step filled official' : 'track-step'} title="แหล่งรัฐ/ทางการ" />
                <span className={datedAction ? 'track-step filled dated' : 'track-step'} title="มีเหตุการณ์ลงวันที่" />
                <span className={active ? 'track-step filled active' : 'track-step'} title="เริ่มใช้จริง/มีข้อมูลวัดผล" />
              </div>

              <div className="policy-status-mini">
                {latestEvent ? (
                  <>
                    <span>{latestEvent.date}</span>
                    <strong>{latestEvent.title}</strong>
                  </>
                ) : (
                  <>
                    <span>ยังไม่มี event ทางการ</span>
                    <strong>เปิดรายละเอียดเพื่อดูคำหาเสียงและช่องว่างของหลักฐาน</strong>
                  </>
                )}
              </div>

              <div className="policy-status-footer">
                <span>{policy.sources.length} แหล่ง · {policy.actionEvidence.length} เหตุการณ์</span>
                <b>ดูหลักฐาน →</b>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty">ไม่พบนโยบายที่ตรงกับตัวกรองนี้</div>
      )}
    </section>
  );
}
