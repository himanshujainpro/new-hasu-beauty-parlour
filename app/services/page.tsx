import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore hair, skin, nail, makeup and advanced salon services from New Hasu Beauty Care."
};

export default function ServicesPage() {
  return (
    <div className="section-shell space-y-10 pb-28 pt-10">
      <SectionHeading
        eyebrow="Service menu"
        title="Hair, skin, nail, makeup and advanced care by trusted experts."
        description="Browse the salon's complete beauty menu in one place."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}
