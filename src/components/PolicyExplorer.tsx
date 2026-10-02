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
        policy.target ?? '',
        policy.mechanism ?? '',
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
          placeholder="ค้นหา เช่น ค่าไฟ, ผู้สูงอายุ, SME, การศึกษา"
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
            <Link key={policy.slug} className="policy-card" href={`/policy/${policy.slug}`}>
              <div className="policy-top">
                <span className="category">{policy.category}</span>
                <span className={`status ${policy.status === 'รอตรวจหลักฐานเพิ่มเติม' ? 'wait' : ''}`}>
                  {policy.status}
                </span>
              </div>
              <h3>{policy.title}</h3>
              <p>{policy.short}</p>
              <div className="card-footer">
                <span>{policy.sources.length} แหล่งอ้างอิง</span>
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
