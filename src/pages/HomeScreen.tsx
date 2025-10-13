import { AboutMe } from "../components/AboutMe";
import { ContactMe } from "../components/ContactMe";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { MyProjects } from "../components/MyProjects";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <FadeInOnScroll>
        <HeroSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <AboutMe />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Skills />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <MyProjects />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ContactMe />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>
    </>
  );
};
