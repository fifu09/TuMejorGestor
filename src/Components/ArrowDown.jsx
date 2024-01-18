import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";
export const ArrowDown = () => {
  return (
    <Link to="About" smooth={true} duration={500} className="absolute h-screen top-[93%] p-4 animate-UpDownLoop">
      <KeyboardArrowDownIcon className="scale-[3] text-white stroke-black hover:cursor-pointer" />
    </Link>
  );
};
