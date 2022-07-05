import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import UserCardsComponent from "../../components/userCards/userCards.component";
import { cloneDeep } from "lodash";
import { toast } from "react-toastify";

const UserCardsPage = () => {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    // handleBtnClick();
    getAllCards();
  }, []);
  const onDeleteCard = (id) => {
    //delete from server - axios.delete
    //delete from state - setUserCards

    axios
      .delete(`/cards/${id}`)
      .then((res) => {
        let newArray = cloneDeep(userCards);
        setUserCards(newArray.filter((card) => card._id !== id));
      })
      .catch((error) => {
        console.log(error);
        toast.error("cannot delete the selected card", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const getAllCards = () => {
    /*
        getAllCards will send ajax get request to the server
        and will get array of biz cards
        then it will update the cardsArr state
        if it will fail then it will create toast popup
    */
    axios
      .get(`/cards`)
      .then((res) => {
        console.log(res.data);
        setUserCards(res.data);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("cannot get cards", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const renderRowsFromArr = (arrOfCards) => {
    /*
        renderRowsFromArr will receive array of bizCards
        and will create html elms to display the bizCards
        in the page
    */
    let newArr = [];
    let inArr = [];
    let length = arrOfCards.length;
    for (let i = 0; i < length; i++) {
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
        <div key={arrOfCards[i]._id} className="col">
          <UserCardsComponent
            card={arrOfCards[i]}
            onDeleteCard={onDeleteCard}
          ></UserCardsComponent>
        </div>,
      ];
    }
    if (inArr.length > 0) {
      newArr = [
        ...newArr,
        <div className="row" key={length + "cards row"}>
          {[...inArr]}
        </div>,
      ];
    }
  };
  return <Fragment>{renderRowsFromArr(userCards)}</Fragment>;
};
export default UserCardsPage;
