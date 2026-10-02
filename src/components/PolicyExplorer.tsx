'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { categories, policies } from '@/data/policies';

export default function PolicyExplorer() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ทั้งหมด');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return policies.filter((policy) => {
      const categoryMatch = category === 'ทั้งหมด' || policy.category === category;
      const haystack = [
        policy.title,
        policy.short,
        policy.category,
        policy.promise,
        policy.actionSummary,
        policy.actionStatus,
        policy.gap,
        ...policy.promisePoints,
        ...policy.tags,
      ].join(' ').toLowerCase();

      return categoryMatch && (!q || haystack.includes(q));
    });
  }, [query, category]);

  return (
    <div className="explorer">
      <div className="toolbar">
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="ค้นหา เช่น ค่าไฟ, ผู้สูงอายุ, SME, ยาเสพติด"
          aria-label="ค้นหานโยบาย"
        />
        <span className="pill">พบ {filtered.length} นโยบาย</span>
      </div>

      <div className="filters" aria-label="หมวดนโยบาย">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`filter-btn ${category === item ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="policy-grid">
          {filtered.map((policy) => (
            <Link key={policy.slug} className="policy-card policy-card-compare" href={`/policy/${policy.slug}`}>
              <div className="policy-top">
                <span className="category">{policy.category}</span>
                <span className="status neutral">{policy.actionStatus}</span>
              </div>

              <h3>{policy.title}</h3>
              <p className="policy-intro">{policy.short}</p>

              <div className="mini-compare">
                <div className="mini-side">
                  <span className="mini-label">หาเสียงไว้</span>
                  <p>{policy.promise}</p>
                </div>
                <div className="mini-side action">
                  <span className="mini-label">ที่ทำ / หลักฐานล่าสุด</span>
                  <p>{policy.actionSummary}</p>
                </div>
              </div>

              <div className="card-footer">
                <span>{policy.actionEvidence.length} เหตุการณ์ · {policy.sources.length} แหล่ง</span>
                <span className="arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty">ไม่พบนโยบายที่ตรงกับคำค้นหรือหมวดที่เลือก</div>
      )}
    </div>
  );
}
