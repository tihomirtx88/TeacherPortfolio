interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black leading-tight text-white">{title}</h2>

      {description && (
        <p className="mt-8 text-lg leading-8 text-slate-400">{description}</p>
      )}
    </div>
  );
}
