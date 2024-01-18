import { Element } from "react-scroll";
import { ArrowDown } from "../ArrowDown";
import { Header } from "../Header";
import { HomeFirstDescription } from "./HomeFirstDescription";
import { HomeBackImage } from "./HomeBackImage";
export const Home = () => {
  return (
    <section className="flex flex-col items-center w-full h-auto">
      <Header />
      <ArrowDown />
      <Element
        name="Home"
        className="flex items-center justify-between flex-col h-screen w-full"
      >
        <HomeBackImage url={"./src/Static/FondoHome.jpg"} />
        <HomeFirstDescription />
      </Element>
      
      <Element
        name="About"
        className="flex items-center justify-between flex-col  h-screen w-full"
      >
        about
      </Element>
      <Element
        name="Services"
        className="flex items-center justify-between flex-col  h-screen w-full"
      >
        about
      </Element>

    </section>
  );
};
