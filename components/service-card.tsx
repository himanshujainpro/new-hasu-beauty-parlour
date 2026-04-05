import Image from "next/image";
import { Sparkles } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="glass-panel overflow-hidden">
      <div className="relative h-64">
        <Image src={service.image} alt={service.title} fill className="object-cover transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-berry/40 via-transparent to-white/10" />
        <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-berry shadow-soft">
          {service.category}
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h3 className="font-display text-[2rem] font-semibold leading-tight text-berry">{service.title}</h3>
          <p className="mt-3 text-[0.98rem] leading-8 text-berry/78">{service.description}</p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-blush/75 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-berry">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Signature details
        </div>
        <ul className="grid gap-3 text-sm leading-7 text-berry/80">
          {service.highlights.slice(0, 4).map((item, itemIndex) => (
            <li
              key={item}
              className="relative overflow-hidden rounded-[1.2rem] border border-rose/10 bg-white px-3.5 py-3.5 shadow-[0_10px_28px_rgba(91,45,47,0.06)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blush/45 via-white to-white" />
              <div className="relative flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-berry text-[0.7rem] font-bold text-white">
                  {(itemIndex + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-[0.96rem] font-semibold leading-7 text-berry/92">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
