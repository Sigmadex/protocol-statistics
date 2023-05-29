const buttonStyles = {
  // boxSizing: 'border-box',
  // mozBoxSizing: 'border-box',
  // webkitBoxSizing: 'border-box',
  width: "144px",
  height: "36px",
  border: "1px solid #404C55",
  borderRadius: "10px",
  backgroundColor: "#404C55",
  fontSize: "14px",
  fontWeight: "600",
  cursor: "pointer",
  color: "#ffffff",
  boxShadow: "0px 4px 25px rgba(64, 76, 85, 0.15)",
};

export const SigmadexButton = ({ buttonText = "Button", func }) => {
  return (
    <button style={buttonStyles} onClick={func}>
      {buttonText}
    </button>
  );
};
