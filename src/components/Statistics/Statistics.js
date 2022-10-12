import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const quizzes = useLoaderData().data;
  const data = quizzes;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-evenly mt-10">
      <div className="mt-5">
        <BarChart width={350} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis dataKey="total" />
          <Bar dataKey="total" fill="#14b8a6" />
          <Tooltip />
        </BarChart>
        <h1 className="text-center text-2xl">Questions Chart</h1>
      </div>
      <div>
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="total"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex justify-between">
          <p>
            <FontAwesomeIcon
              className="text-[#FF8042] mr-2"
              icon={faSquare}
            ></FontAwesomeIcon>
            Git
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#00c49f] mr-2"
              icon={faSquare}
            ></FontAwesomeIcon>
            JavaScript
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#ffbb28] mr-2"
              icon={faSquare}
            ></FontAwesomeIcon>
            CSS
          </p>
          <p>
            <FontAwesomeIcon
              className="text-[#0088fe] mr-2"
              icon={faSquare}
            ></FontAwesomeIcon>
            React
          </p>
        </div>
        <h1 className="text-center text-2xl mt-4">Questions Pie Chart</h1>
      </div>
    </div>
  );
};

export default Statistics;
