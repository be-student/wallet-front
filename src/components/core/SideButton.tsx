import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  where: string;
}
const SideButton: FC<Props> = ({ children, where }) => {
  const location = useLocation();
  return (
    <Link
      to={where}
      style={{
        width: "80%",
        margin: "0.3rem 0",
        padding: "0.5rem",
        borderRadius: "5px",
        textDecoration: "none",
        color: location.pathname === where ? "white" : "black",
        backgroundColor: location.pathname === where ? "#03C9D7" : "white",
      }}
    >
      {children}
    </Link>
  );
};
export default SideButton;
