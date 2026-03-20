import clsx from "clsx";

interface Props {
  tag?: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({ tag, title, desc, center = false, light = false }: Props) {
  return (
    <div className={clsx("mb-10", center && "text-center")}>
      {tag && (
        <div className={clsx("section-tag mb-2", center && "justify-center", light && "text-gold-light [&::before]:opacity-40 [&::after]:opacity-40")}>
          {tag}
        </div>
      )}
      <h2 className={clsx("section-title-serif mb-3", light && "text-white")}>{title}</h2>
      {desc && (
        <p className={clsx("text-[15px] leading-relaxed max-w-xl", center && "mx-auto", light ? "text-white/65" : "text-[#4a3f35]")}>
          {desc}
        </p>
      )}
    </div>
  );
}
