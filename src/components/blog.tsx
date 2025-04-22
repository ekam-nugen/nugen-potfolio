// Import Lucide icon
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Website Redesign Project",
    company: "TechCo",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Mobile App Development",
    company: "AppCorp",
    year: "2022",
    image:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  {
    title: "E-commerce Platform",
    company: "ShopEase",
    year: "2021",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
  },
  {
    title: "Branding & Web Identity",
    company: "DesignPro",
    year: "2020",
    image:
      "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
  },
  {
    title: "Interactive Learning App",
    company: "LearnSmart",
    year: "2019",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240801/pngtree-new-cb-background-images-photos-pics-wallpaper-pictures-image_16123145.jpg",
  },
  {
    title: "Real Estate Portal",
    company: "HomeFinder",
    year: "2018",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-premium-photo-ai-sunset-images-picture-photos-wallpaper-1920x1080-size-4k-image_16174819.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <p className="text-sm uppercase text-orange-500 font-semibold mb-2">
        Our Creative Showcase
      </p>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Innovative Portfolio Highlights
      </h2>
      <p className="text-gray-600 max-w-2xl mb-10">
        Explore our collection of diverse projects showcasing the best of web
        and mobile application design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden bg-white transition"
          >
<Image
  src={project.image}
  alt={project.title}
  className="w-full h-60 object-cover"
  width={600} // Nominal width for optimization; adjust based on context
  height={240} // Matches h-60 (240px)
/>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">
                {project.company} <span className="ml-2">{project.year}</span>
              </p>
            </div>
            <div className="absolute bottom-10 right-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow">
              <ArrowRight className="w-8 h-10 text-gray-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rotate-[-45deg]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
