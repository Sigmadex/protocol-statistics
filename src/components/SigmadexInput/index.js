const sigmadexInputStyles = {
  border: "1px solid rgba(0, 0, 0, 0.23)",
  borderRadius: 10,
  width: "100%",
  height: 56,
  padding: 15,
  fontSize: 16,
  marginTop: 5,
};

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
