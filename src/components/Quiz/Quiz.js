import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

export const CountContext = createContext(0);

const Quiz = () => {
  const [count, setCount] = useState(0);
  const quizzes = useLoaderData().data;
  const { name, logo, questions } = quizzes;
  console.log(questions.length);
  return (
    <CountContext.Provider value={[count, setCount]}>
      <div>
        <div className="flex items-center justify-center gap-5 mt-5">
          <img className="w-16 rounded-full" src={logo} alt="" />
          <h1 className="text-3xl">{name}</h1>
        </div>
        <div>
          <h1 className="text-center text-2xl">{count}</h1>
        </div>
        <div className="grid justify-center gap-10 mt-5">
          {questions.map((quizQuestion) => (
            <Question
              key={quizQuestion.id}
              quizQuestion={quizQuestion} 
            ></Question>
          ))}
        </div>
      </div>
    </CountContext.Provider>
  );
};

export default Quiz;
