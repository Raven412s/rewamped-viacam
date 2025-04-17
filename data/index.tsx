import Branding from "@/components/Global/Custom/Sections/Branding";
import Filmography from "@/components/Global/Custom/Sections/Filmography";
import Section0_1 from "@/components/Global/Custom/Sections/transitionSectionsForLargeScreens/Section0_1";
import { MenuItem } from "@/types";
import { FaBuilding, FaCamera, FaGlobe, FaPrint } from "react-icons/fa"; // Import icons

export const menuItems: MenuItem[] = [
    {
        title: "Production",
        icon: <FaCamera />,
        subMenu: [
            {
                title: "Social Media Branding / Digital Marketing",
                link: "/services/production/social-media",
                subMenu: [
                    {
                        title: "Business Related",
                        link: "/services/production/social-media#business",
                        subMenu: [
                            {
                                title: "Business Services",
                                link: "/services/production/social-media#business-services"
                            },
                            {
                                title: "Social Media",
                                link: "/services/production/social-media#social"
                            },
                            {
                                title: "Advertisement",
                                link: "/services/production/social-media#ads"
                            },
                            {
                                title: "Photoshoot",
                                link: "/services/production/social-media#photoshoot",
                                subMenu: [
                                    {
                                        title: "Product Shoot",
                                        link: "/services/production/social-media#product-shoot"
                                    },
                                    {
                                        title: "Site Photography & Video Shoot",
                                        link: "/services/production/social-media#site-shoot"
                                    },
                                    {
                                        title: "Photoshoot and Videography for Brands",
                                        link: "/services/production/social-media#brand-shoot"
                                    }
                                ]
                            },
                            {
                                title: "Content Creation",
                                link: "/services/production/social-media#content",
                                subMenu: [
                                    {
                                        title: "Reels/Shorts",
                                        link: "/services/production/social-media#reels"
                                    },
                                    {
                                        title: "Vlogs",
                                        link: "/services/production/social-media#vlogs"
                                    },
                                    {
                                        title: "Main-Stream Videos",
                                        link: "/services/production/social-media#mainstream"
                                    },
                                    {
                                        title: "YouTube Long-Format Videos",
                                        link: "/services/production/social-media#youtube"
                                    }
                                ]
                            },
                            {
                                title: "Music Videos",
                                link: "/services/production/social-media#music"
                            },
                            {
                                title: "Thumbnail Making",
                                link: "/services/production/social-media#thumbnails"
                            },
                            {
                                title: "Banner Creation from Designing to Printing",
                                link: "/services/production/social-media#banners"
                            },
                            {
                                title: "Corporate Events' Management",
                                link: "/services/production/social-media#events"
                            }
                        ]
                    },
                    {
                        title: "Personal",
                        link: "/services/production/social-media#personal",
                        subMenu: [
                            {
                                title: "Personal Photoshoot",
                                link: "/services/production/social-media#personal-photoshoot"
                            },
                            {
                                title: "Wedding (Videography and Photography)",
                                link: "/services/production/social-media#wedding"
                            },
                            {
                                title: "Music Videos",
                                link: "/services/production/social-media#personal-music"
                            },
                            {
                                title: "Personal Social Media Contents",
                                link: "/services/production/social-media#personal-content"
                            },
                            {
                                title: "Thumbnails",
                                link: "/services/production/social-media#personal-thumbnails"
                            },
                            {
                                title: "Music Record",
                                link: "/services/production/social-media#record"
                            },
                            {
                                title: "Anniversary",
                                link: "/services/production/social-media#anniversary"
                            },
                            {
                                title: "Event Management",
                                link: "/services/production/social-media#personal-events"
                            }
                        ]
                    }
                ]
            },
            {
                title: "Film / Content Related",
                link: "/services/production/film",
                subMenu: [
                    {
                        title: "Short Films",
                        link: "/services/production/film#short"
                    },
                    {
                        title: "Long Films",
                        link: "/services/production/film#long"
                    },
                    {
                        title: "Documentaries",
                        link: "/services/production/film#documentaries"
                    },
                    {
                        title: "Case Studies",
                        link: "/services/production/film#case-studies"
                    },
                    {
                        title: "Web Series",
                        link: "/services/production/film#web-series"
                    },
                    {
                        title: "Advertisements",
                        link: "/services/production/film#advertisements"
                    }
                ]
            }
        ]
    },
    {
        title: "Web Services",
        icon: <FaGlobe />,
        subMenu: [
            {
                title: "Web Development",
                link: '/services/web#development'
            },
            {
                title: "SEO",
                link: '/services/web#seo'
            },
            {
                title: "FrontEnd Development",
                link: '/services/web#frontend'
            },
            {
                title: "BackEnd Development",
                link: '/services/web#backend'
            },
            {
                title: "Website Designing",
                link: '/services/web#design'
            },
        ]
    },
    {
        title: "Company Related",
        icon: <FaBuilding />,
        subMenu: [
            {
                title: "Company Formation",
                link: "/services/company/formation",
                subMenu: [
                    {
                        title: "Company Formation",
                        link: "/services/company/formation#new"
                    },
                    {
                        title: "Company Registration",
                        link: "/services/company/formation#registration"
                    },
                    {
                        title: "PAN Registration",
                        link: "/services/company/formation#pan"
                    },
                    {
                        title: "Patent Filing",
                        link: "/services/company/formation#patent"
                    },
                    {
                        title: "Copyright",
                        link: "/services/company/formation#copyright"
                    },
                    {
                        title: "Trademark",
                        link: "/services/company/formation#trademark"
                    },
                    {
                        title: "LLP Formation",
                        link: "/services/company/formation#llp"
                    },
                    {
                        title: "Consultancy",
                        link: "/services/company/formation#consultancy"
                    },
                    {
                        title: "EPF",
                        link: "/services/company/formation#epf"
                    },
                    {
                        title: "ESIC",
                        link: "/services/company/formation#esic"
                    },
                    {
                        title: "Labour Registration",
                        link: "/services/company/formation#labour"
                    },
                    {
                        title: "Partnership Firm",
                        link: "/services/company/formation#partnership"
                    },
                    {
                        title: "Trust Registration",
                        link: "/services/company/formation#trust-registration"
                    },
                    {
                        title: "Trust Deeds",
                        link: "/services/company/formation#trust-deeds"
                    }
                ]
            },
            {
                title: "Income Tax",
                link: "/services/company/income-tax",
                subMenu: [
                    {
                        title: "ITR",
                        link: "/services/company/income-tax#itr"
                    },
                    {
                        title: "Income Tax Approval",
                        link: "/services/company/income-tax#approval"
                    },
                    {
                        title: "12A & 80G (Provisional)",
                        link: "/services/company/income-tax#12a-80g-provisional"
                    },
                    {
                        title: "12A & 80G (Personal)",
                        link: "/services/company/income-tax#12a-80g-personal"
                    },
                    {
                        title: "Consultancy",
                        link: "/services/company/income-tax#consultancy"
                    }
                ]
            },
            {
                title: "GST",
                link: "/services/company/gst",
                subMenu: [
                    {
                        title: "Registration",
                        link: "/services/company/gst#registration"
                    },
                    {
                        title: "Approval",
                        link: "/services/company/gst#approval"
                    },
                    {
                        title: "Appeal",
                        link: "/services/company/gst#appeal"
                    },
                    {
                        title: "GSTR Filing",
                        link: "/services/company/gst#filing"
                    },
                    {
                        title: "Consultancy",
                        link: "/services/company/gst#consultancy"
                    }
                ]
            },
            {
                title: "Company Related Other Services",
                link: "/services/company/other",
                subMenu: [
                    {
                        title: "NITI Ayog",
                        link: "/services/company/other#niti-ayog"
                    },
                    {
                        title: "E-Anudan",
                        link: "/services/company/other#e-anudan"
                    },
                    {
                        title: "BIS",
                        link: "/services/company/other#bis"
                    },
                    {
                        title: "CSR",
                        link: "/services/company/other#csr"
                    },
                    {
                        title: "ISO",
                        link: "/services/company/other#iso"
                    },
                    {
                        title: "Startup India",
                        link: "/services/company/other#startup-india"
                    },
                    {
                        title: "Import Export",
                        link: "/services/company/other#import-export"
                    },
                    {
                        title: "Labour Department",
                        link: "/services/company/other#labour"
                    },
                    {
                        title: "MHRD",
                        link: "/services/company/other#mhrd"
                    },
                    {
                        title: "FCRA",
                        link: "/services/company/other#fcra"
                    },
                    {
                        title: "Section 8 (NGO)",
                        link: "/services/company/other#section-8"
                    },
                    {
                        title: "DSC Class 3F",
                        link: "/services/company/other#dsc"
                    },
                    {
                        title: "MSME",
                        link: "/services/company/other#msme"
                    },
                    {
                        title: "GeM",
                        link: "/services/company/other#gem"
                    },
                    {
                        title: "FSSAI",
                        link: "/services/company/other#fssai"
                    },
                    {
                        title: "Audit Report",
                        link: "/services/company/other#audit"
                    },
                    {
                        title: "ROC Compliance",
                        link: "/services/company/other#roc"
                    },
                    {
                        title: "Project",
                        link: "/services/company/other#project"
                    },
                    {
                        title: "Project Report",
                        link: "/services/company/other#project-report"
                    },
                    {
                        title: "Darpan NGO Registration",
                        link: "/services/company/other#darpan-registration"
                    },
                    {
                        title: "Darpan NGO Name Correction",
                        link: "/services/company/other#darpan-correction"
                    }
                ]
            }
        ]
    },

    {
        title: "Graphic Design & Printing Services",
        icon: <FaPrint />,
        subMenu: [
            {
                title: "Banner Designing & Printing",
                link: '/services/graphic-design#banners'
            },
            {
                title: "Visiting Cards Designing & Printing",
                link: '/services/graphic-design#visiting-cards'
            },
            {
                title: "Invitation Designing",
                link: '/services/graphic-design#invitations'
            },
            {
                title: "Broucher Designing & Printing",
                link: '/services/graphic-design#brochures'
            },
            {
                title: "Book Cover Designing & Printing",
                link: '/services/graphic-design#book-covers'
            },
        ]
    }
];

