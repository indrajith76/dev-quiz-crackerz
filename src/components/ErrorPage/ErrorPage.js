import React from "react";
import Lottie from "lottie-react";
import {Link} from 'react-router-dom';
import ErrorAnimation from "../../assets/errorImg";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <Lottie className="w-1/2" animationData={ErrorAnimation}></Lottie>
      </div>
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl text-slate-100 mb-4">Page Not Found!</h1>
        <p>We're sorry, the page you requested could not be found.</p>
        <p className="mb-5">Please go back to the homepage.</p>
        <Link to='/' className="bg-teal-500 text-slate-800 px-8 py-2 font-semibold rounded-md">GO HOME</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
