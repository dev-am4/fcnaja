import Link from 'next/link';
import { policies } from '@/data/policies';
import { getVisualStage, visualStages } from '@/lib/policy-visuals';

export default function PolicyMiniBoard() {
  const counts = Object.fromEntries(
    visualStages.map((stage) => [
      stage.key,
      policies.filter((policy) => getVisualStage(policy) === stage.key).length,
    ])
  );

  return (
    <div className="mini-policy-board">
      <div className="mini-status-strip">
        {visualStages.map((stage) => (
          <div className={`mini-status-item tone-${stage.key}`} key={stage.key}>
            <span className="mini-status-icon" aria-hidden="true">{stage.icon}</span>
            <strong>{counts[stage.key]}</strong>
            <small>{stage.shortLabel}</small>
          </div>
        ))}
      </div>

      <div className="mini-policy-grid">
        {policies.map((policy) => {
          const stageKey = getVisualStage(policy);
          const stage = visualStages.find((item) => item.key === stageKey)!;

          return (
            <Link
              key={policy.slug}
              href={`/policy/${policy.slug}`}
              className={`mini-policy-tile tone-${stageKey}`}
              title={stage.label}
            >
              <span className="mini-policy-status" aria-hidden="true">{stage.icon}</span>
              <strong>{policy.title}</strong>
              <small>{policy.category}</small>
            </Link>
          );
        })}
      </div>

      <Link className="home-section-link" href="/policies">ดูนโยบายทั้งหมด →</Link>
    </div>
  );
}
