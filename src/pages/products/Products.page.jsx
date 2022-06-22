import { cloneDeep } from "lodash";
import { useState } from "react";
import CardItemComponent from "../../components/cardItem/CardItem.component";
import "./Products.page.css";

let initial_Products = [
  {
    img:
      "data:image/jpeg;base64,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",
    title: "Fridge",
    id: "5e9f8f8f8f8f8f8f8f8f8f8f",
  },
  {
    img:
      "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/https://img.poki.com/94945631828bfdcf32a8ad0b79978913.png",
    title: "Flying Cars",
    id: "6e9f8f8f8f8f8f8f8f8f8f8f",
  },
  {
    img: "https://www1.minijuegosgratis.com/v3/games/thumbnails/226229_1.jpg",
    title: "Plane",
    id: "7e9f8f8f8f8f8f8f8f8f8f8f",
  },
  {
    img:
      "https://www.lg.com/us/images/cooking-appliances/md05229961/gallery/medium01.jpg",
    title: "Oven",
    id: "8e9f8f8f8f8f8f8f8f8f8f8f",
  },
];

const ProductPage = () => {
  const [productsArray, setProductsArray] = useState(initial_Products);

  const handle_Delete_Item = (id) => {
    // cloneDeep create an exact copy of the array
    // in that way we don't epdate the useState directly
    let newArray = cloneDeep(productsArray);
    setProductsArray(newArray.filter((item) => item.id !== id));
  };

  return (
    <div className="row">
      {productsArray.map((item) => {
        return (
          <CardItemComponent
            key={item.id}
            // img={item.img}
            // title={item.title}
            {...item}
            onDeleteItem={handle_Delete_Item}
          ></CardItemComponent>
        );
      })}
    </div>
  );
};
export default ProductPage;
