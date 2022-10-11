import React, { useState } from "react";
import Option from "../Option/Option";

const Question = ({ quizQuestion }) => {
  const { options, id, question, correctAnswer } = quizQuestion;
  const newQuestion = question.replace("<p>", "").replace("</p>", "");
  const [lock, setLock] = useState(false);

  return (
    <div className="border p-5 w-3/4 mx-auto">
      <h4 className="text-2xl">{newQuestion}</h4>
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
