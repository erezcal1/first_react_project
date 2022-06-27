const AmazonSingleImg = ({ src, title }) => {
  return (
    <div className="col">
      <img src={src} alt={title} className="w-100" />
    </div>
  );
};
export default AmazonSingleImg;
