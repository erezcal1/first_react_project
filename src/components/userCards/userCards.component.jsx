import { Fragment } from "react";

const UserCardsComponent = ({ card, onDeleteCard, onEditCard }) => {
  const handleBtnDelete = () => {
    onDeleteCard(card._id);
  };
  const handleBtnEdit = () => {
    onEditCard(card._id);
  };
  return (
    <Fragment>
      <div className="col mb-4">
        <div className="card border-0">
          <div className="card-body">
            <h5 className="card-title">{card.biz_Name}</h5>
            <h6>{card.biz_Description}</h6>
            <img
              src={card.biz_Image}
              className="card-img-top"
              alt={card.biz_Name}
            ></img>
            <p className="card-text">{card.biz_Address}</p>
            <button className="btn btn-warning" onClick={handleBtnEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleBtnDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default UserCardsComponent;
