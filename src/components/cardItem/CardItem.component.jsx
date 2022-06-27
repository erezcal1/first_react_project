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
        <h5 className="card-title">{title}</h5>
        <img src={img} className="card-img-top" alt={title}></img>
      </div>
    </div>
  );
};
export default CardItemComponent;
