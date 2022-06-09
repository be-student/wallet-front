import { FC } from "react";
import { Link } from "react-router-dom";
interface Props {
  to: string;
  children: React.ReactNode;
  color?: string;
}
const PlainLink: FC<Props> = ({ to, children, color }) => {
  return (
    <Link to={to} style={{ color: color, textDecoration: "none" }}>
      {children}
    </Link>
  );
};
export default PlainLink;
