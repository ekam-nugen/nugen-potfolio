import {
  Briefcase,
  Scissors,
  Users,
  Award,
  Building2,
  BarChart3,
  Star,
  FileBadge,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function CompanyStatsSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 leading-snug">
          We’re a 500+ Team of Proven AI, Cloud, Web, Mobile, UI/UX,
          <br className="hidden md:block" />
          and Custom Software Experts Trusted by Fortune 500s and
          <br className="hidden md:block" />
          Ambitious Startups Like You.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 cursor-pointer rounded-xl p-5 shadow transition-all duration-300 hover:-translate-y-1 hover:border-[#ff6b3d]/50 hover:bg-[#fff5f0]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#ffbb9f]/30 text-[#ff6b3d] shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#ffbb9f]/50">
                  {stat?.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold">{stat?.title}</h3>
                  <p className="text-sm text-gray-600">{stat?.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { icon: <Briefcase size={22} />, title: "Public Listed*", subtitle: "BSE" },
  { icon: <Scissors size={22} />, title: "2012+", subtitle: "Established" },
  {
    icon: <ShieldCheck size={22} />,
    title: "500+",
    subtitle: "Skilled Employees",
  },
  {
    icon: <CheckCircle size={22} />,
    title: "50+",
    subtitle: "Technologies Supported",
  },
  { icon: <Users size={22} />, title: "250+", subtitle: "Clients Worldwide" },
  {
    icon: <Award size={22} />,
    title: "50+",
    subtitle: "Awards in the Last 11 Years",
  },
  {
    icon: <Building2 size={22} />,
    title: "02",
    subtitle: "Development Centers",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "30+%",
    subtitle: "YOY Organic Revenue Growth",
  },
  { icon: <Star size={22} />, title: "300+", subtitle: "Five Star Reviews" },
  {
    icon: <FileBadge size={22} />,
    title: "ISO 9001 & ISO 27001",
    subtitle: "Certified",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "SOC 2 Type II",
    subtitle: "Certified",
  },
  {
    icon: <img src="/salesforce.svg" alt="Salesforce" className="w-5 h-5" />,
    title: "Salesforce",
    subtitle: "Partner",
  },
  {
    icon: <img src="/adobe.svg" alt="Adobe" className="w-5 h-5" />,
    title: "Adobe",
    subtitle: "Partner",
  },
  {
    icon: <img src="/microsoft.svg" alt="Microsoft" className="w-5 h-5" />,
    title: "Microsoft",
    subtitle: "Partner",
  },
];
