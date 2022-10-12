import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Option from "../Option/Option";
import swal from "sweetalert";

const Question = ({ quizQuestion }) => {
  const { options, id, question, correctAnswer } = quizQuestion;
  const newQuestion = question.replace("<p>", "").replace("</p>", "");
  const [lock, setLock] = useState(false);

  const viewAnswer = ()=>{
    swal(`The Correct answer is - "${correctAnswer}"`);
  }

  return (
    <div className="border p-5 w-3/4 mx-auto">
      <div className="flex justify-between">
        <h4 className="text-2xl">{newQuestion}</h4>
        <button onClick={viewAnswer} className="hover:text-teal-500">
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>
      <div
        className={
          lock
            ? "grid md:grid-cols-2 gap-3 mt-5 pointer-events-none"
            : "grid md:grid-cols-2 gap-3 mt-5"
        }
      >
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            correctAnswer={correctAnswer}
            lock={lock}
            setLock={setLock}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
