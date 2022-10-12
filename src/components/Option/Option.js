import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { CountContext } from "../Quiz/Quiz";
import "./Option.css";

const Option = ({ option, correctAnswer, lock, setLock }) => {
  const [check, setCheck] = useState(false);
  const [count, setCount, countWrong, setCountWrong] = useContext(CountContext);

  const optionHandler = () => {
    setCheck(!check);
    setLock(!lock);
  };

  useEffect(() => {
    if (check) {
      if (option === correctAnswer) {
        swal("Good job!", "You selected the correct answer!", "success");
        setCount(count + 1);
      } else {
        swal("Opps.!", "You selected the wrong answer!", "error");
        setCountWrong(countWrong + 1);
      }
    }
  }, [check]);

  const clicked = () => {};
  return (
    <div
      onClick={optionHandler}
      className={
        check
          ? "flex gap-2 border p-3 cursor-pointer bg-white text-slate-900 shadow-md hover:shadow-teal-500"
          : "flex gap-2 border p-3 cursor-pointer hover:bg-white text-slate-400 hover:text-slate-900 shadow-md hover:shadow-teal-500"
      }
    >
      <input type="radio" onChange={clicked} checked={check} />
      <p>{option}</p>
      <button></button>
    </div>
  );
};

export default Option;
