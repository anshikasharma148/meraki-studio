import { useState } from "react";
import { site } from "../../data/site";
import { pageContainer } from "../../constants/layout";
import RevealGroup from "../ui/RevealGroup";
import ScrollReveal from "../ui/ScrollReveal";

export default function Newsletter() {
  const { title, description, placeholder, button, success } = site.newsletter;
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
    <section className="subscribe-section bg-white py-16 lg:py-20">
      <RevealGroup className={`${pageContainer} max-w-[720px] text-center`}>
        <ScrollReveal>
          <h2 className="subscribe-title">{title}</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="subscribe-text mx-auto mt-5 max-w-[560px]">{description}</p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal delay={180} className="mt-10">
            <p className="subscribe-success">{success}</p>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={180} className="mt-10">
            <form
              onSubmit={handleSubmit}
              className="subscribe-form mx-auto flex max-w-[560px] flex-col gap-3 sm:flex-row sm:items-stretch"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className="subscribe-input flex-1"
              />
              <button type="submit" className="subscribe-button">
                {button}
              </button>
            </form>
          </ScrollReveal>
        )}
      </RevealGroup>
    </section>
  );
}
