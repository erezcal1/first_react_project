import AmazonSingleImg from "./AmazonSingleImg.component";
import "../amazonImg/AmazonImgComponent.css";
import { useRef } from "react";

const ImgArray = [
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
  {
    src:
      "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg",
    title: "Amazon Echo",
  },
];

const AmazonImgComponent = () => {
  const itemsDiv = useRef();
  const handle_Prev_btn_Press = () => {
    itemsDiv.current.scrollLeft -= 300;
  };
  const handle_Next_btn_Press = () => {
    itemsDiv.current.scrollLeft += 300;
  };
  return (
    <div className="items-wrapper mt-2 position-relative">
      <h3>title</h3>
      <button
        className="btn btn-success over-btn"
        onClick={handle_Prev_btn_Press}
      >
        prev
      </button>
      <button
        className="btn btn-success over-btn over-btn-right"
        onClick={handle_Next_btn_Press}
      >
        next
      </button>
      <div className="items-wrapper-imgs" ref={itemsDiv}>
        {ImgArray.map((img) => {
          return <AmazonSingleImg {...img}></AmazonSingleImg>;
        })}
      </div>
    </div>
  );
};
export default AmazonImgComponent;
