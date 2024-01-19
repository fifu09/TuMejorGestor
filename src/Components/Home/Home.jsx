import { Element } from "react-scroll";
import { ArrowSmooth } from "../ArrowSmooth";
import { Header } from "../Header";
import { HomeFirstDescription } from "./HomeFirstDescription";
import { HomeBackImage } from "./HomeBackImage";
import { HomeAbout } from "./HomeAbout";
import { HomeServices } from "./HomeServices";
export const Home = () => {
  const ElementStyle =
    "flex relative items-center justify-between flex-col h-screen w-full overflow-hidden";
  return (
    <section className="flex flex-col items-center w-full">
      <Header />
      <Element name="Home" className={ElementStyle}>
        <HomeBackImage url={"./src/Static/FondoHome.jpg"} />
        <HomeFirstDescription />
        <ArrowSmooth tagName="About" />
      </Element>

      <Element name="About" className={ElementStyle}>
        <HomeAbout />
        <ArrowSmooth tagName="Services" />
      </Element>
      <Element name="Services" className={ElementStyle}>
        <HomeServices />
      </Element>
    </section>
  );
};