export const ratingImages = [
    "/image/rating/face1.jpg",
    "/image/rating/face2.jpg",
    "/image/rating/face3.jpg",
    "/image/rating/face4.jpg",
]

export const services = [
    "Production",
    "Social Media Branding & Digital Marketing",
    "Business Services",
    "Advertisement",
    "Photoshoot & Videography",
    "Content Creation",
    "Corporate Events Management",
    "Personal Services",
    "Event Management",
    "Film & Content Creation",
    "Printing",
    "Company Formation & Registration",
    "Intellectual Property (IP) Services",
    "Consultancy",
    "Taxation & Compliance",
    "GST Services",
    "Company Related Other Services",
    "Government & NGO Services",
    "Audit & Compliance",
    "Project & Reports"
];

export const brandingCardData = [
    {
        h1: "Social Media Branding & Digital Marketing",
        listItems: [
            "Social Media Strategy & Management",
            "Advertisement Campaigns (Meta, Google, TikTok, etc.)",
            "Content Calendar & Scheduling",
            "Thumbnail & Banner Creation (Design to Printing)",
        ]
    },
    {
        h1: "High-Impact Content Creation",
        listItems: [
            "Reels & Shorts (Trending & Algorithm-Friendly Content)",
            "Vlogs & Lifestyle Videos",
            "YouTube (Long-Form & Mainstream Videos)",
            "Music Videos (Professional Cinematic Production)",
        ]
    },
    {
        h1: "Professional Photography & Videography",
        listItems: [
            "Product Photography ",
            "Site Photography & Video Shoots (Corporate & Personal)",
            "Event Coverage (Weddings, Anniversaries, etc.)",
            "Cinematic Branding Shoots for Businesses & Individuals",
        ]
    },
    {
        h1: "Corporate & Business Branding",
        listItems: [
            "Corporate Events Management (Seminars, Conferences,  etc.)",
            "Brand Identity Development",
            "Performance-Based Digital Marketing",
            "B2B & B2C Campaigns",
        ]
    },
    {
        h1: "Personal Branding & Event Management",
        listItems: [
            "Personal Social Media Branding & Content Strategy",
            "Wedding Videography & Photography",
            "Music Recordings & Visual Storytelling",
            "Anniversary & Special Event Coverage",
        ]
    },
    {
        h1: "Brand Consulting & Strategic Growth",
        listItems: [
            "Brand Identity & Positioning Strategy",
            "Market Research & Competitive Analysis",
            "Personalized Brand Growth Consultation",
            "Content & Storytelling Strategy",
        ]
    }

]

