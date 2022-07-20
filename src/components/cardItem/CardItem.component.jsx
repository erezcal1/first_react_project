const CardItemComponent = ({ img, title, id, onDeleteItem }) => {
  const handle_Button_Click = () => {
    onDeleteItem(id);
  };
  return (
    <div className="col">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={img} className="card-img-top mb-2" alt={title}></img>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handle_Button_Click}
          >
            Delete Me
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardItemComponent;
