import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";
export const ArrowSmooth = ({tagName, rotate="down"}) => {
  const rotation = rotate=="up" ? "rotate-180" : ""
  return (
    <Link to={tagName} smooth={true} duration={500} className="absolute h-screen top-[93%] p-4 animate-UpDownLoop">
      <KeyboardArrowDownIcon className= {`scale-[3] text-white stroke-black hover:cursor-pointer ${rotation}`} />
    </Link>
  );
};