export const filmographyCardData = [
    {
        initialImage: "/image/short-film.webp",
        dedicatedVideo: [
            "/video/short-film-preview.webp",
            "/video/short-film-preview.mp4",
        ],
        h1: "Short Films – Capturing Powerful Stories in Minutes",
        description:
            "Short films pack an emotional punch in a brief yet impactful format. Whether it's a heartfelt drama, a thrilling suspense piece, or an artistic visual journey, our team crafts compelling short films that leave a lasting impression.",
    },
    {
        initialImage: "/image/long-film.webp",
        dedicatedVideo: [
            "/video/long-film-preview.webp",
            "/video/long-film-preview.mp4",
        ],
        h1: "Long Films – Feature-Length Excellence",
        description:
            "We produce full-length films that bring your vision to the big screen. From script development to post-production, we ensure every detail is perfected to create a cinematic masterpiece that captivates audiences.",
    },
    {
        initialImage: "/image/documentary.jpg",
        dedicatedVideo: [
            "/video/documentary-preview.webp",
            "/video/documentary-preview.mp4",
        ],
        h1: "Documentaries – Real Stories, Real Impact",
        description:
            "Documentaries are powerful tools for education, awareness, and storytelling. We create high-quality documentaries that inform, inspire, and engage audiences with compelling narratives and stunning visuals.",
    },
    {
        initialImage: "/image/case-study.jpeg",
        dedicatedVideo: [
            "/video/case-study-preview.webp",
            "/video/case-study-preview.mp4",
        ],
        h1: "Case Studies – Showcasing Real Success Stories",
        description:
            "Our case study videos highlight real-life success stories, innovative solutions, and impactful journeys. Perfect for businesses, organizations, and brands looking to showcase their expertise and achievements.",
    },
    {
        initialImage: "/image/web-series.jpg",
        dedicatedVideo: [
            "/video/web-series-preview.webp",
            "/video/web-series-preview.mp4",
        ],
        h1: "Web Series – Episodic Storytelling That Engages",
        description:
            "We produce high-quality web series tailored for digital platforms, bringing engaging episodic storytelling that keeps audiences hooked. Perfect for brands, influencers, and storytellers looking to create immersive experiences.",
    },
    {
        initialImage: "/image/advertisement1.webp",
        dedicatedVideo: [
            "/video/advertisement-preview.webp",
            "/video/advertisement-preview.mp4",
        ],
        h1: "Advertisements – High-Impact Brand Promotion",
        description:
            "Advertisements are the backbone of modern marketing. We create visually stunning, highly effective ad films that boost brand awareness, drive engagement, and leave a strong impact on your audience.",
    },
];




