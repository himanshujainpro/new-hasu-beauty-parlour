"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[src="https://www.instagram.com/embed.js"]');

    if (existingScript) {
      window.instgrm?.Embeds?.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds?.process();
    document.body.appendChild(script);
  }, []);

  return (
    <div className="instagram-shell glass-panel overflow-hidden p-3">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-captioned
        style={{
          background: "#FFFFFF",
          border: 0,
          borderRadius: "12px",
          margin: 0,
          maxWidth: "540px",
          minWidth: "100%",
          padding: 0,
          width: "100%"
        }}
      />
    </div>
  );
}
