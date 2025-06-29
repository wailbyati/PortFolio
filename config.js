// Portfolio Configuration
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "John Doe",
        title: "Full Stack Developer",
        description: "Passionate about creating innovative digital solutions and turning ideas into reality through code.",
        email: "john.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        about: [
            "I'm a passionate Full Stack Developer with 5+ years of experience in building web applications and digital solutions. I specialize in modern web technologies and love creating user-friendly, scalable applications that solve real-world problems.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends."
        ],
        stats: [
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "20+", label: "Happy Clients" }
        ]
    },

    // Skills Configuration
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" },
            { name: "Vue.js", icon: "fab fa-vuejs" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Java", icon: "fab fa-java" },
            { name: "SQL", icon: "fas fa-database" },
            { name: "AWS", icon: "fab fa-aws" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Linux", icon: "fab fa-linux" },
            { name: "Cloud", icon: "fas fa-cloud" },
            { name: "Mobile Dev", icon: "fas fa-mobile-alt" }
        ]
    },

    // Projects Configuration
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database.",
            technologies: ["React", "Node.js", "MongoDB"],
            demoLink: "#",
            githubLink: "#",
            icon: "fas fa-shopping-cart"
        },
        {
            title: "Analytics Dashboard",
            description: "Real-time data visualization dashboard with interactive charts and real-time updates.",
            technologies: ["Vue.js", "Python", "D3.js"],
            demoLink: "#",
            githubLink: "#",
            icon: "fas fa-chart-line"
        },
        {
            title: "Task Management App",
            description: "Cross-platform mobile application for team collaboration and project management.",
            technologies: ["React Native", "Firebase", "Redux"],
            demoLink: "#",
            githubLink: "#",
            icon: "fas fa-mobile-alt"
        }
    ],

    // Experience Configuration
    experience: [
        {
            title: "Senior Full Stack Developer",
            company: "TechCorp Inc.",
            period: "2022 - Present",
            description: "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for scalable architecture.",
            achievements: [
                "Developed and maintained 10+ web applications",
                "Reduced application load time by 40%",
                "Mentored 5 junior developers"
            ]
        },
        {
            title: "Full Stack Developer",
            company: "StartupXYZ",
            period: "2020 - 2022",
            description: "Built and deployed multiple web applications from concept to production, working closely with design and product teams.",
            achievements: [
                "Built 15+ web applications",
                "Implemented CI/CD pipelines",
                "Improved user engagement by 60%"
            ]
        },
        {
            title: "Junior Developer",
            company: "WebSolutions",
            period: "2019 - 2020",
            description: "Started my professional journey developing frontend components and learning modern web technologies.",
            achievements: [
                "Developed responsive UI components",
                "Collaborated with senior developers",
                "Learned modern frameworks"
            ]
        }
    ],

    // Social Links
    social: [
        { name: "GitHub", url: "#", icon: "fab fa-github" },
        { name: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
        { name: "Twitter", url: "#", icon: "fab fa-twitter" },
        { name: "Instagram", url: "#", icon: "fab fa-instagram" }
    ],

    // Theme Configuration
    theme: {
        primaryColor: "#2563eb",
        accentColor: "#fbbf24",
        gradientStart: "#667eea",
        gradientEnd: "#764ba2",
        textColor: "#333",
        backgroundColor: "#ffffff"
    },

    // Animation Configuration
    animations: {
        enableTypingEffect: true,
        enableParallax: true,
        enableScrollAnimations: true,
        typingSpeed: 50
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} 