import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { MyProjects } from "../components/MyProjects";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";

export const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <MyProjects />
      <Footer />
    </>
  );
};
