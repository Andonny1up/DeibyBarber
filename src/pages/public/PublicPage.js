import PublicHeader from "./PublicHeader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import PersonalSection from "./PersonalSection";

const PublicPage = () => {
  return (
    <div>
      <PublicHeader/>
      <main>
        <HeroSection/>
        <PersonalSection/>
        <AboutSection/>
      </main>
    </div>
  );
}

export default PublicPage;