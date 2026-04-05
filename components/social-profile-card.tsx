import { ArrowUpRight } from "lucide-react";
import { InstagramLogo } from "@/components/brand-icons";
import type { SocialProfile } from "@/data/site";

export function SocialProfileCard({ profile }: { profile: SocialProfile }) {
  return (
    <article className="glass-panel space-y-5 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush">
          <InstagramLogo className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-display text-3xl text-berry">{profile.title}</h3>
          <p className="text-sm font-semibold text-rose">{profile.handle}</p>
        </div>
      </div>
      <p className="text-sm leading-7 text-berry/75">{profile.description}</p>
      <a
        href={profile.href}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-berry/10 px-4 py-2 text-sm font-semibold text-berry"
      >
        {profile.cta}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );
}
