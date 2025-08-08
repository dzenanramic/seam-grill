import React from "react";

export default function ContactPage() {
  return (
    <main className=" bg-[#121212] text-[#E0E0E0]">
      <section className="container px-4 py-16 max-w-4xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 ">
            Kontaktirajte nas
          </h1>
          <p className="text-[#aaa] max-w-md mx-auto">
            Dođite i probajte najbolje pite u gradu ili nas pozovite za narudžbu
          </p>
        </div>

        <div className=" items-center">
          {/* Contact Information */}
          <div className="bg-[#1E1E1E] backdrop-blur-sm rounded-2xl p-6 border border-[#333346] shadow-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#E11D48] p-3 rounded-lg mr-4">
                  <LocationIcon />
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-1">Adresa</h2>
                  <p className="text-[#b0b0b0]">
                    Kralja Petra I Karađorđevića 32, Banja Luka
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#E11D48] p-3 rounded-lg mr-4">
                  <PhoneIcon />
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-1">Telefon</h2>
                  <a
                    href="tel:+38765185575"
                    className="text-lg hover:text-red-400 transition-colors duration-300"
                  >
                    +387 65 185 575
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#E11D48] p-3 rounded-lg mr-4">
                  <ClockIcon />
                </div>
                <div>
                  <h2 className="font-bold text-xl mb-1">Radno vrijeme</h2>
                  <p className="text-[#b0b0b0]">Pon - Ned: 06:00 - 23:00</p>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="pt-4">
                <h3 className="font-bold text-xl mb-4">Pratite nas</h3>
                <div className="flex space-x-4">
                  <SocialLink
                    href="https://www.facebook.com/p/Pite-ispod-sa%C4%8Da-SEAM-Banja-Luka-61556173691835/?locale=hr_HR"
                    icon={<FacebookIcon />}
                    label="Facebook"
                  />
                  <SocialLink
                    href="https://www.instagram.com/seam.restaurant.bl/"
                    icon={<InstagramIcon />}
                    label="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Social Link Component
type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center group"
      aria-label={label}
    >
      <div className="bg-[#E11D48] p-3 rounded-full group-hover:bg-red-500 transition-colors duration-300">
        {icon}
      </div>
      <span className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </a>
  );
}

// Icons
function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#E0E0E0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#E0E0E0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#E0E0E0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