const MarketingSection = () => (
    <div className="p-6 text-center bg-green-500 text-white rounded-lg">
        <h2 className="text-xl font-bold mb-2">📈 Growth Marketing</h2>
        <p className="text-sm">Strategies to scale your business with performance marketing.</p>
    </div>
);

export const productionSections = [
    {
        id: "branding",
        title: "🔥 Digital Branding",
        component: <Branding />,
    },
    {
        id: "1",
        title: "",
        component: <Section0_1 />,
    },
    {
        id: "film",
        title: "🎬 Cinematic Masterpieces",
        component: <Filmography />,
    },
];

export const businessSections = [
    {
        id: "branding",
        title: "🔥 Digital Branding",
        component: <Branding />,
    },
    {
        id: "1",
        title: "",
        component: <Section0_1 />,
    },
    {
        id: "film",
        title: "🎬 Cinematic Masterpieces",
        component: <Filmography />,
    },
];

export const allTitlesAndServices = [
    // Main menu items
    "Production",
    "Web Services",
    "Company Related",
    "Graphic Design & Printing Services",

    // Production submenu
    "Social Media Branding / Digital Marketing",
    "Film / Content Related",

    // Business Related submenu
    "Business Related",
    "Business Services",
    "Social Media",
    "Advertisement",
    "Photoshoot",
    "Product Shoot",
    "Site Photography & Video Shoot",
    "Photoshoot and Videography for Brands",
    "Content Creation",
    "Reels/Shorts",
    "Vlogs",
    "Main-Stream Videos",
    "YouTube Long-Format Videos",
    "Music Videos",
    "Thumbnail Making",
    "Banner Creation from Designing to Printing",
    "Corporate Events' Management",

    // Personal submenu
    "Personal",
    "Personal Photoshoot",
    "Wedding (Videography and Photography)",
    "Personal Social Media Contents",
    "Personal Thumbnails",
    "Music Record",
    "Anniversary",
    "Event Management",

    // Film/Content submenu
    "Short Films",
    "Long Films",
    "Documentaries",
    "Case Studies",
    "Web Series",
    "Advertisements",

    // Web Services submenu
    "Web Development",
    "SEO",
    "FrontEnd Development",
    "BackEnd Development",
    "Website Designing",

    // Company Related submenu
    "Company Formation",
    "Company Registration",
    "PAN Registration",
    "Patent Filing",
    "Copyright",
    "Trademark",
    "LLP Formation",
    "Consultancy",
    "EPF",
    "ESIC",
    "Labour Registration",
    "Partnership Firm",
    "Trust Registration",
    "Trust Deeds",

    // Income Tax submenu
    "Income Tax",
    "ITR",
    "Income Tax Approval",
    "12A & 80G (Provisional)",
    "12A & 80G (Personal)",

    // GST submenu
    "GST",
    "Registration",
    "Approval",
    "Appeal",
    "GSTR Filing",

    // Company Related Other Services submenu
    "Company Related Other Services",
    "NITI Ayog",
    "E-Anudan",
    "BIS",
    "CSR",
    "ISO",
    "Startup India",
    "Import Export",
    "Labour Department",
    "MHRD",
    "FCRA",
    "Section 8 (NGO)",
    "DSC Class 3F",
    "MSME",
    "GeM",
    "FSSAI",
    "Audit Report",
    "ROC Compliance",
    "Project",
    "Project Report",
    "Darpan NGO Registration",
    "Darpan NGO Name Correction",

    // Graphic Design & Printing Services submenu
    "Banner Designing & Printing",
    "Visiting Cards Designing & Printing",
    "Invitation Designing",
    "Broucher Designing & Printing",
    "Book Cover Designing & Printing",

    // Services array items
    "Social Media Branding & Digital Marketing",
    "Business Services",
    "Advertisement",
    "Photoshoot & Videography",
    "Content Creation",
    "Corporate Events Management",
    "Personal Services",
    "Event Management",
    "Film & Content Creation",
    "Printing",
    "Company Formation & Registration",
    "Intellectual Property (IP) Services",
    "Consultancy",
    "Taxation & Compliance",
    "GST Services",
    "Company Related Other Services",
    "Government & NGO Services",
    "Audit & Compliance",
    "Project & Reports"
];
