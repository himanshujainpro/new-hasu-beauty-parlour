"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AppLink } from "@/components/app-link";
import { PhoneLogo } from "@/components/brand-icons";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="section-shell sticky top-0 z-40 pt-4">
      <div className="glass-panel px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <AppLink href="/" className="flex flex-col" onClick={() => setOpen(false)}>
            <span className="font-display text-2xl text-berry sm:text-3xl">{siteConfig.name}</span>
            <span className="text-xs uppercase tracking-[0.3em] text-rose">Beauty care studio</span>
          </AppLink>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <AppLink
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  pathname === item.href ? "bg-berry text-white" : "text-berry/80 hover:bg-white/75"
                )}
              >
                {item.label}
              </AppLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={siteConfig.phoneUrl} className="hidden items-center gap-2 rounded-full bg-berry px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex">
              <PhoneLogo className="h-4 w-4" />
              Call now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="rounded-full border border-berry/10 p-2.5 text-berry lg:hidden"
              onClick={() => setOpen((current) => !current)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="mt-4 grid gap-2 lg:hidden">
            {navItems.map((item) => (
              <AppLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition",
                  pathname === item.href ? "bg-berry text-white" : "bg-white/65 text-berry/80"
                )}
              >
                {item.label}
              </AppLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
