import FirstUser from "../../public/user1.png";
import SecondUser from "../../public/user2.png";
import ThirdUser from "../../public/user3.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const UserProfiles = [
  { src: FirstUser, alt: "user1" },
  { src: SecondUser, alt: "user2" },
  { src: ThirdUser, alt: "user3" },
];

export const FooterSections = [
  {
    title: "Links",
    links: ["About Us", "Contact Us", "Services", "Blog"],
  },
  {
    title: "Support",
    links: ["FAQs", "Terms", "Privacy Policy", "Feedback"],
  },
  {
    title: "User Guide",
    links: ["Careers", "Testimonials", "News", "Events"],
  },
];

export const SocialLinks = [
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "#",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "#",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "#",
  },
];
