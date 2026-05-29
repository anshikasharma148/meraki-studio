import Layout from "../../components/layout/Layout";
import RevealGroup from "../../components/ui/RevealGroup";
import ScrollReveal from "../../components/ui/ScrollReveal";

export default function PlaceholderPage({ title, paragraphs = [], children }) {
  return (
    <Layout headerVariant="light">
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <RevealGroup>
            <ScrollReveal>
              <h1 className="font-serif text-4xl font-bold text-brand-dark md:text-5xl">
                {title}
              </h1>
            </ScrollReveal>
            <div className="mt-8 space-y-6">
              {paragraphs.map((p, i) => (
                <ScrollReveal key={p.slice(0, 40)} delay={100 + i * 80}>
                  <p className="font-sans text-base leading-relaxed text-gray-600">
                    {p}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </RevealGroup>
          {children}
        </div>
      </section>
    </Layout>
  );
}
