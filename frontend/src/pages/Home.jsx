import Header from "../components/Header";
import AboutSection from "../components/Home/AboutSection";
import BlogsSection from "../components/Home/BlogsSection";
import Footer from "../components/Home/Footer";
import HeroSection from "../components/Home/HeroSection";
import QuestionsForm from "../components/Home/QuestionsForm";
import ResidencesSection from "../components/Home/ResidencesSection";
import FeaturedSection from "../components/Home/FeaturedSection";
import SearchBar from "../components/Home/SearchBar";
import ServicesSection from "../components/Home/ServicesSection";
import "/src/assets/css/pages/home.css";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResidencesSection />
      <FeaturedSection />
      <BlogsSection />
      <QuestionsForm />
      <Footer />
    </div>
  );
}

export default Home;
