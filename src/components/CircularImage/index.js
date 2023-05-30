export const CircularImage = ({
  url,
  alt = null,
  width = null,
  height = null,
  color = null,
}) => {
  return (
    <img
      alt={alt ? alt : ""}
      src={url}
      style={{
        backgroundColor: color ? color : "transparent",
        width: width ? width : 28,
        height: height ? height : 28,
        borderRadius: "50%",
      }}
    />
  );
};
