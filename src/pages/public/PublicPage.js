import PublicHeader from "./PublicHeader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PersonalSection from "./PersonalSection";
import ServiceSection from "./ServiceSection";
import InfoSection from "./InfoSection";
import Footer from "./Footer";

const PublicPage = () => {
  return (
    <div>
      <PublicHeader/>
      <main>
        <PersonalSection/>
        <AboutSection/>
        <HeroSection/>
        <ServiceSection/>
        <InfoSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default PublicPage;