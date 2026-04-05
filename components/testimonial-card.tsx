import { PlayCircle } from "lucide-react";
import type { Testimonial } from "@/data/site";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="glass-panel space-y-5 p-6">
      <p className="text-base leading-8 text-berry/80">"{testimonial.quote}"</p>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-berry">{testimonial.name}</h3>
          <p className="text-sm text-rose">{testimonial.service}</p>
        </div>
        {testimonial.videoUrl ? (
          <a
            href={testimonial.videoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-berry/10 px-4 py-2 text-sm font-semibold text-berry"
          >
            <PlayCircle className="h-4 w-4" />
            Video story
          </a>
        ) : null}
      </div>
    </article>
  );
}
