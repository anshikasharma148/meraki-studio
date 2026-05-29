import PlaceholderPage from "./placeholders/PlaceholderPage";
import Button from "../components/ui/Button";

export default function ServicesPage() {
  return (
    <PlaceholderPage
      title="From Concept to Completion"
      paragraphs={[
        "We offer a full suite of design services, ensuring that architecture, interiors, and landscapes are cohesively envisioned and expertly delivered.",
        "Architecture — From custom homes to commercial spaces, we design architecture that balances form and function. Every project is rooted in context and crafted with precision.",
        "Interior Design — We design interiors that tell your story. Our spaces are elegant, livable, and tailored to your lifestyle or brand identity.",
        "Landscape Architecture — We transform outdoor spaces into environments that inspire—from private gardens to large-scale masterplans.",
      ]}
    >
      <div className="mt-10">
        <Button to="/contact">Request a Custom Proposal</Button>
      </div>
    </PlaceholderPage>
  );
}
