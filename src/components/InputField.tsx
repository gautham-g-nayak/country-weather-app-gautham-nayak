import "./InputField.css";
import { InputFieldProps } from "../types";

const InputField = ({
  onChange,
  placeHolder,
  type = "text",
  className,
}: InputFieldProps) => {
  return (
    <input
      className={className}
      placeholder={placeHolder}
      type={type}
      onChange={onChange}
    />
  );
};

export default InputField;
