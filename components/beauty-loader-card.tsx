"use client";

import { useEffect, useState } from "react";

function shuffleIndices(length: number) {
  const indices = Array.from({ length }, (_, index) => index);

  for (let index = indices.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indices[index], indices[swapIndex]] = [indices[swapIndex], indices[index]];
  }

  return indices;
}

export function BeautyLoaderCard({ tips }: { tips: string[] }) {
  const [tipOrder, setTipOrder] = useState<number[]>(() => tips.map((_, index) => index));
  const [tipIndex, setTipIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTipOrder(shuffleIndices(tips.length));
    setTipIndex(0);
  }, [tips.length]);

  useEffect(() => {
    const duration = 3600;
    const step = 90;
    setProgress(0);

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + (step / duration) * 100;
        return next > 100 ? 100 : next;
      });
    }, step);

    const changeTimer = window.setTimeout(() => {
      setTipIndex((current) => (current + 1) % tips.length);
    }, duration);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(changeTimer);
    };
  }, [tipIndex, tips.length]);

  const activeTip = tips[tipOrder[tipIndex] ?? 0];

  return (
    <div className="glass-panel flex w-full max-w-xl flex-col gap-5 px-7 py-7 sm:px-8">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0">
          <div className="absolute inset-0 rounded-full border-2 border-rose/20" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-rose border-r-gold" />
          <div className="absolute inset-[10px] rounded-full bg-blush" />
        </div>
        <div className="space-y-1">
          <p className="eyebrow">Loading</p>
          <p className="text-base font-semibold text-berry">Preparing your next beauty page...</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose/80">Quick beauty tip</p>
        <p className="text-sm leading-7 text-berry/82 sm:text-base">{activeTip}</p>
      </div>

      <div className="h-2 rounded-full bg-berry/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-rose to-gold transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
