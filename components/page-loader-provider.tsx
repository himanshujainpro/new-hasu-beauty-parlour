"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { beautyTips } from "@/data/site";
import { BeautyLoaderCard } from "@/components/beauty-loader-card";

type PageLoaderContextValue = {
  startLoading: () => void;
};

const PageLoaderContext = createContext<PageLoaderContextValue | null>(null);

export function PageLoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const value = useMemo(
    () => ({
      startLoading: () => setIsLoading(true)
    }),
    []
  );

  return (
    <PageLoaderContext.Provider value={value}>
      {children}
      {isLoading ? (
        <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-berry/12 backdrop-blur-sm">
          <BeautyLoaderCard tips={beautyTips} />
        </div>
      ) : null}
    </PageLoaderContext.Provider>
  );
}

export function usePageLoader() {
  const context = useContext(PageLoaderContext);

  if (!context) {
    throw new Error("usePageLoader must be used within PageLoaderProvider");
  }

  return context;
}
