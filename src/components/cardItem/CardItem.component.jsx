const CardItemComponent = ({ img, title }) => {
  return (
    <div className="col">
      <div className="card card-width">
        <img src={img} className="card-img-top" alt={title}></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Shop for a fridge that fits your budget and needs. We have a wide
            range of brands and models.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardItemComponent;
