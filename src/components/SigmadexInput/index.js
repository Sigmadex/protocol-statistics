import { sigmadexInputStyles } from "../utilities/formatting";

export const SigmadexInput = ({
  type = "text",
  placeholder = "",
  onChange,
}) => {
  return (
    <input
      type={type}
      style={sigmadexInputStyles}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
