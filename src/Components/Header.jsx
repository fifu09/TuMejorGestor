import { Link } from "react-scroll";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { LinkScroll } from "./LinkScroll";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldAddClass = window.scrollY > 0; 
      setIsScrolled(shouldAddClass);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const headerClassName = `flex items-center p-4 w-full z-50 ${isScrolled ? "fixed top-0 bg-Black65 backdrop-blur-lg" : "absolute"}`;

  return (
    <header className={headerClassName}>
      <Logo />
      <nav className="flex justify-center w-1/2 gap-20 text-white text-2xl z-50">
        <LinkScroll to="Home" />
        <LinkScroll to="About" />
        <LinkScroll to="Services" />
      </nav>
    </header>
  );
};
