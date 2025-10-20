interface PillProps {
  children: React.ReactNode;
}

export default function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-background/70 backdrop-blur">
      {children}
    </span>
  );
}
