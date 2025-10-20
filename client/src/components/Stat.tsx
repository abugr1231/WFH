interface StatProps {
  kpi: string;
  label: string;
}

export default function Stat({ kpi, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight">{kpi}</div>
      <div className="mt-1 text-sm md:text-base text-muted-foreground">{label}</div>
    </div>
  );
}
