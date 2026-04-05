import type { Metadata } from "next";
import { Award, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/data/site";

export const metadata: Metadata = {
  title: "Awards & Achievements",
  description: "View recognitions, expertise highlights and trust-building credentials."
};

export default function AwardsPage() {
  return (
    <div className="section-shell space-y-10 pb-28 pt-10">
      <SectionHeading
        eyebrow="Credentials"
        title="A trust-focused page for salon legacy, skill depth and professional expertise."
        description="Use this area for awards, training certificates, recognitions and the performance highlights that matter to new guests."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item) => (
          <article key={item} className="glass-panel flex gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush">
              <Award className="h-5 w-5 text-gold" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose">
                <BadgeCheck className="h-3.5 w-3.5" />
                Verified highlight
              </div>
              <p className="text-sm leading-7 text-berry/75">{item}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
