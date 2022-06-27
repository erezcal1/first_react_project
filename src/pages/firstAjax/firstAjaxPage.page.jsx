import axios from "axios";
import { Fragment, useState } from "react";
import FakeApiCardComponent from "../../components/fakeApiCard/fakeApiCard.component";

const FirstAjaxPage = () => {
  const [itemArr, setItemArr] = useState([]);
  const handleBtnClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        console.log("data from axios", data.data);
        setItemArr(data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Fragment>
      <button className="btn btn-success" onClick={handleBtnClick}>
        Send Request
      </button>
      {itemArr.map((item, idx) => {
        return (
          <FakeApiCardComponent key={idx} {...item}></FakeApiCardComponent>
        );
      })}
    </Fragment>
  );
};
export default FirstAjaxPage;
