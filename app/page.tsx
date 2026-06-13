import About from "./components/Home/About";
import Banner from "./components/Home/Banner";
import Portfolio from "./components/Home/Portfolio";
import TechnologyUsed from "./components/Home/TechnologyUsed";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <TechnologyUsed />
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}
