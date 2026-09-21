import { Hero } from "./components/sections/hero";
import { SecondSection } from "./components/sections/second-section";
import { ThirdSection } from "./components/sections/third-section";
import { FourthSection } from "./components/sections/fourth-section";
import { Footer } from "./components/sections/footer";
import { ContactSection } from "./components/sections/contact-section";
import { VersatileSection } from "./components/sections/versatile-section";

function App() {
  return (
    <main className="">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <VersatileSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
