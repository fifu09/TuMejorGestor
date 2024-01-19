import { Link } from "react-scroll";

export const LinkScroll = (props) => {
  return (
    <Link
      to={props.to}
      smooth={true}
      duration={500}
      className="hover:cursor-pointer hover:scale-110 select-none"
    >
      {props.to}
    </Link>
  );
};
