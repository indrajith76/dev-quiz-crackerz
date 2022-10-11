import React from "react";
import Option from "../Option/Option";

const Question = ({ quizQuestion }) => {
  const { options, id, question, correctAnswer } = quizQuestion;
  const newQuestion = question.replace("<p>", "").replace("</p>", "");
  return (
    <div className="border p-5 w-3/4 mx-auto">
      <h4 className="text-2xl">{newQuestion}</h4>
      <div className="grid md:grid-cols-2 gap-3 mt-5">
        {options.map((option, idx) => (
          <Option
            key={idx}
            option={option}
            correctAnswer={correctAnswer} 
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
