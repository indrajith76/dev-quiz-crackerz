import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quizzes = useLoaderData().data;
  const { name, logo, questions } = quizzes;
  return (
    <div>
      <div className="flex items-center justify-center gap-5 mt-5">
        <img className="w-16 rounded-full" src={logo} alt="" />
        <h1 className="text-3xl">{name}</h1>
      </div>
      <div>
        {questions.map((quizQuestion) => (
          <Question key={quizQuestion.id} quizQuestion={quizQuestion}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
