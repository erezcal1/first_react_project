import { useEffect, useState } from "react";

const ClassWorkPage = () => {
  const [text, setText] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    setShowBtn(text.length >= 3);
  }, [text]);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button
        disabled={!showBtn}
        className={`btn btn-primary ${showBtn ? "" : "d-none"}`}
      >
        PressMe
      </button>
    </div>
  );
};
export default ClassWorkPage;
