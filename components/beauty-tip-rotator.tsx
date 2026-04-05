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

export function BeautyTipRotator({ tips }: { tips: string[] }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [tipOrder, setTipOrder] = useState<number[]>(() => tips.map((_, itemIndex) => itemIndex));

  useEffect(() => {
    setTipOrder(shuffleIndices(tips.length));
    setIndex(0);
  }, [tips.length]);

  useEffect(() => {
    const duration = 5200;
    const step = 100;
    setProgress(0);

    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        const next = current + (step / duration) * 100;
        return next > 100 ? 100 : next;
      });
    }, step);

    const changeTimer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % tips.length);
    }, duration);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(changeTimer);
    };
  }, [index, tips.length]);

  const activeTip = tips[tipOrder[index] ?? 0];

  return (
    <div className="glass-panel space-y-5 p-6 sm:p-8">
      <div className="space-y-3">
        <p className="eyebrow">Beauty tips while you browse</p>
        <h3 className="font-display text-3xl text-berry sm:text-4xl">Quick salon guidance for better beauty results.</h3>
        <p className="text-lg leading-8 text-berry/85">{activeTip}</p>
      </div>
      <div className="h-2 rounded-full bg-berry/10">
        <div className="h-full rounded-full bg-gradient-to-r from-rose to-gold transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
