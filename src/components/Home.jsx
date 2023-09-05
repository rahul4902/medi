import Banner from "./Banner";
import Faq from "./Faq";
import FullBodyCheckup from "./FullBodyCheckup";
import OurCommit from "./OurCommit";
import PopularPackages from "./PopularPackages";
import SearchForm from "./SearchForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <FullBodyCheckup />
      <PopularPackages />
      <OurCommit />
      <Faq />
    </div>
  );
};
export default Home;
