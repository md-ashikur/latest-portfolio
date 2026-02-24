import About from "@/components/about/About";
import HeroSection from "@/components/home-page/HeroSection";
import FeaturedProjects from "@/components/home-page/FeaturedProjects";

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <About/>
            <FeaturedProjects/>
        </div>
    );
};

export default HomePage;