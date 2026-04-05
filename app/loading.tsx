import { BeautyLoaderCard } from "@/components/beauty-loader-card";
import { beautyTips } from "@/data/site";

export default function Loading() {
  return (
    <div className="section-shell flex min-h-[60vh] items-center justify-center">
      <BeautyLoaderCard tips={beautyTips} />
    </div>
  );
}
