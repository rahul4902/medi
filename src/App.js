import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import FullBodyCheckup from "./components/FullBodyCheckup";
import Faq from "./components/Faq";
import WhatsAppIcon from "./components/WhatsAppIcon";
import PopularPackages from "./components/PopularPackages";
import OurCommit from "./components/OurCommit";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Banner />
        <FullBodyCheckup />
        <PopularPackages />
        <OurCommit />
        {/* Faq */}
        <Faq />
      </div>
      <WhatsAppIcon />
      <Footer />
    </div>
  );
}

export default App;
