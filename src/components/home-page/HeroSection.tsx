
import Image from "next/image";
import ashik from "../../../public/assets/images/ashik.png";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white min-h-[84vh] relative overflow-hidden flex items-center">
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className=" mx-auto px-6 lg:px-12 max-w-7xl z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm mb-4 uppercase tracking-wider text-red-500">
              I AM <span className="text-primary font-semibold">MD. ASHIKUR RAHMAN</span>
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              AN ENTHUSIASTIC WEB
              <br />APPLICATION DEVELOPER
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <a href="/assets/files/Resume(24-02-26).pdf" className="btn-primary" download>
                Download Resume
              </a>

              <div className="flex items-center gap-3">
                <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/80">GH</a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/80">in</a>
                <a href="#" aria-label="X" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/80">X</a>
              </div>
            </div>
          </div>

          <div className="flex justify-end relative">
            <div className="w-[320px] md:w-[420px] lg:w-[520px] relative grayscale border border-white/6 rounded-tl-[80px] overflow-hidden">
              <Image src={ashik} alt="Ashik" fill sizes="(max-width: 768px) 90vw, 520px" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;