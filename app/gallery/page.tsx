import type { Metadata } from "next";
import { InstagramEmbed } from "@/components/instagram-embed";
import { InstagramLogo } from "@/components/brand-icons";
import { PhotoSlider } from "@/components/photo-slider";
import { SectionHeading } from "@/components/section-heading";
import { hairEmbeds, makeupEmbeds, siteConfig, workSliderImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Browse salon work, signature bridal looks, hair transformations and makeup inspirations."
};

export default function GalleryPage() {
  return (
    <div className="section-shell space-y-10 pb-28 pt-10">
      <SectionHeading
        eyebrow="Our work"
        title="Bridal, hair and makeup work that reflects the salon's signature finish."
        description="Explore selected transformations, polished beauty looks and fresh updates from Instagram."
      />

      <PhotoSlider items={workSliderImages} />

      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">Hair samples</p>
            <h2 className="font-display text-4xl text-berry">Featured haircut, styling and hair transformation embeds.</h2>
          </div>
          <a href={siteConfig.founderInstagram} target="_blank" rel="noreferrer" className="button-secondary gap-2">
            <InstagramLogo className="h-4 w-4" />
            Follow for more hair transformations
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hairEmbeds.map((item) => (
            <InstagramEmbed key={item.url} url={item.url} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">Makeup samples</p>
            <h2 className="font-display text-4xl text-berry">Featured makeup looks and bridal finish embeds.</h2>
          </div>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="button-secondary gap-2">
            <InstagramLogo className="h-4 w-4" />
            Follow for more bridal and makeup updates
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {makeupEmbeds.map((item) => (
            <InstagramEmbed key={item.url} url={item.url} />
          ))}
        </div>
      </section>
    </div>
  );
}
