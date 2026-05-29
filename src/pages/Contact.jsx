import PlaceholderPage from "./placeholders/PlaceholderPage";
import Button from "../components/ui/Button";
import { site } from "../data/site";

export default function Contact() {
  return (
    <PlaceholderPage
      title="Let's Build Something Beautiful"
      paragraphs={[
        "Your vision deserves a partner who listens, understands, and delivers. Let's discuss how we can bring your project to life.",
        `Studio Location: ${site.address}`,
        `Email: ${site.email}`,
        `Phone: ${site.phone}`,
        "Based in New Delhi, working globally.",
      ]}
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Button to="/contact">Book a Consultation</Button>
        <a
          href={`mailto:${site.email}`}
          className="inline-block border border-brand-dark px-8 py-3 font-sans text-sm font-medium text-brand-dark transition-colors hover:bg-brand-mint"
        >
          Send an Inquiry
        </a>
      </div>
    </PlaceholderPage>
  );
}
