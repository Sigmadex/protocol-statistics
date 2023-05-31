export const CircularImage = ({
  url,
  alt = null,
  width = 28,
  height = 28,
  color = null,
  style = null,
}) => {
  return (
    <img
      alt={alt ? alt : ""}
      src={url}
      style={{
        ...style,
        backgroundColor: color ? color : "transparent",
        width: width,
        height: height,
        borderRadius: "50%",
      }}
    />
  );
};
