import { NextResponse } from "next/server";

const featureWork = [
  {
    title: "Cegatan Jogja",
    description: "Designed intuitive user experiences through user research, wireframing, prototyping, and high-fidelity UI design, ensuring usability and consistency across web platforms.",
    roles: ["UI/UX Designer", "Product Designer"],
    image: "/images/feature-work/project3.png",
    url: "#"
  },
  {
    title: "Orang Indonesia",
    description: "Created engaging visual assets including posters and social media content, maintaining brand consistency while delivering visually compelling marketing materials.",
    roles: ["Graphic Designer", "Visual Designer"],
    image: "/images/feature-work/project2.png",
    url: "#"
  },
];

export const GET = async () => {
  return NextResponse.json({
    featureWork,
  });
};
