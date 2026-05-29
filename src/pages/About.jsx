import PlaceholderPage from "./placeholders/PlaceholderPage";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <PlaceholderPage
      title="Creative Vision. Technical Precision."
      paragraphs={[
        "At Meraki Studio, we believe great design begins with great listening. Founded by a team of architects, interior designers, and landscape specialists, our firm brings decades of combined experience and a unified design philosophy to every project.",
        "We don't just build structures—we shape experiences. From modern urban homes to luxury resorts, from minimalist interiors to lush garden sanctuaries, we design with intention, functionality, and a deep respect for context.",
        "Collaboration: Seamless teamwork across disciplines ensures holistic design. Innovation: Our work blends artistic vision with the latest in design technology.",
      ]}
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Button to="/contact">Meet the Team</Button>
        <Button to="/services">Our Design Process</Button>
      </div>
    </PlaceholderPage>
  );
}
