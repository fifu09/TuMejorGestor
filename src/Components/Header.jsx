import { Link } from "react-scroll";
import { Logo } from "./Logo";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldAddClass = window.scrollY > 1; 
      setIsScrolled(shouldAddClass);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  const headerClassName = `flex items-center p-6 w-full ${isScrolled ? "fixed top-0 bg-Black65 backdrop-blur-lg" : "absolute"}`;

  return (
    <header className={headerClassName}>
      <Logo />
      <nav className="flex justify-center w-1/2 gap-20 text-white text-2xl z-50">
        <Link to="Home" smooth={true} duration={500} className="hover:cursor-pointer">
          Home
        </Link>
        <Link to="About" smooth={true} duration={500} className="hover:cursor-pointer">
          About us
        </Link>
        <Link to="Services" smooth={true} duration={500} className="hover:cursor-pointer">
          Services
        </Link>
      </nav>
    </header>
  );
};
