"use client";

import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  name: string;
  type: string;
  emoji: string;
  bgGradient: string;
  colorBarClass?: string;
  desc?: string;
  badge?: string;
  /** Optional real photo. Upload to public/images/catalogue/ e.g. "/images/catalogue/orange-joy-pot-lily.jpg"
   *  Emoji shows as fallback when image is not yet uploaded or fails to load. */
  image?: string;
}

export default function FlowerCard({ name, type, emoji, bgGradient, colorBarClass, desc, badge, image }: Props) {
  const [imgFailed, setImgFailed] = useState(false);

  const showImage = image && !imgFailed;

  return (
    <div className="flower-card group">
      <div className={clsx("flower-card-img bg-gradient-to-br relative overflow-hidden", bgGradient)}>

        {/* Real photo */}
        {showImage && (
          <Image
            src={image}
            alt={`${name} — Red Mirchi Associates`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Emoji fallback — shown when no image prop, image not yet uploaded, or load fails */}
        <span className={clsx(
          "text-5xl transition-transform duration-300 group-hover:scale-110 relative z-10",
          showImage && "opacity-0"
        )}>
          {emoji}
        </span>

        {badge && (
          <span className="absolute top-2 right-2 bg-magenta text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">
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
