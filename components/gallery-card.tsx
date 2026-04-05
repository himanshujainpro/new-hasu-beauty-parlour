import Image from "next/image";

export function GalleryCard({ image, title }: { image: string; title: string }) {
  return (
    <figure className="glass-panel overflow-hidden">
      <div className="relative h-72">
        <Image src={image} alt={title} fill className="object-cover transition duration-500 hover:scale-105" />
      </div>
      <figcaption className="p-5 text-sm font-semibold text-berry">{title}</figcaption>
    </figure>
  );
}
