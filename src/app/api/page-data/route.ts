import { NextResponse } from "next/server";

const experienceData = [
    {
        role: "UI/UX Designer",
        location: "On-site",
        startYear: "March 2025",
        endYear: "July 2025",
        bulletPoints: [
            "Conducted user research and translated insights into user-centered design solutions.",
            "Created wireframes, user flows, and interactive prototypes.",
            "Designed high-fidelity UI aligned with brand and usability principles.",
            "Worked closely with developers to ensure design consistency during implementation.",
        ]
    },
    {
        role: "Graphic Designer",
        location: "Remote",
        startYear: "March 2025",
        endYear: "September 2025",
        bulletPoints: [
            "Designed promotional materials including posters and social media content.",
            "Maintained visual consistency based on brand guidelines.",
            "Utilized Canva and Adobe Illustrator for digital asset creation.",
            "Collaborated with marketing teams to deliver engaging visual campaigns.",
        ]
    },
]

const educationData = [
    {
        date: "September 2022 - Present",
        title: "B.Sc. in Information Systems",
        subtitle: "Universitas Teknologi Digital Indonesia"
    },
    {
        date: "September 2025 - December 2025",
        title: "Frontend Development (ReactJS) MBKM Program",
        subtitle: "Hacktiv8"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay Mobile App", comingSoon: true },
        { name: "Siteflow Page Builder", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};