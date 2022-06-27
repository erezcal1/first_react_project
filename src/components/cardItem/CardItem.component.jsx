const CardItemComponent = ({ img, title, id, onDeleteItem }) => {
  const handle_Button_Click = () => {
    onDeleteItem(id);
  };
  return (
    <div className="col">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={img} className="card-img-top" alt={title}></img>
          <a href="#" className="">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardItemComponent;
