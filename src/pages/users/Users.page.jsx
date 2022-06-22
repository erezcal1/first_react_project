const initial_Users = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "123-456-7890",
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    phone: "123-456-7890",
  },
  {
    name: "Shlomo Doe",
    email: "shlomo@gmail.com",
    phone: "123-456-7890",
  },
  {
    name: "Snir Doe",
    email: "snir@gmail.com",
    phone: "123-456-7890",
  },
];
const UsersPage = () => {
  return (
    <ul className="list-group">
      {initial_Users.map((user, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={new Date().getMilliseconds + index}
        >
          <span className=""> {user.name} </span>
          <span className=""> {user.email} </span>
          <span className=""> {user.phone} </span>
        </li>
      ))}
    </ul>
  );
};

export default UsersPage;
