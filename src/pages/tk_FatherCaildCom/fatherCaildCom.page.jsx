import { cloneDeep } from "lodash";
import { useState } from "react";
import CardItemComponent from "../../components/cardItem/CardItem.component";
import "./fatherChild.css";

let init_Array = [
  {
    img: "https://img.yzcdn.cn/vant/cat.jpeg",
    title: "cat",
    id: "1",
  },
  {
    img: "https://img.yzcdn.cn/vant/cat.jpeg",
    title: "cat",
    id: "2",
  },
  {
    img: "https://img.yzcdn.cn/vant/cat.jpeg",
    title: "cat",
    id: "3",
  },
  {
    img: "https://img.yzcdn.cn/vant/cat.jpeg",
    title: "cat",
    id: "4",
  },
];

const FatherChildCom = () => {
  const [arr, setArr] = useState(init_Array);

  const handle_Delete_Item = (id) => {
    let newArray = cloneDeep(arr);
    setArr(newArray.filter((item) => item.id !== id));
  };

  // const showArr = (arrFunc) => {
  //   let newArr = [];
  //   let inArr = [];
  //   for (let i = 0; i < arrFunc.length; i++) {
  //     if (i > 0 && i % 3 === 0) {
  //       newArr = [
  //         ...newArr,
  //         <div className="row" key={i + "rowCards"}>
  //           {[...inArr]}
  //         </div>,
  //       ];
  //       inArr = [];
  //     }
  //     inArr = [
  //       ...inArr,
  //       <div key={arrFunc[i].id} className="col">
  //         <CardItemComponent
  //           {...arrFunc[i]}
  //           onDeleteItem={handle_Delete_Item}
  //         ></CardItemComponent>
  //       </div>,
  //     ];
  //     if (inArr.lengt > 0) {
  //       newArr = [
  //         ...newArr,
  //         <div className="row" key={arrFunc.length + "rowCards"}>
  //           {[...inArr]}
  //         </div>,
  //       ];
  //     }
  //     return newArr;
  //   }
  // };
  return (
    <div className="animals-Grid">
      {arr.map((item) => {
        return (
          <CardItemComponent
            key={item.id}
            {...item}
            onDeleteItem={handle_Delete_Item}
          ></CardItemComponent>
        );
      })}
    </div>
  );
};

export default FatherChildCom;
