import {
  Users,
  ClipboardList,
  UserPlus,
  Briefcase,
  FileText,
  FileSignature,
  CheckSquare,
} from "lucide-react";

export const Hireservices = [
  {
    title: "Dedicated Development Team",
    icon: <Users color="#ff6b3d" />,
    subtitle: "For long-term projects, ongoing development, or team expansion.",
    linkTitle: "Learn About Dedicated Teams",
    link: "/dedicated-team",
  },
  {
    title: "Scoping Your Requirements",
    icon: <ClipboardList color="#ff6b3d" />,
    subtitle:
      "Expert guidance to define your project scope and create a clear plan.",
    linkTitle: "Scope Your Project",
    link: "/about",
  },
  {
    title: "Talent/Resource Gap Filling",
    icon: <UserPlus color="#ff6b3d" />,
    subtitle: "Quickly fill skill gaps with our qualified professionals.",
    linkTitle: "Fill Resource Gaps",
    link: "/contact-us",
  },
  {
    title: "Project-Based Delivery",
    icon: <Briefcase color="#ff6b3d" />,
    subtitle:
      "Deliver specific projects with defined deliverables and timelines.",
    linkTitle: "Explore Project Delivery",
    link: "/contact-us",
  },
  {
    title: "RFI/RFP Responses",
    icon: <FileText color="#ff6b3d" />,
    subtitle: "Detailed, customized proposals for any formal request.",
    linkTitle: "Submit Your RFI/RFP",
    link: "/contact-us",
  },
  {
    title: "Existing Project Takeover",
    icon: <FileSignature color="#ff6b3d" />,
    subtitle:
      "Inject fresh expertise to ensure successful completion of ongoing projects.",
    linkTitle: "Take Over My Project",
    link: "/contact-us",
  },
  {
    title: "Small Tasks & Issue Resolution",
    icon: <CheckSquare color="#ff6b3d" />,
    subtitle: "On-demand expertise for quick fixes and troubleshooting.",
    linkTitle: "Fix My Issue",
    link: "/contact-us",
  },
];
