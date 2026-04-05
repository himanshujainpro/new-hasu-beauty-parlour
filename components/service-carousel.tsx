"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCarousel({ services }: { services: Service[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % services.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [services.length]);

  return (
    <div className="glass-panel overflow-hidden">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {services.map((service) => (
            <article key={service.title} className="min-w-full">
              <div className="grid lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-berry/40 via-transparent to-white/10" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-berry shadow-soft">
                    {service.category}
                  </div>
                </div>
                <div className="space-y-5 p-6 sm:p-8">
                  <div className="space-y-3">
                    <h3 className="font-display text-[2rem] font-semibold leading-tight text-berry sm:text-[2.4rem]">
                      {service.title}
                    </h3>
                    <p className="text-[1rem] leading-8 text-berry/80">{service.description}</p>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-blush/75 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-berry">
                    <Sparkles className="h-3.5 w-3.5 text-gold" />
                    Signature details
                  </div>
                  <ul className="grid gap-3 text-sm leading-7 text-berry/82">
                    {service.highlights.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="relative overflow-hidden rounded-[1.35rem] border border-rose/10 bg-white px-4 py-4 shadow-[0_12px_34px_rgba(91,45,47,0.08)]"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blush/50 via-white to-white" />
                        <div className="relative flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-berry text-xs font-bold text-white">
                            {(itemIndex + 1).toString().padStart(2, "0")}
                          </span>
                          <span className="text-[0.98rem] font-semibold leading-7 text-berry/92">{item}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="absolute right-4 top-4 flex gap-2 sm:right-5 sm:top-5">
          <button
            type="button"
            aria-label="Previous service"
            onClick={() => setIndex((current) => (current - 1 + services.length) % services.length)}
            className="slider-control"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next service"
            onClick={() => setIndex((current) => (current + 1) % services.length)}
            className="slider-control"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 p-4 sm:p-5">
        {services.map((service, itemIndex) => (
          <button
            key={service.title}
            type="button"
            onClick={() => setIndex(itemIndex)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              itemIndex === index
                ? "bg-berry text-white"
                : "border border-berry/12 bg-white text-berry hover:border-berry/25"
            }`}
          >
            {service.category}
          </button>
        ))}
      </div>
    </div>
  );
}
