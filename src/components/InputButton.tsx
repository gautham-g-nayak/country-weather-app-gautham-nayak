import { Link } from "react-router-dom";
import "./InputButton.css";
import { InputButtonProps } from "../types";

const InputButton = ({
  label,
  data,
  to,
  buttonCondition = true,
  className,
}: InputButtonProps) => {
  return (
    <Link
      to={to}
      state={data}
      className={className}
      style={{
        pointerEvents: buttonCondition ? "auto" : "none",
        backgroundColor: buttonCondition ? "#0AA1DD" : "#babfc4",
      }}
    >
      {label}
    </Link>
  );
};

export default InputButton;
