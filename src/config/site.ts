export interface NavLink {
    label: string;
    href: string;
    children?: NavLink[];
}

export const siteConfig = {
    name: "Jason Zulfadhli - Advocates & Solicitors",
    description: "Expert legal services in Kota Kinabalu, Sabah. Focus on small business law, corporate advisory, and dispute resolution.",
    url: "https://jasonzulfadli.com",
    ogImage: "/og-default.png",
    navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        {
            label: "Partners",
            href: "/partners",
            children: [
                { label: "Jason Chin Wei Jye", href: "/partners/jason-chin-wei-jye" },
                { label: "Mohd Zulfadhli Bin Darman Shah", href: "/partners/mohd-zulfadhli-bin-darman-shah" },
            ],
        },
        { label: "Practice Areas", href: "/practice-areas" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ] satisfies NavLink[],
    social: {
        instagram: "",
        linkedin: "",
    },
};
