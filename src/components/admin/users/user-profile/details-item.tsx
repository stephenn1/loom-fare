"use client";

interface DetailsItemProps {
  value: string | number;
  icon: React.ReactNode;
  label?: string;
}

export default function DetailsItem({ value, icon, label }: DetailsItemProps) {
  return (
    <div className="grid gap-2">
      {label && <label className="text-sm font text-gray-400">{label}</label>}
      <div className="grid gap-3 py-3 grid-cols-[auto_1fr] px-5 bg-primary bg-opacity-5 border border-gray-300 rounded-lg items-center">
        <span className="text-gray-400 text-xl">{icon}</span>
        <p>{value}</p>
      </div>
    </div>
  );
}
