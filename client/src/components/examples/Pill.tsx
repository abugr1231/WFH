import Pill from '../Pill';
import { Target, ShieldCheck } from 'lucide-react';

export default function PillExample() {
  return (
    <div className="flex flex-wrap gap-3 p-6">
      <Pill>
        <Target className="h-4 w-4" /> Patient Aid
      </Pill>
      <Pill>
        <ShieldCheck className="h-4 w-4" /> Research
      </Pill>
    </div>
  );
}
