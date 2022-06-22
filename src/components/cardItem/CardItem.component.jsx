import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const CardItemComponent = ({ img, title, id, onDeleteItem }) => {
  const handle_Button_Click = () => {
    onDeleteItem(id);
  };
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
          <button className="btn btn-danger" onClick={handle_Button_Click}>
            <FontAwesomeIcon icon={faTrashCan} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardItemComponent;
