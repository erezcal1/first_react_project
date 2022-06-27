import { Fragment } from "react";
import AmazonSingleImg from "./AmazonSingleImg.component";

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
];

const AmazonImgComponent = () => {
  return (
    <Fragment>
      {ImgArray.map((img) => {
        return <AmazonSingleImg {...img}></AmazonSingleImg>;
      })}
    </Fragment>
  );
};
export default AmazonImgComponent;
