import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-sidebar-border bg-[#FBBF24]">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* First column - spans full width on mobile, 3 columns on desktop */}
        <div className="md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-bold text-[#c90404]">
              Pite pod sačem &quot;Sač&quot; - Banja Luka
            </h2>
          </div>
          <p className="text-sm text-[#c90404] max-w-md">
            Najbolje pite u Banja Luci. Posjetite nas i uvjerite se u kvalitet!
          </p>
        </div>

        {/* Second column - working hours */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#c90404]">
            Radno vrijeme
          </h3>
          <p className="text-[#c90404]">06:00 - 22:00</p>
        </div>

        {/* Third column - contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#c90404]">Kontakt</h3>
          <p className="text-sm text-[#c90404]">
            Patrijarha Makarija Sokolovića 4, Banja Luka
          </p>
          <p className="text-sm text-[#c90404] mt-2">+387 65 706 148</p>
        </div>

        {/* Map section - full width on mobile, right column on desktop */}
        <div className="rounded-2xl overflow-hidden border-2 border-sidebar-border shadow-xl h-[300px] md:h-[350px] lg:h-[450px] md:col-span-3 lg:col-span-1 lg:row-span-2 lg:row-start-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.0274770707365!2d17.1870089!3d44.76723129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e030044b7ead7%3A0xe3271ba3ae8c019c!2zU0HEjA!5e1!3m2!1shr!2sba!4v1757607016492!5m2!1shr!2sba"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Separator className="my-6 bg-sidebar-border" />

      <div className="text-center text-xs text-[#c90404]">
        © {new Date().getFullYear()} Pite pod sačem. Sva prava zadržana.
      </div>
    </footer>
  );
}
