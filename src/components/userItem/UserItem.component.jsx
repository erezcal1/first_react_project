const UserItem = ({ name, email, phone, id, onDeleteItem }) => {
  const handle_Button_Click = () => {
    onDeleteItem(id);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className=""> {name} </span>
      <span className=""> {email} </span>
      <span className=""> {phone} </span>
      <button className="btn btn-danger" onClick={handle_Button_Click}>
        Delete
      </button>
    </li>
  );
};
export default UserItem;
