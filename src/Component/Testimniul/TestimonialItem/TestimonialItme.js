import React from "react";
import "./TestimonialItme.css";
import { FaQuoteLeft } from "react-icons/fa";

function TestimonialItme({ curElm, index, selectPerson }) {
  const { name, img, expart } = curElm;
  const handleClick = (i) => {
    selectPerson(i);
  };
  return (
    <div
      className="frofile-item d-flex bg-light text-dark px-2 py-3 align-items-center"
      onClick={() => handleClick(index)}
    >
      <img src={img} alt="" />
      <div className="item-text mx-3">
        <div className="h3">{name}</div>
        <p>{expart}</p>
      </div>
      <FaQuoteLeft className="quotetion text-dark" />
    </div>
  );
}

export default TestimonialItme;
