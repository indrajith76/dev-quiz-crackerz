import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import { PieChart, Pie, Cell } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const COLORS = ["#00C49F", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor= {x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CountContext = createContext(0);

const Quiz = () => {
  const [count, setCount] = useState(0);
  const [countWrong, setCountWrong] = useState(0);
  const quizzes = useLoaderData().data;
  const { name, logo, questions } = quizzes;

  const data = [
    { name: "Group A", value: count },
    { name: "Group C", value: questions.length },
  ];

  return (
    <CountContext.Provider value={[count, setCount, countWrong, setCountWrong]}>
      <div>
        <div className="flex items-center justify-center gap-5 mt-10 mb-10">
          <img className="w-24 rounded-full" src={logo} alt="" />
          <h1 className="text-5xl text-slate-400">{name}</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-10">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div>
            <h1 className="text-center text-3xl text-slate-400">Correct Answers : {count}</h1>
            <div className="flex justify-center gap-5 mt-3">
              <p className="text-slate-400">
                <FontAwesomeIcon
                  className="text-[#FF8042]"
                  icon={faSquare}
                ></FontAwesomeIcon>{" "}
                Wrong : {countWrong}
              </p>
              <p className="text-slate-400">
                <FontAwesomeIcon
                  className="text-[#00C49F]"
                  icon={faSquare}
                ></FontAwesomeIcon>{" "}
                Right : {count}
              </p>
            </div>
          </div>
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
