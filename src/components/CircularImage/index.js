export const CircularImage = ({ url, alt = null, width, height }) => {
  return (
    <img
      alt={alt ? alt : ""}
      src={url}
      style={{ width, height, borderRadius: "50%" }}
    />
  );
};
