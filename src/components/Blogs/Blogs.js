import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  return (
    <div className="mt-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-5">
      <div className="border border-teal-700 p-5">
        <h4 className="text-xl mb-3">
          <span className="bg-teal-500 text-slate-800 px-2 rounded-full mr-1">
            1
          </span>
          What is the purpose of react router?
        </h4>
        <p>
          <FontAwesomeIcon
            className="text-teal-500"
            icon={faArrowRight}
          ></FontAwesomeIcon>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application. When a user types a specific URL into the browser, and if
          this URL path matches any 'route' inside the router file, the user
          will be redirected to that particular route.
        </p>
      </div>
      <div className="border border-teal-700 p-5">
        <h4 className="text-xl mb-3">
          <span className="bg-teal-500 text-slate-800 px-2 rounded-full mr-1">
            2
          </span>
          How does context API works?
        </h4>
        <p>
          <FontAwesomeIcon
            className="text-teal-500"
            icon={faArrowRight}
          ></FontAwesomeIcon>{" "}
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        </p>
      </div>
      <div className="border border-teal-700 p-5">
        <h4 className="text-xl mb-3">
          <span className="bg-teal-500 text-slate-800 px-2 rounded-full mr-1">
            3
          </span>{" "}
          What is useRef in react?
        </h4>
        <p>
          <FontAwesomeIcon
            className="text-teal-500"
            icon={faArrowRight}
          ></FontAwesomeIcon>{" "}
          useRef is a hook of react. This hook uses for manage focus, text selection, trigger imperative animations or integrating third-party libraries.The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
