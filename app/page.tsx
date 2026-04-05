import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { BeautyTipRotator } from "@/components/beauty-tip-rotator";
import { GoogleMapsLogo, InstagramLogo, PhoneLogo, WhatsAppLogo } from "@/components/brand-icons";
import { PhotoSlider } from "@/components/photo-slider";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCarousel } from "@/components/service-carousel";
import { beautyTips, brandStatements, services, siteConfig, workSliderImages } from "@/data/site";

export default function HomePage() {
  return (
    <div className="pb-28">
      <section className="section-shell pt-8 sm:pt-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 space-y-5 lg:order-1">
            <div className="space-y-4">
              <p className="eyebrow">
                <span className="highlight-mark">{siteConfig.legacyLine}</span>
              </p>
              <h1 className="font-display text-[2.35rem] leading-[0.94] text-berry sm:text-6xl lg:text-7xl">
                <span className="hero-highlight">NEW HASU BEAUTY CARE 2.0</span>
              </h1>
              <p className="max-w-2xl text-lg font-semibold leading-7 text-berry sm:text-2xl sm:leading-9">
                Professional beauty care <span className="text-gold">under one roof</span> for hair, skin, nails and bridal styling.
              </p>
              <p className="max-w-2xl text-[0.98rem] leading-7 text-berry/82 sm:text-lg sm:leading-8">
                Trusted hands, refined finishing and direct appointment support.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {brandStatements.slice(0, 2).map((item) => (
                <div key={item} className="rounded-full border border-berry/12 bg-white/85 px-4 py-3 shadow-soft">
                  <p className="text-xs font-semibold text-berry sm:text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:flex sm:flex-row">
              <a href={siteConfig.phoneUrl} className="button-primary gap-2">
                <PhoneLogo className="h-4 w-4" />
                Call for appointment
              </a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary gap-2">
                <WhatsAppLogo className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="button-secondary gap-2">
                <InstagramLogo className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <PhotoSlider items={workSliderImages} compact />
          </div>
        </div>
      </section>

      <section className="section-shell pt-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Services"
            title="Explore signature services for hair, skin, nails, makeup and more."
            description="Everything under one roof, shown in one easy slider."
          />
          <ServiceCarousel services={services} />
        </div>
        <div className="mt-6">
          <AppLink href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-berry">
            View all services
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </section>

      <section className="section-shell pt-20">
        <BeautyTipRotator tips={beautyTips} />
      </section>

      <section className="section-shell pt-20">
        <div className="glass-panel grid gap-6 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8">
          <div className="space-y-4">
            <p className="eyebrow">Appointments</p>
            <h2 className="section-title">
              The fastest way to book is <span className="hero-highlight">Call</span>, <span className="hero-highlight">WhatsApp</span> or <span className="hero-highlight">Instagram</span>.
            </h2>
            <p className="section-copy max-w-none">
              Quick response, direct conversation and easy access to all contact options from one place.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            <a href={siteConfig.phoneUrl} className="button-primary gap-2">
              <PhoneLogo className="h-4 w-4" />
              Call
            </a>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary gap-2">
              <WhatsAppLogo className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="button-secondary gap-2">
              <InstagramLogo className="h-4 w-4" />
              Instagram
            </a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="button-secondary gap-2">
              <GoogleMapsLogo className="h-4 w-4" />
              Maps
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell pt-20">
        <div className="glass-panel flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <p className="eyebrow">Want more?</p>
            <h2 className="font-display text-3xl text-berry sm:text-4xl">Explore the salon story, family legacy and expert team.</h2>
          </div>
          <AppLink href="/about" className="button-secondary gap-2">
            Visit About
            <ArrowRight className="h-4 w-4" />
          </AppLink>
        </div>
      </section>
    </div>
  );
}
