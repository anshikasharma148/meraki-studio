import { Link } from "react-router-dom";
import Button from "../ui/Button";
import ImageReveal from "../ui/ImageReveal";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";
import { blogPosts } from "../../data/blog";

export default function Blog() {
  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const others = blogPosts.filter((p) => !p.featured);

  return (
    <section className="bg-white py-20 lg:py-28">
      <RevealGroup className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <ImageReveal
              src={featured.image}
              alt={featured.title}
              className="w-full"
            />
            <ScrollReveal delay={120}>
              <p className="mt-4 font-sans text-xs uppercase tracking-widest text-gray-400">
                {featured.date} | BY — {featured.author}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <h3 className="mt-3 font-serif text-2xl font-bold text-brand-dark">
                {featured.title}
              </h3>
            </ScrollReveal>
            <ScrollReveal delay={280}>
              <p className="mt-3 font-sans text-sm leading-relaxed text-gray-500">
                {featured.excerpt}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={360}>
              <Link
                to="/blog"
                className="mt-4 inline-block font-sans text-sm text-gray-500 hover:text-brand-dark"
              >
                Read more →
              </Link>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal>
              <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
                Latest Post from our Blog
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="mt-6 font-sans text-sm leading-relaxed text-gray-500">
                Stay updated with design trends, behind-the-scenes project stories,
                tips on sustainable living, and expert insights from our studio.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="mt-8">
              <Button to="/blog">View all</Button>
            </ScrollReveal>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {others.map((post, i) => (
                <Link key={post.id} to="/blog" className="group">
                  <ImageReveal
                    src={post.image}
                    alt={post.title}
                    className="h-36 w-full transition-opacity group-hover:opacity-90"
                    delay={100 + i * 100}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}
