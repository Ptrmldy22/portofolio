// Edit semua konten di file ini. Teks bertanda [ISI] perlu kamu lengkapi.
export const profile = {
  name: "Putri Maulidya",
  roles: ["UI/UX Designer", "Front-End Developer", "Mobile Developer"],
  intro:
    "Informatics Engineering student at PENS who loves turning ideas into intuitive, user-centered digital products, from wireframes in Figma to working apps in Flutter and the web.",
  about:
    "I'm a Diploma IV Informatics Engineering student at the Electronic Engineering Polytechnic Institute of Surabaya (PENS), with a primary interest in UI/UX design. I'm familiar with wireframing, prototyping, and usability testing, and I enjoy bringing designs to life with HTML, CSS, JavaScript, and Flutter. Beyond the classroom, I've coordinated media and publication teams in campus organizations, which taught me how to collaborate, communicate, and deliver on deadlines.",
  email: "maulidyap67@gmail.com",
  location: "Surabaya, Indonesia",
  cvUrl: "/cv-putri-maulidya.pdf", // taruh file CV di folder public/
  // [ISI] ganti dengan link aslimu
  socials: {
    github: "https://github.com/Ptrmldy22/",
    linkedin: "https://linkedin.com/in/putri-maulidya-1b2b6937a",
    instagram: "https://instagram.com/ptrmldy22/",
  },
  // Daftarkan key gratis 
  // di web3forms.com lalu tempel di sini
  web3formsKey: "9e017108-92aa-4b84-ad46-6915de94ef29",
};


export const skills = [
  { name: "Figma", category: "UI/UX Design", level: "Advanced" },
  { name: "Wireframing & Prototyping", category: "UI/UX Design", level: "Advanced" },
  { name: "HTML, CSS, JavaScript", category: "Front-End", level: "Intermediate" },
  { name: "Flutter & Dart", category: "Mobile", level: "Intermediate" },
  { name: "PHP", category: "Back-End", level: "Intermediate" },
  { name: "MySQL / PostgreSQL", category: "Database", level: "Intermediate" },
  { name: "Python", category: "Programming", level: "Intermediate" },
  { name: "Git & GitHub", category: "Tools", level: "Intermediate" },
];

export const otherTools = [
  "Canva", "Adobe Photoshop", "Postman", "VS Code", "C#", "User Research", "Usability Testing",
];

// [ISI] lengkapi deskripsi, tech, image (taruh di public/projects/), dan link
export const projects = [
  {
    title: "TBC Finder ",
    description: "TB Finder is a mobile application designed to help the public improve their understanding of Tuberculosis (TB), support early detection, and access nearby healthcare facilities in Surabaya.\n\nThe application offers three main features: TB Education, which provides information about TB, its symptoms, and prevention methods; Early Detection, which helps users identify potential TB symptoms through a symptom-based expert system; and Healthcare Facility Maps, which allows users to find nearby hospitals and community health centers (Puskesmas) that provide TB-related services.\n\nBy integrating health education, symptom-based detection, and location-based services, TB Finder aims to make health information more accessible and help users take initial steps toward seeking appropriate healthcare services.\n\nMy Role: UI/UX Designer & Mobile Developer.",
    image: "/projects/tbcfinder.png",
    figma: "#",
    github: "#",
  },
  {
    title: "AssetTrack",
    description: "AssetTrack is an enterprise asset management platform consisting of web and mobile applications, designed to help organizations manage, monitor, and maintain their assets more efficiently.\n\nThe platform provides an integrated solution for managing asset data, tracking asset usage, handling borrowing and returns, scheduling maintenance, and generating reports. By centralizing asset-related information, AssetTrack aims to simplify asset management processes, improve operational visibility, and support better decision-making.\n\nMy involvement in this project focuses on UI/UX design for both web and mobile applications, as well as mobile application development.",
    image: "/projects/assettrack.png",
    playstore: "https://play.google.com/store/apps/details?id=com.assetrack.app&pcampaignid=web_share",
    github: "",
  },
];

export const experience = [
  {
    role: "Social Media & Content Intern",
    org: "Cortez Photography",
    year: "Nov 2023 – Apr 2024",
    detail: "Designed Instagram feeds and stories, created content, edited videos, and managed Instagram accounts for three clients.",
  },
  {
    role: "Vice Head of Media and Information Department",
    org: "EEPIS Bidikmisi Organization (E-BIO)",
    year: "Jan 2025 – Present",
    detail: "Coordinate the media team and manage E-BIO's social media on Instagram, TikTok, and YouTube.",
  },
  {
    role: "Division Coordinator, Publications, Documentation & Decoration",
    org: "E-BIO GOES TO SCHOOL & PEDDES Jilid XII",
    year: "2025 – 2026",
    detail: "Led visual design, content editing, and event documentation for community programs.",
  },
  {
    role: "Media Information Staff",
    org: "HIMIT PENS (Informatics Engineering Student Association)",
    year: "2026 – Present",
    detail: "Manage HIMIT's social media account and create content for the association's online presence.",
  },
];