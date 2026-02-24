
import Image from "next/image";
import ashik from "../../../public/assets/images/ashik.png";

const HeroSection = () => {
  return (

    
    <section className="hero-background pt-20 text-white overflow-hidden ">
  
      <div className=" mx-auto px-5 lg:px-0 max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-4xl font-bold mb-4 uppercase tracking-wider ">
              I AM <span className="text-primary font-semibold">MD. ASHIKUR RAHMAN</span>
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
              AN ENTHUSIASTIC WEB APPLICATION DEVELOPER
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
            <div className="relative grayscale hover:grayscale-0 transition duration-500 ">
              <Image src={ashik} alt="Ashik" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;