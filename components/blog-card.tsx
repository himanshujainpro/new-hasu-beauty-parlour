import { AppLink } from "@/components/app-link";
import type { BlogPost } from "@/data/site";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="glass-panel prose-card space-y-4 p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose">
          {post.category}
        </span>
        <span className="text-sm text-berry/60">{post.readTime}</span>
      </div>
      <div>
        <h3 className="font-display text-2xl text-berry">{post.title}</h3>
        <p className="mt-3">{post.excerpt}</p>
      </div>
      <AppLink href="/blog" className="text-sm font-semibold text-berry">
        Read article
      </AppLink>
    </article>
  );
}
