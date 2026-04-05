import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="instagramGradient" x1="0%" x2="100%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="45%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="url(#instagramGradient)" />
      <circle cx="12" cy="12" r="4.25" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.9" r="1.2" fill="white" />
    </svg>
  );
}

export function WhatsAppLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#25D366"
        d="M12 2a9.8 9.8 0 0 0-8.43 14.83L2 22l5.33-1.53A9.8 9.8 0 1 0 12 2Z"
      />
      <path
        fill="#fff"
        d="M17.52 14.6c-.3-.15-1.78-.88-2.05-.98s-.47-.15-.67.15-.77.98-.94 1.18-.35.22-.65.08a8.08 8.08 0 0 1-2.38-1.47 8.84 8.84 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.63-.92-2.24-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.89 1.23 3.09c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z"
      />
    </svg>
  );
}

export function GoogleMapsLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#34A853" d="M12 2.2a6.9 6.9 0 0 0-6.9 6.9c0 4.7 6.9 12.7 6.9 12.7s6.9-8 6.9-12.7A6.9 6.9 0 0 0 12 2.2Z" />
      <path fill="#4285F4" d="M12 2.2a6.9 6.9 0 0 0-6.9 6.9c0 1.16.43 2.52 1.14 3.95l5.75-5.74V2.2Z" />
      <path fill="#FBBC04" d="m12 21.8 3.7-7.08L12 7.3l-5.76 5.75C8.19 17.2 12 21.8 12 21.8Z" />
      <circle cx="12" cy="9.1" r="2.45" fill="#fff" />
      <circle cx="12" cy="9.1" r="1.1" fill="#EA4335" />
    </svg>
  );
}

export function PhoneLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.11.37 2.3.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5c.55 0 1 .45 1 1 0 1.27.2 2.46.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
      />
    </svg>
  );
}
