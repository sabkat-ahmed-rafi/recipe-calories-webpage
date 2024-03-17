import React from "react";

const Explore = () => {
  return (
    <>
      <div
        className="hero h-96 bg-cover rounded-lg"
        style={{
          backgroundImage:
            "url(chef.jpg)",
        }}
      >
        <div className="hero-content text-left mr-[600px] text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-5">
            <button className="btn btn-primary bg-indigo-700 border-none font-bold text-white">Get Started</button>
            <button className="btn text-white bg-transparent border  hover:bg-transparent">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
