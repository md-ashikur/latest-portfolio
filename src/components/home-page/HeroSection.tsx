
import Image from "next/image";
import ashik from "../../../public/assets/images/head.png";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import Link from "next/link";
const HeroSection = () => {
  return (


    <section className="hero-background">

      <section className="h-screen" >
        <div className="relative text-white z-30 mx-auto px-5 lg:px-0 ">
          <h1 className="lg:text-[200px] text-6xl text-center lg:mt-12 mt-20 font-black">HI, I&apos;M ASHIK</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 max-w-300 mx-auto ">
            <div className="relative top-80">
              <p className="max-w-98 font-light text-white/60 text-justify">Problem Solver. Full-Stack Developer building fast, scalable web applications.
                Specialized in Next.js, React, and modern backend architecture. Turning complex ideas into clean, production-ready products.</p>
            </div>



            <div className="flex flex-col items-end gap-4 space-y-4">
              <div>
                <Link href="/assets/files/Ashik-Resume.pdf" className="px-8 py-4 border border-primary rounded-full hover:bg-primary uppercase font-bold hover:text-black transition-colors duration-300" download>
                  Download Resume
                </Link>
              </div>

              <div className="flex items-center justify-around gap-2">
                <Link href="https://github.com/md-ashikur" target="_blank" aria-label="GitHub" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <PiGithubLogoFill aria-hidden="true" />
                </Link>
                <Link href="https://www.linkedin.com/in/md-ashikur-rahman/" target="_blank" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300">
                  <FaLinkedinIn aria-hidden="true"  />
                </Link>
                <Link href="https://www.facebook.com/ashikur.rahman999" target="_blank" aria-label="facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <FaFacebookF aria-hidden="true" />
                </Link>
                <Link href="https://www.codechef.com/users/ashik01" target="_blank" aria-label="CodeChef" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <SiCodechef aria-hidden="true" />
                </Link>
                <Link href="https://leetcode.com/u/ashik01/" target="_blank" aria-label="LeetCode" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <SiLeetcode aria-hidden="true" />
                </Link>
              </div>
            </div>



          </div>

          <div className="flex justify-center  lg:mt-2">

            <Image src={ashik} alt="Ashik" className="absolute top-30 h-auto w-120" />

          </div>
        </div>
      </section>

    </section>
  );
};

export default HeroSection;