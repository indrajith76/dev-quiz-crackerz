import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar, 
  XAxis,
  YAxis, 
  Tooltip,  
} from "recharts";

const Statistics = () => {
  const quizzes = useLoaderData().data;
  const data = quizzes;

  return (
    <div className="flex justify-center">
      <BarChart width={400} height={400} data={data}>
        <XAxis dataKey='name'/>
        <YAxis dataKey='total'/>
        <Bar dataKey="total" fill="#14b8a6" /> 
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Statistics;
