import { AppLink } from "@/components/app-link";
import { GoogleMapsLogo, InstagramLogo, PhoneLogo, WhatsAppLogo } from "@/components/brand-icons";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-shell py-10">
      <div className="glass-panel grid gap-10 px-6 py-8 lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <div className="space-y-4">
          <p className="eyebrow">{siteConfig.name}</p>
          <h2 className="font-display text-3xl text-berry">Trusted beauty expertise with all services under one roof.</h2>
          <p className="max-w-xl text-sm leading-7 text-berry/75">
            Since 1985, NEW HASU BEAUTY CARE has brought together trusted experience, refined beauty work and personal care for every guest.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-rose">Explore</h3>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <AppLink key={item.href} href={item.href} className="text-sm text-berry/75 transition hover:text-berry">
                {item.label}
              </AppLink>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-berry/75">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft">
              <GoogleMapsLogo className="h-6 w-6" />
            </div>
            <span>{siteConfig.locationLabel}</span>
          </div>
          <div className="flex items-start gap-3">
            <PhoneLogo className="mt-0.5 h-4 w-4 text-rose" />
            <span>{siteConfig.phone}</span>
          </div>
          <a href={siteConfig.phoneUrl} className="inline-flex items-center gap-2 text-sm font-semibold text-berry">
            <PhoneLogo className="h-4 w-4" />
            Call for appointment
          </a>
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-berry">
            <WhatsAppLogo className="h-4 w-4" />
            WhatsApp booking
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-berry"
          >
            <InstagramLogo className="h-4 w-4" />
            Follow for fresh looks and beauty updates
          </a>
        </div>
      </div>
    </footer>
  );
}
