import { getLatestBrief } from '@/lib/briefs';
import { BriefView } from '@/components/BriefView';

export default function HomePage() {
  const latest = getLatestBrief();
  if (!latest) {
    return (
      <div className="py-20 text-center text-paper-ink-mute">
        <p>No briefs published yet. Check back after the first routine run.</p>
      </div>
    );
  }
  return <BriefView brief={latest} />;
}
