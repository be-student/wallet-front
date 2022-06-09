import { FC } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: any;
}
const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#06B2BD",
        border: "none",
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
      }}
    >
      {children}
    </button>
  );
};
export default Button;
