import type { Metadata } from "next";
import { Award } from "lucide-react";
import { ExpertCard } from "@/components/expert-card";
import { SectionHeading } from "@/components/section-heading";
import { aboutStory, achievements, experts } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the NEW HASU BEAUTY CARE 2.0 story, family legacy and expert team."
};

export default function AboutPage() {
  return (
    <div className="section-shell space-y-10 pb-28 pt-10">
      <div className="space-y-5">
        <p className="eyebrow">About us</p>
        <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">
          A <span className="hero-highlight">41+ year legacy</span> of trust, quality work and beauty care under one roof.
        </h1>
        <div className="grid gap-4">
          {aboutStory.map((paragraph) => (
            <p key={paragraph} className="section-copy max-w-none">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <SectionHeading
          eyebrow="Family legacy"
          title="Three generations of beauty trust and specialist care."
          description="Mahendrabhai Valand's 41+ years of beauty expertise now sit alongside Jaimin Valand's modern hair direction and Bhumi Valand's skincare specialization."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {experts.map((expert) => (
            <ExpertCard key={expert.name} expert={expert} />
          ))}
        </div>
      </section>

      <section className="glass-panel space-y-5 p-6 sm:p-8">
        <p className="eyebrow">Why clients trust the brand</p>
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-3xl bg-white/60 p-4">
              <Award className="mt-1 h-5 w-5 text-gold" />
              <p className="text-sm leading-7 text-berry/80">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
