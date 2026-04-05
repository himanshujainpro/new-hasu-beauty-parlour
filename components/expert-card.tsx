import type { Expert } from "@/data/site";

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <article className="glass-panel space-y-5 p-6">
      <div>
        <p className="eyebrow">Founder & expert</p>
        <h3 className="font-display text-3xl text-berry">{expert.name}</h3>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">{expert.role}</p>
      </div>
      <p className="text-sm leading-7 text-berry/80">{expert.bio}</p>
      <ul className="grid gap-3 text-sm leading-7 text-berry/75">
        {expert.highlights.map((item) => (
          <li key={item} className="rounded-3xl bg-white/60 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
