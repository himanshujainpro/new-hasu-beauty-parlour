import Image from "next/image";

type MediaCardProps = {
  type: "image" | "video";
  src: string;
  title: string;
  poster?: string;
  tall?: boolean;
};

export function MediaCard({ type, src, title, poster, tall = false }: MediaCardProps) {
  return (
    <article className={`glass-panel overflow-hidden ${tall ? "md:row-span-2" : ""}`}>
      <div className={`relative ${tall ? "h-[34rem]" : "h-80"}`}>
        {type === "image" ? (
          <Image src={src} alt={title} fill className="object-cover" />
        ) : (
          <video
            src={src}
            poster={poster}
            controls
            playsInline
            muted
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-berry">{title}</p>
      </div>
    </article>
  );
}
