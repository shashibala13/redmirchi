import clsx from "clsx";

interface Props {
  name: string;
  type: string;
  emoji: string;
  bgGradient: string;
  colorBarClass?: string;
  desc?: string;
  badge?: string;
}

export default function FlowerCard({ name, type, emoji, bgGradient, colorBarClass, desc, badge }: Props) {
  return (
    <div className="flower-card group">
      <div className={clsx("flower-card-img bg-gradient-to-br", bgGradient)}>
        <span className="text-5xl transition-transform duration-300 group-hover:scale-110">{emoji}</span>
        {badge && (
          <span className="absolute top-2 right-2 bg-magenta text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      {colorBarClass && <div className={clsx("h-[3px]", colorBarClass)} />}
      <div className="p-3.5 pb-4">
        <h4 className="font-bold text-[14px] text-ink mb-0.5">{name}</h4>
        <span className="text-[11px] text-magenta font-bold uppercase tracking-wider">{type}</span>
        {desc && <p className="text-[12px] text-[#7a6f65] mt-1.5 leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}
