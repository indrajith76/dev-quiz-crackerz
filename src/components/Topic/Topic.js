import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="card w-auto p-5 bg-slate-800 border border-teal-800 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body p-0 pt-2">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{total} Questions</div>
        </h2>
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-700 py-2 rounded">
          <span className="font-semibold">Start Test</span>
          <FontAwesomeIcon className="ml-2" icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Topic;
