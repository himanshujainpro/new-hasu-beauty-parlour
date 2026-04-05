import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Beauty tips, skincare insights and salon care articles for guests."
};

export default function BlogPage() {
  return (
    <div className="section-shell space-y-10 pb-28 pt-10">
      <SectionHeading
        eyebrow="Salon blog"
        title="Beauty tips, salon care advice and bridal preparation guidance."
        description="Simple reading for guests who want better beauty results and smarter care routines."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
