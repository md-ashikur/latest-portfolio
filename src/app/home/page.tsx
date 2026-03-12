import HeroSection from "@/components/home-page/HeroSection";
import FeaturedProjects from "@/components/home-page/FeaturedProjects";
import About from "@/components/about/About";
import ContactSection from "@/components/contact/ContactSection";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <About/>
           <div className="hero-background">
             <FeaturedProjects/>
            <ContactSection />
           </div>
        </div>
    );
};

export default HomePage;