import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="grid grid-cols-6 gap-2">{renderedImages}</div>;
};

export default ImageList;
