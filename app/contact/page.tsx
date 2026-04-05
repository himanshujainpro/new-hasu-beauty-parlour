import type { Metadata } from "next";
import { GoogleMapsLogo, InstagramLogo, PhoneLogo, WhatsAppLogo } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { branches, reviewUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach NEW HASU BEAUTY CARE 2.0 through phone, WhatsApp, Instagram or Google Maps."
};

export default function ContactPage() {
  return (
    <div className="section-shell space-y-10 pb-28 pt-10">
      <SectionHeading
        eyebrow="Contact"
        title="Call, chat, follow or get directions in seconds."
        description="Choose the fastest way to reach the salon."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <a href={siteConfig.phoneUrl} className="glass-panel space-y-4 p-6 transition hover:-translate-y-1">
          <PhoneLogo className="h-8 w-8 text-rose" />
          <h2 className="font-display text-3xl text-berry">Call</h2>
          <p className="text-sm leading-7 text-berry/75">Direct call for quick appointment confirmation and service questions.</p>
          <p className="text-sm font-semibold text-berry">{siteConfig.phone}</p>
        </a>

        <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="glass-panel space-y-4 p-6 transition hover:-translate-y-1">
          <WhatsAppLogo className="h-8 w-8" />
          <h2 className="font-display text-3xl text-berry">WhatsApp</h2>
          <p className="text-sm leading-7 text-berry/75">Share your preferred service, time and beauty references in one chat.</p>
          <p className="text-sm font-semibold text-berry">{siteConfig.whatsappLabel}</p>
        </a>

        <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="glass-panel space-y-4 p-6 transition hover:-translate-y-1">
          <InstagramLogo className="h-8 w-8" />
          <h2 className="font-display text-3xl text-berry">Instagram</h2>
          <p className="text-sm leading-7 text-berry/75">See more work, recent updates and direct message the salon profile.</p>
          <p className="text-sm font-semibold text-berry">@new_hasu_beauty_care</p>
        </a>

        <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="glass-panel space-y-4 p-6 transition hover:-translate-y-1">
          <GoogleMapsLogo className="h-8 w-8" />
          <h2 className="font-display text-3xl text-berry">Google Maps</h2>
          <p className="text-sm leading-7 text-berry/75">Open the exact salon location directly in Google Maps on desktop or mobile.</p>
          <p className="text-sm font-semibold text-berry">Get directions</p>
        </a>
      </div>

      <div className="glass-panel space-y-5 p-6 sm:p-8">
        <p className="eyebrow">Our Branches</p>
        <div className="grid gap-5 md:grid-cols-2">
          {branches.map((branch) => (
            <div key={branch.name} className="rounded-[1.75rem] bg-white/70 p-5">
              <h2 className="font-display text-3xl text-berry">{branch.name}</h2>
              <p className="mt-2 text-sm font-semibold text-rose">{branch.availability}</p>
              <p className="mt-3 text-sm leading-7 text-berry/80">{branch.address}</p>
              <a href={branch.mapsUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-berry">
                <GoogleMapsLogo className="h-4 w-4" />
                Open branch in Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-panel flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div className="space-y-2">
          <p className="eyebrow">Review us</p>
          <h2 className="font-display text-3xl text-berry sm:text-4xl">Enjoyed the service? Leave a review on Google Maps.</h2>
        </div>
        <a href={reviewUrl} target="_blank" rel="noreferrer" className="button-secondary gap-2">
          <GoogleMapsLogo className="h-4 w-4" />
          Review on Google Maps
        </a>
      </div>
    </div>
  );
}
