import { PhoneLogo, WhatsAppLogo } from "@/components/brand-icons";
import { siteConfig } from "@/data/site";

export function StickyActions() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 sm:bottom-6">
      <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-berry/10 bg-white/95 p-2 shadow-soft backdrop-blur">
        <a href={siteConfig.phoneUrl} className="button-primary flex-1 gap-2">
          <PhoneLogo className="h-4 w-4" />
          Call now
        </a>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="button-secondary flex-1 gap-2"
        >
          <WhatsAppLogo className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
