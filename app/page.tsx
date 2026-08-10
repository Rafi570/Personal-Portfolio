import About from "./components/Home/About";
import Banner from "./components/Home/Banner";
import Certificates from "./components/Home/Certificates";
import Experience from "./components/Home/Experience";
import GetinT from "./components/Home/GetinT";
import Portfolio from "./components/Home/Portfolio";
import TechnologyUsed from "./components/Home/TechnologyUsed";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <TechnologyUsed />
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <GetinT></GetinT>
      <Certificates></Certificates>
    </div>
  );
}
