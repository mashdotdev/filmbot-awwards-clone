import { Hero } from "./components/sections/hero";
import { SecondSection } from "./components/sections/second-section";
import { ThirdSection } from "./components/sections/third-section";

function App() {
  return (
    <main className="">
      <Hero />
      <SecondSection />
      <ThirdSection />
      {/*<div className="h-screen"></div>*/}
    </main>
  );
}

export default App;
