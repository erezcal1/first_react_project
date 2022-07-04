import { Fragment, useEffect, useState } from "react";
import axios from "axios";
// import UserCardsComponent from "../../components/userCards/userCards.component";

const UserCardsPage = () => {
  const [userCards, setUserCards] = useState([]);
  useEffect(() => {
    handleBtnClick();
    console.log("i fire once");
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
          if (i > 0 && i % 3 === 0) {
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
            <div className="col" key={i + "cards row"}>
              {res.data[i].biz_Name}
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
