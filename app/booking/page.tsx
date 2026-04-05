import type { Metadata } from "next";
import { MapPinned } from "lucide-react";
import { GoogleMapsLogo, PhoneLogo, WhatsAppLogo } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Booking",
  description: "Book salon appointments by call or WhatsApp."
};

export default function BookingPage() {
  return (
    <div className="section-shell space-y-8 pb-28 pt-10">
      <SectionHeading
        eyebrow="Appointments"
        title="Book appointments only by call or WhatsApp."
        description="Direct contact keeps booking quick, personal and easy."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel space-y-5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush">
            <PhoneLogo className="h-5 w-5 text-rose" />
          </div>
          <div>
            <h2 className="font-display text-4xl text-berry">Call the salon</h2>
            <p className="mt-2 text-sm leading-7 text-berry/75">
              Best for fast confirmation, service questions and same-day availability.
            </p>
          </div>
          <a href={siteConfig.phoneUrl} className="button-primary gap-2">
            <PhoneLogo className="h-4 w-4" />
            Call {siteConfig.phone}
          </a>
        </article>

        <article className="glass-panel space-y-5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush">
            <WhatsAppLogo className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-4xl text-berry">Book on WhatsApp</h2>
            <p className="mt-2 text-sm leading-7 text-berry/75">
              Best for sharing your preferred service, timing and inspiration photos in one conversation.
            </p>
          </div>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary gap-2">
            <WhatsAppLogo className="h-4 w-4" />
            WhatsApp {siteConfig.whatsappLabel}
          </a>
        </article>
      </div>

      <div className="glass-panel grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <p className="eyebrow">Appointment notes</p>
          <h3 className="font-display text-4xl text-berry">Manual confirmation keeps the experience personal.</h3>
          <p className="text-sm leading-7 text-berry/75">{siteConfig.hours}</p>
        </div>
        <ul className="grid gap-3 text-sm leading-7 text-berry/75">
          <li>Call or WhatsApp with the service you want and your preferred time.</li>
          <li>The salon can confirm availability directly and guide you on any preparation needed.</li>
          <li>Use the Google Maps link below for live branch directions.</li>
          <li>No online payment or long booking form is required at this stage.</li>
        </ul>
      </div>

      <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="glass-panel flex items-center justify-between gap-4 p-6">
        <div>
          <p className="eyebrow">Location</p>
          <h3 className="font-display text-3xl text-berry">Open Google Maps for the exact branch location.</h3>
        </div>
        <div className="flex items-center gap-3">
          <GoogleMapsLogo className="h-7 w-7" />
          <MapPinned className="h-6 w-6 text-rose" />
        </div>
      </a>
    </div>
  );
}
