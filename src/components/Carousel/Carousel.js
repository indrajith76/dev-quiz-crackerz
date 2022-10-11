import React from "react";
import banner from "../../assets/banner.png";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Carousel = () => {
  return (
    <div className="carousel w-full md:container mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="absolute text-slate-400 left-44 top-20 text-center">
          <h1 className="text-5xl mb-5">Welcome To</h1>
          <h1 className="text-3xl">DEV Quiz</h1>
          <p>
            <small>
              We provides dev contest for CSE students. <br></br>Thats way
              students can build their knowledge with us.
            </small>
          </p>
        </div>
        <img src={banner3} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="absolute text-slate-400 left-44 top-20 text-center">
          <h1 className="text-5xl mb-5">Welcome To</h1>
          <h1 className="text-3xl">DEV Quiz</h1>
          <p>
            <small>
              We provides dev contest for CSE students. <br></br>Thats way
              students can build their knowledge with us.
            </small>
          </p>
        </div>
        <img src={banner2} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="absolute text-slate-500 right-44 top-20 text-center">
          <h1 className="text-5xl mb-5">Welcome To</h1>
          <h1 className="text-3xl">DEV Quiz</h1>
          <p>
            <small>
              We provides dev contest for CSE students. <br></br>Thats way
              students can build their knowledge with us.
            </small>
          </p>
        </div>
        <img src={banner} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <div className="absolute text-slate-500 right-44 top-20 text-center">
          <h1 className="text-5xl mb-5">Welcome To</h1>
          <h1 className="text-3xl">DEV Quiz</h1>
          <p>
            <small>
              We provides dev contest for CSE students. <br></br>Thats way
              students can build their knowledge with us.
            </small>
          </p>
        </div>
        <img src={banner1} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
