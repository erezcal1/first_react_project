import { useState } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../../store/counter";
const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const handle_Input_Change = (event) => {
    setCounter(event.target.value);
  };
  const handle_Submit = (event) => {
    event.preventDefault();
    dispatch(counterActions.updateNumber(counter));
    // dispatch(counterActions.increment(counter));
  };
  return (
    <form onSubmit={handle_Submit}>
      <input type="text" value={counter} onChange={handle_Input_Change} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default CounterPage;
