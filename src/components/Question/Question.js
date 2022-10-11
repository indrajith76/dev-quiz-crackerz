import React from "react";

const Question = ({ quizQuestion }) => {
  console.table(quizQuestion);
  const { options, id, question, correctAnswer } = quizQuestion;
//   const newQuestion = question.replace("<p>", "").replace("</p>", "");
  return (
    <div>
      <h4></h4>{question}
    </div>
  );
};

export default Question;
