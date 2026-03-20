"use client";
import { useCountUp } from "@/hooks/useCountUp";

interface Props {
  target: number;
  suffix?: string;
  label: string;
  className?: string;
  numClass?: string;
}

export default function StatCounter({ target, suffix = "", label, className = "", numClass = "" }: Props) {
  const { display, ref } = useCountUp(target, suffix);
  return (
    <div className={className}>
      <span ref={ref} className={`block font-cormorant font-bold leading-none ${numClass}`}>
        {display}
      </span>
      <span className="text-[13px] text-[#ffffff] font-medium mt-1 block">{label}</span>
    </div>
  );
}
