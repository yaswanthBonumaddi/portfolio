import { godspeed, zero8 } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    dnd,    
    nodejs,
    pricewise,
    react,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: dnd,
        name: "dnd-kit",
        type: "drag & drop",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Godspeed",
        icon: godspeed,
        iconBg: "#accbe1",
        date: "Aug 2023 - Dec 2024",
        points: [
            "Developing and maintaining plugins to extend usage of Godspeed meta framework",
            "Collaborating other developers to create high-quality product.",
            "Implementing plugins of AWS, Nodemailer, Apollo - graphql,excel,kafka, radis, rabitMQ "
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Zero8 dot dev",
        icon: zero8,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];




export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Workout Trainer',
        description: 'Developed a web application that helps user in home workout with animations.',
        link: 'https://github.com/yaswanthBonumaddi/Workout-Trainer-fronend',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Prime video',
        description: 'Created a full-stack prime video replica, enabling users to  engage in watching movies.',
        link: 'https://github.com/yaswanthBonumaddi/prime-video',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Book-Hub',
        description: 'Designed and built a web app for finding and reading books on the market.',
        link: 'https://github.com/yaswanthBonumaddi/book-hub',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Nxt Watch',
        description: 'Built a web app like youtube , allowing users to enjoy watching videos.',
        link: 'https://github.com/yaswanthBonumaddi/NxtWatch',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];