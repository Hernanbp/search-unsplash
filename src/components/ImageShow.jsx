const ImageShow = ({ image }) => {
  return (
    <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-lg shadow-md">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Gallery image"}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default ImageShow;
