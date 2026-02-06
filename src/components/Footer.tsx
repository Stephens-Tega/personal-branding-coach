import SocialLinks from "./SocialLinks";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const links = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ujuruthstevens", icon: "linkedin" as const },
    { name: "Facebook", url: "https://www.facebook.com/share/14VMKrM2Ncf/", icon: "facebook" as const },
    { name: "YouTube", url: "https://www.youtube.com/@UjuRuthStevens", icon: "youtube" as const },
    { name: "TikTok", url: "https://tiktok.com/@ujuruthstevens", icon: "tiktok" as const },
  ];

  return (
    <footer className="border-t bg-zinc-50">
      <div className="landing-container px-6 max-w-7xl mx-auto py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-md bg-brand-purple flex items-center justify-center text-white font-bold">Cs</div>
            <div>
              <div className="font-semibold">Women's Identity & Clarity Coach</div>
              <div className="text-sm text-zinc-600">Helping women rediscover identity, purpose, and clarity.</div>
            </div>
          </div>
          <p className="text-sm text-zinc-600">Offering coaching, clarity frameworks, and community support to help you live aligned for legacy.</p>
        </div>

        <div className="md:col-span-2 flex flex-row gap-8 items-start">
          <div className="flex-1">
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#clarity" className="hover:underline">The Clarity Blueprint</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">My Story</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="text-sm font-semibold mb-3">Contact</h4>
            <div className="flex items-center gap-2 mb-3">
              <WhatsAppIcon size={18} />
              <a href={`https://wa.me/2348062501417?text=Hello%20I%20am%20interested%20in%20your%20services`} className="text-sm text-green-600 hover:underline">Chat on WhatsApp</a>
            </div>
            <div className="text-sm mb-4">
              <a href="mailto:iamujustevens@gmail.com" className="text-zinc-700 hover:underline">iamujustevens@gmail.com</a>
            </div>

            <div className="mt-2">
              <SocialLinks links={links} horizontal />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-zinc-600 py-4">© {new Date().getFullYear()} Personal Branding Coach — All rights reserved.</div>
    </footer>
  );
}
