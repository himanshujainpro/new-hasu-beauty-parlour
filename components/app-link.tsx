"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { usePageLoader } from "@/components/page-loader-provider";

type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
  };

export function AppLink({ children, onClick, ...props }: AppLinkProps) {
  const { startLoading } = usePageLoader();

  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          startLoading();
        }
      }}
    >
      {children}
    </Link>
  );
}
