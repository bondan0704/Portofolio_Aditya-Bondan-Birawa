import { NextResponse } from "next/server";

const featureWork = [
  {
    title: "UI/UX Design for Web Application",
    description: "Designed intuitive user experiences through user research, wireframing, prototyping, and high-fidelity UI design, ensuring usability and consistency across web platforms.",
    roles: ["UI/UX Designer", "Product Designer"],
    image: "/images/feature-work/project3.png",
  },
  {
    title: "Visual & Promotional Graphic Design",
    description: "Created engaging visual assets including posters and social media content, maintaining brand consistency while delivering visually compelling marketing materials.",
    roles: ["Graphic Designer", "Visual Designer"],
    image: "/images/feature-work/project2.png",
  },
];

export const GET = async () => {
  return NextResponse.json({
    featureWork,
  });
};
