import { cloneDeep } from "lodash";
import { useState } from "react";
import UserItem from "../../components/userItem/UserItem.component";

let initial_Users = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "123-456-7890",
    id: "5e9f8f8f8f8f8f8f8f8f8f8f",
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    phone: "123-456-7890",
    id: "6e9f8f8f8f8f8f8f8f8f8f8f",
  },
  {
    name: "Shlomo Doe",
    email: "shlomo@gmail.com",
    phone: "123-456-7890",
    id: "7e9f8f8f8f8f8f8f8f8f8f8f",
  },
  {
    name: "Snir Doe",
    email: "snir@gmail.com",
    phone: "123-456-7890",
    id: "8e9f8f8f8f8f8f8f8f8f8f8f",
  },
];
const UsersPage = () => {
  const [usersArray, setUsersArray] = useState(initial_Users);

  const handle_Delete_Item = (id) => {
    console.log(id);
    let newArray = cloneDeep(usersArray);
    setUsersArray(newArray.filter((item) => item.id !== id));
  };
  return (
    <ul className="list-group">
      {usersArray.map((user) => (
        <UserItem
          key={user.id}
          {...user}
          onDeleteItem={handle_Delete_Item}
        ></UserItem>
      ))}
    </ul>
  );
};

export default UsersPage;
