
import Image from "next/image";
import ashik from "../../../public/assets/images/ashik.png";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
const HeroSection = () => {
  return (


    <section className="hero-background">
     
      <section id="content" >
      <div className="relative text-white z-30 mx-auto px-5 lg:px-0 max-w-7xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
          <div className="my-5">
            <p className="lg:text-4xl text-2xl font-bold my-2 uppercase tracking-wider z-30">
              I AM <span className="text-primary font-semibold">MD. ASHIKUR RAHMAN</span>
            </p>

            <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight">
              AN ENTHUSIASTIC WEB APPLICATION DEVELOPER
            </h1>

            <div className="mt-5 flex items-center gap-4">
              <a href="/assets/files/Resume(24-02-26).pdf" className="px-4 py-2 border border-primary rounded-full hover:bg-primary hover:text-black transition-colors duration-300" download>
                Download Resume
              </a>

              <div className="flex items-center gap-3">
                <a href="https://github.com/md-ashikur" target="_blank" aria-label="GitHub" >
                  <PiGithubLogoFill aria-hidden="true" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300"/>
                </a>
                <a href="https://www.linkedin.com/in/md-ashikur-rahman/" target="_blank" aria-label="LinkedIn" >
                  <FaLinkedinIn aria-hidden="true" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300"/>
                </a>
                <a href="https://www.facebook.com/ashikur.rahman999" target="_blank" aria-label="facebook" >
                  <FaFacebookF aria-hidden="true" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-end relative lg:mt-2">
            <div className="relative grayscale hover:grayscale-0 hover:scale-105 transition duration-500 ">
              <Image src={ashik} alt="Ashik" className="h-auto w-130" />
            </div>
          </div>
        </div>
      </div>
    </section>
     <div className="bg-gradiant pt-20  z-50"></div>
    </section>
  );
};

export default HeroSection;