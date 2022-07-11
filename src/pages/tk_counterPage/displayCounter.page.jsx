import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter.count);
  console.log(counter);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  );
};
export default DisplayCounter;
