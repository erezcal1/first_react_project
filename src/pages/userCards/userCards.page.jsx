import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import UserCardsComponent from "../../components/userCards/userCards.component";
import { cloneDeep, intersection } from "lodash";

const UserCardsPage = () => {
  const [userCards, setUserCards] = useState([]);
  const onDeleteCard = (id) => {
    axios
      .delete(`/cards/${id}`)
      .then((res) => {
        console.log(res);
        let newArray = cloneDeep(userCards);
        setUserCards(newArray.filter((card) => card._id !== id));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    handleBtnClick();
  }, []);
  const handleBtnClick = () => {
    axios
      .get("/cards")
      .then((res) => {
        console.log(res.data);
        setUserCards(res.data);
        let newArr = [];
        let inArr = [];
        let l = res.data.length;
        for (let i = 0; i < l; i++) {
          if (i > 0 && i % 4 === 0) {
            newArr = [
              ...newArr,
              <div className="row" key={i + "cards row"}>
                {[...inArr]}
              </div>,
            ];
            inArr = [];
          }
          inArr = [
            ...inArr,
            <div className="col">
              <UserCardsComponent
                className="col"
                key={res.data[i]._id}
                card={res.data[i]}
                onDeleteCard={onDeleteCard}
              ></UserCardsComponent>
            </div>,
          ];
        }
        if (inArr.length > 0) {
          newArr = [
            ...newArr,
            <div className="row" key={l + "cards row"}>
              {[...inArr]}
            </div>,
          ];
        }
        setUserCards(newArr);
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
      {/* <div className="row">
        {userCards.map((card, idx) => {
          return <UserCardsComponent key={idx} {...card}></UserCardsComponent>;
        })}
      </div> */}
      {userCards}
    </Fragment>
  );
};
export default UserCardsPage;
