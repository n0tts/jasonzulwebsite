import type { ImageMetadata } from "astro";
import jasonPhoto from "../assets/images/Jason.jpg";
import zulPhoto from "../assets/images/Zul.jpg";

export interface Partner {
    slug: string;
    name: string;
    role: string;
    admissionBar: string;
    admissionDate: string;
    admissionNo: string;
    photo: ImageMetadata;
    /** Multiple paragraphs of bio copy */
    bio: string[];
    specialisationHeading: string;
    specialisationBody: string[];
    qualifications: string[];
}

export const partners: Partner[] = [
    {
        slug: "jason-chin-wei-jye",
        name: "Jason Chin Wei Jye",
        role: "Founding Partner",
        admissionBar: "Sabah Bar",
        admissionDate: "20th November 2020",
        admissionNo: "1392",
        photo: jasonPhoto,
        bio: [
            "Mr. Jason Chin Wei Jye is the distinguished founding partner of JASON ZULFADHLI, bringing a wealth of legal expertise to the firm. He was admitted to the Sabah Bar on 20th November 2020 and has since dedicated himself to the practice of law, amassing three years of experience as an Advocates & Solicitors in Sabah.",
            "Mr. Jason Chin Wei Jye's dedication to his profession and his commitment to delivering high-quality legal services make him a vital asset to Jason Zulfadhli Law Firm. His years of experience, coupled with his strong educational background, make him a trusted advisor and advocate for clients seeking legal representation.",
        ],
        specialisationHeading: "Civil and Criminal Litigation",
        specialisationBody: [
            "With a focus on Civil and Criminal Litigation, Mr. Jason Chin is well-versed in the intricacies of the legal system and committed to providing top-notch legal representation to his clients. His dedication to these areas ensures that he offers comprehensive legal solutions and strategic guidance.",
        ],
        qualifications: [
            "Certificate in Legal Practice (CLP)",
            "Bachelor of Laws (Hons), Oxford Brookes University, United Kingdom",
        ],
    },
    {
        slug: "mohd-zulfadhli-bin-darman-shah",
        name: "Mohd Zulfadhli Bin Darman Shah",
        role: "Managing Partner",
        admissionBar: "Sabah Bar",
        admissionDate: "20th November 2020",
        admissionNo: "1381",
        photo: zulPhoto,
        bio: [
            "Mr. Mohd Zulfadhli Bin Darman Shah is the esteemed managing partner of JASON ZULFADHLI. With a wealth of legal expertise, he has made significant contributions to the legal field. He was admitted to the Sabah Bar on 20th November 2020, marking the beginning of a promising career in law.",
            "His dedication to the field, combined with his academic and professional achievements, make him a trusted advisor and advocate for clients seeking legal expertise.",
        ],
        specialisationHeading: "Corporate Law & Conveyancing",
        specialisationBody: [
            "Mr. Mohd Zulfadhli focuses his expertise on corporate matters and conveyancing. His in-depth knowledge and experience in these areas make him an invaluable asset to the firm, providing clients with comprehensive legal solutions and strategic guidance.",
            "He has also had the opportunity to appear before the Federal Court and Court of Appeal.",
        ],
        qualifications: [
            "Foundation in Law, Multimedia University, Melaka",
            "Bachelor of Laws (Hons), Multimedia University, Melaka",
            "Diploma in Shariah Law",
        ],
    },
];

export function getPartnerBySlug(slug: string): Partner | undefined {
    return partners.find((p) => p.slug === slug);
}
