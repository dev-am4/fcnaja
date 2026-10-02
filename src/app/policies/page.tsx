import PolicyStatusBoard from '@/components/PolicyStatusBoard';
import { policies } from '@/data/policies';

export const metadata = {
  title: 'นโยบายทั้งหมด',
  description: 'สถานะและหลักฐานของนโยบายพรรคภูมิใจไทยทั้งหมดในฐานข้อมูล',
};

export default function PoliciesPage() {
  return (
    <main className="detail compact-index-page">
      <div className="container">
        <div className="eyebrow">All policies</div>
        <h1>นโยบาย {policies.length}</h1>
        <PolicyStatusBoard />
      </div>
    </main>
  );
}
