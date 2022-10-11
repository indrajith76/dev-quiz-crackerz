import React from "react";
import Carousel from "../Carousel/Carousel";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const topics = useLoaderData().data; 
  return (
    <div>
      <Carousel></Carousel>

      <div className="container mx-auto mt-20 px-4" id="topic">
        <h3 className="text-4xl mb-14">Quiz Topics</h3>
        <div className="topic-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
