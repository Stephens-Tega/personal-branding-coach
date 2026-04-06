export type ProofCategory = "credential" | "testimonial";

export interface ProofItem {
  id: string;
  category: ProofCategory;
  label: string;
  title: string;
  subtitle: string;
  meta?: string;
  description: string;
  imageSrc: string;
  width: number;
  height: number;
}

export const proofCredentials: ProofItem[] = [
  {
    id: "mini-mba",
    category: "credential",
    label: "Credential 01",
    title: "Mini MBA Cohort 1 Completion",
    subtitle: "BHC Consulting",
    meta: "Certificate of Completion",
    description:
      "Recognition for successfully completing the Mini MBA Cohort 1 program.",
    imageSrc: "/images/proof/credential-mini-mba.jpeg",
    width: 1080,
    height: 769,
  },
  {
    id: "coca",
    category: "credential",
    label: "Credential 02",
    title: "Certified Organizational Change Agent",
    subtitle: "Global Reach Leadership Institute",
    meta: "April 1, 2023",
    description:
      "Awarded the COCA designation as a consultant, leadership coach, and trainer.",
    imageSrc: "/images/proof/credential-coca.jpeg",
    width: 720,
    height: 566,
  },
  {
    id: "global-purpose-crusader",
    category: "credential",
    label: "Credential 03",
    title: "Global Purpose Crusaders Certification",
    subtitle: "Mike Oladipo Global Influence",
    meta: "Purpose Crusaders Program",
    description:
      "Training and certification to coach, guide, and mentor the next generation in purpose.",
    imageSrc: "/images/proof/credential-global-purpose-crusader.jpeg",
    width: 752,
    height: 1080,
  },
] as const;

export const proofTestimonials: ProofItem[] = [
  {
    id: "omidiora-oluwakemi",
    category: "testimonial",
    label: "Testimonial 01",
    title: "Brand clarity that ended burnout",
    subtitle: "Omidiora Oluwakemi",
    meta: "Purpose Coach for Stay-at-Home Moms",
    description:
      "A story of discovering the brand within, finding the right audience, and building with confidence.",
    imageSrc: "/images/testimonial-1.jpg",
    width: 707,
    height: 1000,
  },
  {
    id: "comfort-likando",
    category: "testimonial",
    label: "Testimonial 02",
    title: "From hidden title to clear message",
    subtitle: "Comfort N. Likando",
    meta: "Confidence & Healing Coach, Zambia",
    description:
      "A transformation from uncertainty to voice, clarity, and confidence rooted in purpose.",
    imageSrc: "/images/testimonial-2.jpg",
    width: 707,
    height: 1000,
  },
  {
    id: "boingotlo-ndluma",
    category: "testimonial",
    label: "Testimonial 03",
    title: "From overwhelm to clarity and direction",
    subtitle: "Boingotlo Ndluma",
    meta: "South Africa",
    description:
      "A journey from feeling lost to discovering clarity, confidence, and the right audience.",
    imageSrc: "/images/testimonial-3.jpg",
    width: 707,
    height: 1000,
  },
  {
    id: "deborah-ikediashi",
    category: "testimonial",
    label: "Testimonial 04",
    title: "Protecting message through purposeful brand story",
    subtitle: "Deborah Ikediashi",
    meta: "The Wholeness Coach, Nigeria",
    description:
      "An example of learning to anchor visibility in purpose and build from a meaningful story.",
    imageSrc: "/images/testimonial-4.jpg",
    width: 707,
    height: 1000,
  },
] as const;

export const proofPreviewItems: ProofItem[] = [
  proofCredentials[0],
  proofCredentials[1],
  proofTestimonials[0],
  proofTestimonials[1],
];
