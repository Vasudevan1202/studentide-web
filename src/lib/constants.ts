export interface LanguageItem {
  id: string;
  name: string;
  extension: string;
  tagline: string;
  version: string;
  runtimeStatus: string;
  runtimeType: 'bundled' | 'builtin';
  badgeColor: string;
  description: string;
  features: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface CurriculumCard {
  title: string;
  classes: string;
  targetGroup: string;
  summary: string;
  syllabus: string[];
  ideBenefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  alt: string;
  description: string;
  highlights: string[];
}

export const SITE_CONFIG = {
  name: "Student IDE",
  companyName: "DeveloperHut",
  companyUrl: "https://developerhut.in",
  contactEmail: "founder@developerhut.in",
  supportEmail: "founder@developerhut.in",
  targetLaunchIso: "2026-11-02T10:00:00+05:30",
  targetLaunchTimestamp: 1793593800000, // 2026-11-02T10:00:00+05:30 in Epoch MS
  launchBadge: "OFFICIAL LAUNCH · 02 NOVEMBER 2026 · 10:00 AM IST",
  tagline: "Learn. Code. Build.",
  headline: "INDIA'S FIRST STUDENT-FRIENDLY OFFLINE IDE",
  description:
    "A complete coding environment designed for school students, with offline programming tools.",
  badge: "PROUDLY BUILT IN INDIA 🇮🇳",
  version: "1.0.0",
  architecture: "Windows x64 (64-bit)",
  installerSize: "147.7 MB",
  installerBaseSize: "129.49 MB",
  installerFilename: "Student-IDE-Setup-1.0.0-x64.exe",
  sha256:
    "544ee8da3007b95e46e8df44d46e9575000163f149b2960dae4f4fd78e58bcaa",
  githubRepoUrl: "https://github.com/DeveloperHutOrg/student-ide",
  downloadUrl:
    process.env.NEXT_PUBLIC_STUDENT_IDE_DOWNLOAD_URL ||
    process.env.NEXT_PUBLIC_DOWNLOAD_URL ||
    "https://github.com/DeveloperHutOrg/student-ide/releases/download/v1.0.0/Student-IDE-Setup-1.0.0-x64.exe",
  requirements: [
    "Windows 10 / Windows 11 (64-bit)",
    "4 GB RAM (8 GB recommended)",
    "1.5 GB available storage space",
    "No internet connection required for offline runtimes",
    "No administrative privileges required during setup",
  ],
};

export interface FounderPrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface FounderSocialLink {
  name: string;
  handle: string;
  url: string;
  label: string;
  description: string;
}

export const FOUNDER_INFO = {
  displayName: "Vasu",
  fullName: "Vasudevan M",
  role: "Founder of DeveloperHut",
  product: "Creator of Student IDE",
  education: "Class 12 Student, Isha Vidhya",
  companyUrl: "https://www.developerhut.in/",
  email: "founder@developerhut.in",
  avatarSrc: "/founder/vasu.jpg",
  logoSrc: "/branding/developerhut-logo.jpg",
  mainIdentity: [
    "STUDENT DEVELOPER",
    "ENTREPRENEUR",
    "TECHNOLOGY ENTHUSIAST",
    "FOUNDER OF DEVELOPERHUT",
    "CREATOR OF STUDENT IDE",
  ],
  quote:
    "You don't need a degree to start building. You don't need expensive equipment. You just need curiosity, patience, and the willingness to learn from your mistakes. If you have an idea, start building it today. Technology is the most powerful tool you have to turn your imagination into reality.",
  story: [
    "Hi, I'm Vasu, a Class 12 student at Isha Vidhya and the founder of DeveloperHut.",
    "My journey with technology started with pure curiosity. I wanted to understand how software works, how ideas turn into real tools, and how technology can solve real problems for people.",
    "As a school student learning to code, I saw firsthand how overwhelming existing developer tools can be for beginners. Most IDEs are built for professionals with complex configurations, high system requirements, and an assumption that you already know what you're doing. In many schools and homes, especially across India, students don't always have high-end computers or reliable internet connections.",
    "That observation led to an idea: What if there was a coding environment built specifically for students? Something fast, simple, completely offline, and ready to use without complicated setup.",
    "That idea became Student IDE.",
  ],
  principles: [
    {
      title: "Explore Programming Without Complicated Setup",
      description:
        "No complex command lines, zero environment variables, and pre-bundled runtimes. Students start coding on day one with zero barrier to entry.",
      icon: "Sparkles",
    },
    {
      title: "Learn Different Coding Languages in One Place",
      description:
        "Seamlessly switch between Python, C++, HTML5, CSS3, JavaScript, SQL, and PHP without fragmented software or scattered setups.",
      icon: "Boxes",
    },
    {
      title: "Experiment With Ideas Freely and Safely",
      description:
        "Sandboxed browser previews, local file management, and instant process-tree killers keep experiments safe from computer freezes.",
      icon: "ShieldCheck",
    },
    {
      title: "Build Your First Projects With Confidence",
      description:
        "Grade-tailored templates for Classes 6 through 12 empower students to build real working scripts, web pages, and databases.",
      icon: "Rocket",
    },
    {
      title: "Develop Practical Technology Skills for the Future",
      description:
        "Real Monaco code editing engine, native MinGW C++17 compilation, and SQLite engines instill authentic developer fundamentals.",
      icon: "Code2",
    },
  ],
  socials: [
    {
      name: "Instagram",
      handle: "@vasu18.exe",
      url: "https://www.instagram.com/vasu18.exe/",
      label: "Follow on Instagram",
      description: "Behind-the-scenes building updates and student developer life.",
    },
    {
      name: "LinkedIn",
      handle: "Vasudevan M",
      url: "https://www.linkedin.com/in/vasudevanm18/",
      label: "Connect on LinkedIn",
      description: "Professional networking, founder updates, and collaborations.",
    },
    {
      name: "GitHub",
      handle: "@Vasudevan1202",
      url: "https://github.com/Vasudevan1202",
      label: "Follow on GitHub",
      description: "Open-source repositories, experiments, and codebases.",
    },
    {
      name: "Email",
      handle: "founder@developerhut.in",
      url: "mailto:founder@developerhut.in",
      label: "Send an Email",
      description: "Direct founder inquiries, school adoption, and partnerships.",
    },
    {
      name: "DeveloperHut",
      handle: "developerhut.in",
      url: "https://www.developerhut.in/",
      label: "Visit DeveloperHut",
      description: "Explore the official website of DeveloperHut.",
    },
  ],
};

export const FEATURES: FeatureItem[] = [
  {
    id: "offline-coding",
    title: "Offline Coding",
    shortDesc: "Learn and write code without requiring an internet connection.",
    description:
      "Engineered from the ground up for school computer laboratories and areas with limited connectivity. Write, run, and debug code with 100% offline compilers and runtimes.",
    badge: "100% Offline",
    iconName: "WifiOff",
  },
  {
    id: "multiple-languages",
    title: "Multiple Languages",
    shortDesc: "Work with supported programming languages in one application.",
    description:
      "Seamlessly transition between Python, C++17, HTML5, CSS3, JavaScript, SQL, and PHP. Standard school curriculum workflows without switching between multiple fragmented tools.",
    badge: "7 Languages",
    iconName: "Boxes",
  },
  {
    id: "pro-code-editor",
    title: "Professional Code Editor",
    shortDesc: "Monaco-based editor with syntax highlighting and developer-friendly tools.",
    description:
      "Powered by the industry-standard Monaco Editor engine. Features rich syntax highlighting, code bracket matching, line numbering, auto-indentation, and configurable font sizing.",
    badge: "Monaco Powered",
    iconName: "Code2",
  },
  {
    id: "built-in-terminal",
    title: "Built-in Terminal",
    shortDesc: "Run programs and view output in one workspace.",
    description:
      "Integrated execution console displays standard output, compiler diagnostics, and formatted runtime errors. Supports interactive user inputs for Python, C++ cin, and PHP stdin.",
    badge: "Interactive Console",
    iconName: "Terminal",
  },
  {
    id: "student-dashboard",
    title: "Student Dashboard",
    shortDesc: "A simple, organized workspace for school students.",
    description:
      "A friendly launchpad displaying student name, grade level, one-click starter templates, language quick-starts, recent workspace files, and helpful coding tips.",
    badge: "Curriculum Focused",
    iconName: "LayoutDashboard",
  },
  {
    id: "local-project-management",
    title: "Local Project Management",
    shortDesc: "Create, open and manage coding projects locally.",
    description:
      "Full local file tree explorer. Create, rename, edit, and organize project folders directly on your local computer disk with zero dependency on cloud servers.",
    badge: "Local Disk Storage",
    iconName: "FolderGit2",
  },
  {
    id: "student-feedback",
    title: "Student Feedback",
    shortDesc: "Built-in survey and feedback features.",
    description:
      "Integrated educational feedback module enabling students to share learning impressions, report experience ratings, and submit anonymous classroom evaluations offline.",
    badge: "Offline Survey",
    iconName: "MessageSquareHeart",
  },
  {
    id: "admin-dashboard",
    title: "Admin Dashboard",
    shortDesc: "Local survey analytics and export/import features.",
    description:
      "Password-protected instructor dashboard with PBKDF2/scrypt security, grade-wise satisfaction metrics, offline CSV export, and encrypted JSON lab-sync capabilities.",
    badge: "Lab Administration",
    iconName: "ShieldCheck",
  },
];

export const LANGUAGES: LanguageItem[] = [
  {
    id: "python",
    name: "Python",
    extension: ".py",
    tagline: "Beginner-friendly language for scripting, data logic, and mathematics.",
    version: "Python 3.11.9 (64-bit)",
    runtimeStatus: "Bundled Standalone Runtime",
    runtimeType: "bundled",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    description:
      "Includes the official standalone Python 3.11 embeddable distribution. Requires zero pre-installed software and works immediately upon installation.",
    features: [
      "No system PATH or pip configuration needed",
      "Interactive input() and output streams",
      "Math, random, sys, and core standard library modules",
      "CBSE & ICSE Class 9–12 syllabus compliant",
    ],
  },
  {
    id: "cpp",
    name: "C++",
    extension: ".cpp",
    tagline: "High-performance compiled language for algorithms and competitive coding.",
    version: "C++17 (MinGW-w64 GCC 14.1.0)",
    runtimeStatus: "Bundled Standalone Compiler",
    runtimeType: "bundled",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    description:
      "Bundles the full MinGW-w64 GCC 14.1 compiler toolchain for native Windows execution. Automatically compiles and links code directly inside the application.",
    features: [
      "Modern C++17 ISO standard support",
      "Full std::cin interactive keyboard input support",
      "Instant process-tree termination for infinite loops",
      "No MinGW installation or environment variables required",
    ],
  },
  {
    id: "html",
    name: "HTML5",
    extension: ".html",
    tagline: "HyperText Markup Language for structuring modern web pages and forms.",
    version: "HTML5 Living Standard",
    runtimeStatus: "Built-in Sandboxed Preview",
    runtimeType: "builtin",
    badgeColor: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    description:
      "Built-in sandboxed Chromium web preview displays HTML documents in real-time as students type, providing instant visual feedback for budding web creators.",
    features: [
      "Real-time split preview alongside Monaco editor",
      "Sandboxed iframe with security controls",
      "Full HTML5 structural tags and semantic elements",
      "Ideal for Class 6–8 introductory web design",
    ],
  },
  {
    id: "css",
    name: "CSS3",
    extension: ".css",
    tagline: "Cascading Style Sheets to style, layout, and animate web interfaces.",
    version: "CSS3 Modern Specification",
    runtimeStatus: "Live Real-Time Rendering",
    runtimeType: "builtin",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    description:
      "Pairs seamlessly with HTML files in the live preview panel. Supports modern CSS box models, flexbox, grid systems, and animations.",
    features: [
      "Instant live reload upon file save",
      "Color decorators and syntax highlighting in Monaco",
      "Modern Flexbox and CSS Grid support",
      "School computer lab practical exam compatible",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    extension: ".js",
    tagline: "Modern programming language powering interactive algorithms and web logic.",
    version: "ECMAScript 2024 / Node.js Engine",
    runtimeStatus: "Integrated V8 Execution Engine",
    runtimeType: "builtin",
    badgeColor: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    description:
      "Runs directly using the integrated high-performance V8 engine. Students can test algorithms, data structures, and console logic instantly.",
    features: [
      "ES6+ modern syntax: arrow functions, destructuring, async/await",
      "Console output streaming with execution timing",
      "Built-in mathematical and date functions",
      "No Node.js installation required on host system",
    ],
  },
  {
    id: "sql",
    name: "SQL",
    extension: ".sql",
    tagline: "Structured Query Language for database tables, queries, and relational data.",
    version: "SQLite 3 Engine (Local)",
    runtimeStatus: "Embedded Database Engine",
    runtimeType: "builtin",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    description:
      "Includes an embedded relational SQLite database engine. Executes DDL and DML queries and formats table output neatly in tabular columns.",
    features: [
      "CREATE TABLE, INSERT, UPDATE, DELETE queries",
      "SELECT statements with WHERE, ORDER BY, GROUP BY",
      "Tabular ASCII console rendering for query results",
      "Zero database server setup or port configuration needed",
    ],
  },
  {
    id: "php",
    name: "PHP",
    extension: ".php",
    tagline: "Server-side scripting language for backend logic and data processing.",
    version: "PHP 8.2.20 CLI (Win32-vs16-x64 NTS)",
    runtimeStatus: "Bundled Standalone Runtime (Verified)",
    runtimeType: "bundled",
    badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    description:
      "Officially integrated standalone PHP 8.2 CLI runtime bundled inside the Windows installer. Fully verified across test suites for offline school lab computers.",
    features: [
      "Bundled php.exe and php8.dll with local DLL resolution",
      "Standard CLI script execution via isolated process spawning",
      "Interactive fgets(STDIN) console input handling",
      "Zero global system PATH prerequisite on student PCs",
    ],
  },
];

export const CURRICULUM_CARDS: CurriculumCard[] = [
  {
    title: "Middle School",
    classes: "Classes 6–8",
    targetGroup: "Ages 11–13 • Foundation Stage",
    summary:
      "Student IDE removes intimidating command lines and complex toolchain setup, allowing young learners to experience immediate creative gratification.",
    syllabus: [
      "Introduction to algorithmic thinking and computer logic",
      "HTML5 structural webpage design and form controls",
      "CSS3 visual styling, colors, borders, and typography",
      "Basic JavaScript arithmetic, variables, and alerts",
    ],
    ideBenefits: [
      "Simple one-click launch with no installation barriers",
      "Instant visual feedback via real-time Sandboxed Web Preview",
      "Safe, distraction-free environment without web browser ads",
    ],
  },
  {
    title: "High School",
    classes: "Classes 9–10",
    targetGroup: "Ages 14–15 • Core Secondary Stage",
    summary:
      "Specifically aligned with Indian CBSE (Skill Subject 402/417) and ICSE Computer Applications curricula to ensure students excel in practical exams.",
    syllabus: [
      "Python programming fundamentals, conditional logic & loops",
      "Strings, lists, tuples, and dictionary manipulation",
      "Modular programming with user-defined functions",
      "Basic file input/output and practical school projects",
    ],
    ideBenefits: [
      "Pre-bundled Python 3.11 runtime eliminates Python PATH errors",
      "Integrated terminal supports interactive input() without popup windows",
      "Built-in project templates to start assignments in seconds",
    ],
  },
  {
    title: "Senior Secondary",
    classes: "Classes 11–12",
    targetGroup: "Ages 16–17 • Advanced Technical Stage",
    summary:
      "Equips senior school students with standard C++17 compilation, relational SQL databases, and backend scripting needed for board exams and engineering entrance.",
    syllabus: [
      "C++17 object-oriented programming, classes & memory pointers",
      "Data structures: arrays, stacks, queues, and searching algorithms",
      "SQL relational tables, foreign keys, joins, and aggregates",
      "PHP backend scripting and modular data processing",
    ],
    ideBenefits: [
      "Bundled MinGW-w64 GCC 14.1 compiler provides instant C++ execution",
      "Embedded SQLite database handles SQL practical queries locally",
      "Process watchdog prevents computer freeze on accidental infinite loops",
    ],
  },
];

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: "editor",
    title: "Professional Code Editor",
    subtitle: "Monaco-powered editing environment with syntax highlighting",
    imageSrc: "/screenshots/editor.png",
    alt: "Student IDE Monaco Code Editor interface showing Python starter script",
    description:
      "The primary coding workspace leverages Monaco Editor — the same engine powering modern industry tools. Students benefit from syntax highlighting, line numbers, automatic bracket pairing, and clean dark mode ergonomics designed to protect young eyes during long laboratory sessions.",
    highlights: [
      "Multi-tab file support and responsive split panes",
      "Customizable font scaling for optimal classroom visibility",
      "Instant error highlighting and standard indentation guidelines",
    ],
  },
  {
    id: "dashboard",
    title: "Student Dashboard",
    subtitle: "Organized student profile and one-click starter cards",
    imageSrc: "/screenshots/dashboard.png",
    alt: "Student IDE Dashboard showing student grade level and language quick-starts",
    description:
      "When launching Student IDE, learners are greeted by their personalized dashboard. Displaying their name, grade level, and language preferences, students can jump straight into Python, C++, HTML5, JavaScript, SQL, or PHP with zero setup friction.",
    highlights: [
      "One-click starter templates tailored to student grade level",
      "Quick access to recently modified local files",
      "Curriculum tips and recommended learning milestones",
    ],
  },
  {
    id: "terminal",
    title: "Built-in Terminal & Output",
    subtitle: "Real-time process execution with interactive input streaming",
    imageSrc: "/screenshots/terminal.png",
    alt: "Student IDE integrated terminal showing Python execution results",
    description:
      "Programs run directly within the integrated terminal pane. Execution time is measured and reported accurately. Unlike generic code runners, Student IDE supports standard interactive console input for Python input(), C++ std::cin, and PHP fgets().",
    highlights: [
      "Clear separation between standard output and error diagnostics",
      "One-click Stop button to safely abort infinite loops",
      "Full process-tree termination prevents orphaned background tasks",
    ],
  },
  {
    id: "languages",
    title: "Language Preferences",
    subtitle: "Tailor the workspace to your school syllabus",
    imageSrc: "/screenshots/languages.png",
    alt: "Student IDE Language preferences and curriculum configuration screen",
    description:
      "Students and teachers can enable or disable language toolchains based on the current school curriculum. The interface recommends optimal languages based on whether the student is enrolled in Middle School, High School, or Senior Secondary.",
    highlights: [
      "Intelligent defaults aligned with Classes 6 through 12",
      "Toggles adjust sidebar templates and quick-launch menus",
      "All preferences persist safely in local SQLite storage",
    ],
  },
  {
    id: "survey",
    title: "Student Feedback Module",
    subtitle: "Built-in educational survey & classroom evaluation",
    imageSrc: "/screenshots/survey.png",
    alt: "Student IDE offline survey and feedback questionnaire interface",
    description:
      "Enables students to submit structured feedback about coding lessons, IDE usability, and learning comfort. All responses are securely stored locally inside the lab computer's SQLite database without requiring any internet connection.",
    highlights: [
      "Simple, child-friendly 5-star ratings and category selection",
      "100% offline persistence with cryptographic record hashing",
      "Helps computer teachers evaluate classroom coding progress",
    ],
  },
  {
    id: "admin",
    title: "Admin Dashboard & Lab Sync",
    subtitle: "Offline analytics, grade metrics, and CSV/JSON export",
    imageSrc: "/screenshots/admin.png",
    alt: "Student IDE instructor admin dashboard showing survey analytics",
    description:
      "Designed specifically for computer laboratory teachers and administrators. Protected by password authentication with scrypt encryption, the admin dashboard displays aggregate satisfaction metrics, grade distribution, and enables offline CSV export.",
    highlights: [
      "Zero-cloud local lab administration with PBKDF2/scrypt security",
      "One-click CSV export for school reporting and teacher audits",
      "Encrypted JSON import/export to sync metrics across lab computers",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What is Student IDE?",
    answer:
      "Student IDE is a complete, lightweight, student-friendly desktop integrated development environment created specifically for Indian school students (Classes 6–12), teachers, and computer laboratories. Developed by DeveloperHut, it bundles the code editor, compilers, and runtimes needed for school curricula into a single offline installer.",
  },
  {
    question: "Who can use Student IDE?",
    answer:
      "Student IDE is designed for school students in Classes 6 through 12, computer science teachers, tutors, and educational institutions. It accommodates beginners taking their first steps in HTML/CSS as well as senior secondary students writing advanced C++17 algorithms and SQL queries.",
  },
  {
    question: "Does Student IDE require an internet connection?",
    answer:
      "No. All supported core features — code editing, Python execution, C++ compilation, HTML/CSS live preview, JavaScript execution, SQL database queries, PHP scripting, and survey feedback — function 100% offline. No internet connection is ever required to write or run programs.",
  },
  {
    question: "Which programming languages are supported out of the box?",
    answer:
      "Student IDE provides integrated support for 7 languages: Python (bundled Python 3.11.9 embeddable runtime), C++ (bundled MinGW-w64 GCC 14.1.0 C++17 compiler), HTML5 & CSS3 (sandboxed real-time web preview), JavaScript (integrated V8 engine), SQL (embedded SQLite 3 database), and PHP (bundled standalone PHP 8.2 CLI distribution).",
  },
  {
    question: "How do I install Student IDE on a Windows PC?",
    answer:
      "Download the installer ('Student-IDE-Setup-1.0.0-x64.exe') from the download section. Double-click the file to launch setup. The installer does not require administrative privileges ('asInvoker') and configures all bundled compilers and runtimes automatically without requiring any manual PATH adjustments.",
  },
  {
    question: "Is Student IDE compatible with Windows 10 and Windows 11?",
    answer:
      "Yes. Student IDE is fully tested and verified on 64-bit editions of both Windows 10 (Version 1809 and newer) and Windows 11. It is optimized for standard school computer lab hardware with minimal CPU and memory overhead.",
  },
  {
    question: "Where are student projects and files saved?",
    answer:
      "All student projects and code files are saved locally on the user's computer disk, typically in the user's standard Documents directory under 'StudentIDE_Projects' (or any custom folder selected by the student). Files remain entirely private and are never uploaded to any remote server.",
  },
  {
    question: "How can schools and computer labs use Student IDE?",
    answer:
      "Schools can copy the single installer file to all computer lab machines via USB drive or local network share. The built-in multi-student session management allows different students from various shifts to log in, keep their projects distinct, and submit anonymous feedback. Instructors can use the Admin Dashboard to review feedback and export lab reports to CSV.",
  },
];
