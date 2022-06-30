import { Fragment, useState } from "react";
import axios from "axios";
import UserCardsComponent from "../../components/userCards/userCards.component";

const UserCardsPage = () => {
  const [userCards, setUserCards] = useState([]);
  const handleBtnClick = () => {
    axios
      .get("/cards")
      .then((res) => {
        console.log(res.data);
        setUserCards(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Fragment>
      <button className="btn btn-success" onClick={handleBtnClick}>
        Send Request
      </button>
      <div className="row">
        {userCards.map((card, idx) => {
          return <UserCardsComponent key={idx} {...card}></UserCardsComponent>;
        })}
      </div>
    </Fragment>
  );
};
export default UserCardsPage;
