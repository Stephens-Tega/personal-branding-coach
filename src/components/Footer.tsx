import Image from "next/image";
import SocialLinks from "./SocialLinks";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ujuruthstevens",
      icon: "linkedin" as const,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/14VMKrM2Ncf/",
      icon: "facebook" as const,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@UjuRuthStevens",
      icon: "youtube" as const,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@ujuruthstevens",
      icon: "tiktok" as const,
    },
  ];

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50 dark:border-white/10 dark:bg-[#09070e]">
      <div className="landing-container mx-auto grid max-w-7xl gap-8 px-6 py-12 text-zinc-700 dark:text-zinc-300 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-start gap-3">
            <Image
              src="/images/1000148404.jpg.jpeg"
              alt="Women's Identity and Clarity Coach logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-cover"
            />
            <div>
              <div className="font-semibold">
                Women&apos;s Identity &amp; Clarity Coach
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Helping women rediscover identity, purpose, and clarity.
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Offering coaching, clarity frameworks, and community support to
            help you live aligned for legacy.
          </p>
        </div>

        <div className="flex flex-col items-start gap-8 sm:flex-row md:col-span-2">
          <div className="flex-1">
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#clarity" className="hover:text-brand-purple hover:underline dark:hover:text-brand-yellow">
                  The Clarity Blueprint
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-purple hover:underline dark:hover:text-brand-yellow">
                  Contact
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-brand-purple hover:underline dark:hover:text-brand-yellow">
                  My Story
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <div className="mb-3 flex items-center gap-2">
              <WhatsAppIcon size={18} />
              <a
                href="https://wa.me/2348062501417?text=Hello%20I%20am%20interested%20in%20your%20services"
                className="text-sm text-green-700 hover:underline dark:text-green-300"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mb-4 text-sm">
              <a
                href="mailto:iamujustevens@gmail.com"
                className="text-zinc-700 hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
              >
                iamujustevens@gmail.com
              </a>
            </div>

            <div className="mt-2">
              <SocialLinks links={links} horizontal />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200/70 py-4 text-center text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Women&apos;s Identity &amp; Clarity
        Coach. All rights reserved.
      </div>
    </footer>
  );
}
