import terrace1 from "../assets/project1/5.jpg";
import terrace2 from "../assets/project1/4.jpg";
import gurugramDining from "../assets/project2/dining-01.jpg";
import gurugramBedroom from "../assets/project2/master-bedroom-bed-side.jpg";
import faridabadExterior from "../assets/project3/Exterior View.jpg";
import faridabadDrawing from "../assets/project3/Drawing room-1.jpg";
import faridabadDrawing2 from "../assets/project3/Drawing room-2.jpg";
import faridabadDining from "../assets/project3/Dining area.jpeg";
import dlfLiving from "../assets/project4/LIVINGROOM-REVISED-4--3109.jpg";
import dlfDining from "../assets/project4/Dining-Revised22.jpg";
import dlfGuest from "../assets/project4/GUEST-ROOM-VIEW-1--REVISED-3109-.jpg";

export const projects = [
  {
    id: "terrace-garden-noida",
    title: "Terrace Garden — Noida",
    category: "Landscape Architecture",
    description:
      "A lush terrace garden transforming outdoor living with thoughtful planting and serene gathering spaces.",
    image: terrace1,
    images: [terrace1, terrace2],
    size: "tall",
  },
  {
    id: "gurugram-sector-50",
    title: "Gurugram Sector-50 — Interior",
    category: "Interior Design",
    description:
      "Refined residential interiors with bespoke detailing, warm materials, and elegant living and dining zones.",
    image: gurugramDining,
    images: [gurugramDining, gurugramBedroom],
    size: "tall",
  },
  {
    id: "sector-2-faridabad",
    title: "Sector-2 Faridabad — Residence",
    category: "Architecture & Interior",
    description:
      "Integrated architecture and interior design for a modern residence—from exterior form to curated interior spaces.",
    image: faridabadExterior,
    images: [faridabadExterior, faridabadDrawing, faridabadDrawing2, faridabadDining],
    featured: true,
    size: "large",
  },
  {
    id: "dlf-gurgram",
    title: "DLF — Gurgram",
    category: "Interior Design",
    description:
      "Luxury interior design across living, dining, and guest suites with a cohesive contemporary aesthetic.",
    image: dlfLiving,
    images: [dlfLiving, dlfDining, dlfGuest],
    size: "wide",
  },
];

/** Flatten project images for masonry — title only on first image per project */
const PORTFOLIO_IMAGE_VARIANTS = ["landscape", "square", "tall", "landscape"];

export function getPortfolioMasonryItems(projectList) {
  return projectList.flatMap((project) =>
    project.images.map((image, index) => ({
      id: `${project.id}-${index}`,
      projectId: project.id,
      image,
      title: index === 0 ? project.title : null,
      variant: PORTFOLIO_IMAGE_VARIANTS[index % PORTFOLIO_IMAGE_VARIANTS.length],
    }))
  );
}

/** Service page — 6 cards with images */
export function getServicePageCards(servicesData) {
  const items = [...servicesData.left, ...servicesData.right];
  return items.map((item, index) => ({
    ...item,
    image: servicesSliderImages[index]?.src,
    alt: servicesSliderImages[index]?.alt ?? item.title,
    description: servicesData.itemDescription,
  }));
}

/** Service page intro + process image pairs */
export const servicePageImages = {
  introMain: gurugramBedroom,
  introSecondary: faridabadDrawing,
  processBack: gurugramDining,
  processFront: faridabadDining,
  testimonialLeft: dlfLiving,
  testimonialRight: gurugramBedroom,
};

/** Center column slider in Services — one image per service item (6 total) */
export const servicesSliderImages = [
  { src: gurugramBedroom, alt: "Home interior design" },
  { src: gurugramDining, alt: "Office interior design" },
  { src: faridabadDining, alt: "Restaurant interior design" },
  { src: faridabadDrawing, alt: "Space planning" },
  { src: dlfLiving, alt: "Furniture solutions" },
  { src: dlfGuest, alt: "Color design" },
];

/** Middle-column slider in Why Choose section */
export const whyChooseSliderImages = [
  { src: gurugramDining, alt: "Commercial interior" },
  { src: faridabadDining, alt: "Restaurant interior" },
  { src: terrace1, alt: "Terrace living space" },
  { src: gurugramBedroom, alt: "Bedroom interior" },
];

/** Testimonials collage — right column */
export const testimonialCollageImages = {
  main: dlfGuest,
  top: gurugramBedroom,
  bottom: faridabadDining,
};

export const landingImages = {
  heroMain: faridabadDrawing2,
  heroSecondary: dlfDining,
  welcomeMain: dlfGuest,
  welcomeSecondary: terrace1,
  servicesCenter: gurugramBedroom,
  whyChooseLeft: faridabadDrawing,
  whyChooseMiddle: gurugramDining,
  whyChooseRight: dlfGuest,
  projectsMedium: faridabadDining,
};
