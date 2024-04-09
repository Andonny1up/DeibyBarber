import PublicHeader from "./PublicHeader";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const PublicPage = () => {
  return (
    <div>
      <PublicHeader/>
      <main>
        <HeroSection/>
        <AboutSection/>
      </main>
    </div>
  );
}

export default PublicPage;