import Banner from "../Components/Banner";
import SectionTitle from "../Components/SectionTitle";
import Swipper from "../Components/Swipper";

const Home = () => {
  return (
    <div>
        {/* banner */}
      <Banner></Banner>

      {/* section title */}
      <SectionTitle
        title={"open at 11 am"}
        subTitle={"you can try on different thing"}
      ></SectionTitle>

      {/* swipper slider */}

      <div className="mt-10">
        <Swipper></Swipper>
      </div>
    </div>
  );
};

export default Home;
