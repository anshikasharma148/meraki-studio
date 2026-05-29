import { useState } from "react";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-white py-20 lg:py-24">
      <RevealGroup className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Subscribe our Newsletter to get latest update and news
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <p className="mt-4 font-sans text-sm leading-relaxed text-gray-500">
            We recommend you subscribe to our newsletter. Enter your email below to
            get our latest updates, news, and promotions.
          </p>
        </ScrollReveal>
        {submitted ? (
          <ScrollReveal delay={200} className="mt-8">
            <p className="font-sans text-brand-dark">
              Thank you for subscribing!
            </p>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={200} className="mt-10">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                required
                className="flex-1 rounded-sm bg-gray-100 px-5 py-4 font-sans text-sm text-gray-700 outline-none focus:ring-2 focus:ring-brand-dark/20"
              />
              <button
                type="submit"
                className="bg-brand-dark px-8 py-4 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-hero"
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        )}
      </RevealGroup>
    </section>
  );
}
