const UserCardsComponent = (card) => {
  return (
    <div className="col-sm-4 mb-4">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title">{card.biz_Name}</h5>
          <h6>{card.biz_Description}</h6>
          <img
            src={card.biz_Image}
            className="card-img-top"
            alt={card.biz_Name}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default UserCardsComponent;
