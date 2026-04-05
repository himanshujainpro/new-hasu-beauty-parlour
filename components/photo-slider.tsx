"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MediaItem } from "@/data/site";

export function PhotoSlider({ items, compact = false }: { items: MediaItem[]; compact?: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const activeItem = items[index];

  return (
    <div className="glass-panel overflow-hidden">
      <div className={`relative ${compact ? "h-72 sm:h-[25rem]" : "h-[24rem] sm:h-[30rem]"}`}>
        <Image src={activeItem.src} alt={activeItem.title} fill className="object-cover" priority={index === 0} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div className="space-y-2">
            <p className="eyebrow !text-white/80">Work showcase</p>
            <h3 className={`font-display text-white ${compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"}`}>{activeItem.title}</h3>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous image"
              className="slider-control"
              onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              className="slider-control"
              onClick={() => setIndex((current) => (current + 1) % items.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className={`gap-3 p-4 ${compact ? "hidden sm:grid sm:grid-cols-6" : "grid grid-cols-3 sm:grid-cols-6"}`}>
        {items.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className={`relative overflow-hidden rounded-[1.25rem] border ${
              itemIndex === index ? "border-rose shadow-soft" : "border-berry/10"
            }`}
          >
            <div className="relative h-20">
              <Image src={item.src} alt={item.title} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>
      {compact ? (
        <div className="flex items-center justify-center gap-2 px-4 pb-4 sm:hidden">
          {items.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Go to slide ${itemIndex + 1}`}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 rounded-full transition ${itemIndex === index ? "w-8 bg-berry" : "w-2.5 bg-berry/20"}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
