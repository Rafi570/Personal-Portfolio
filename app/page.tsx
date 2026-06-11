import About from "./components/Home/About";
import Banner from "./components/Home/Banner";
import TechnologyUsed from "./components/Home/TechnologyUsed";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <TechnologyUsed />
      <About></About>
    </div>
  );
}
