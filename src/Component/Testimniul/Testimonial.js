import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { TestimonialData } from "./Testimonial-data/TestimonialData";
import TestimonialItme from "./TestimonialItem/TestimonialItme";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";
function Testimonial() {
  const [testimonialAll, setTestimonialAll] = useState(TestimonialData);
  const [allPerson, setAllPerson] = useState(0);
  const [val, setVal] = useState(0);
  const filtered = () => {
    const filteritme = TestimonialData.filter((item, index) => index !== val);
    setTestimonialAll(filteritme);
  };

  useEffect(() => {
    filtered();
  }, [val]);

  const selectPerson = (i) => {
    setVal(i);
    const wordSlider = TestimonialData[i];
    setAllPerson(wordSlider);
  };
  const handleClickL = () => {
    let index = val <= TestimonialData.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = TestimonialData[index];
    setAllPerson(wordSlider);
  };
  const handleClickR = () => {
    let index = val < TestimonialData.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = TestimonialData[index];
    setAllPerson(wordSlider);
  };
  return (
    <div className="container-fluid">
      <div className="row m-5">
        <div className="top d-block text-center w-75 mx-auto my-3">
          <img className="py-2" src="img/plogo.png" alt="" />
          <div className="h1 py-2">Testimonial</div>
          <p className="py-2 mx-5 px-5 opacity-25">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            volutpat id aenean lorem etiam. Congue quis sit enim dignissim
            hendrerit nisi. Varius in quam nam ultricies amet, sapien
            pellentesque. Egestas felis.
          </p>
        </div>

        <div className="testimonial-body d-flex">
          <div className="col-6">
            <div className="left-side w-100 h-100 me-2 p-5 bg-light text-dark position-relative">
              <FaQuoteLeft className="quotetion text-warning" />
              {allPerson ? (
                <div className="personalDtls">
                  <p className="mx-5 mb-5">{allPerson.review}</p>
                  <div className="profile  d-flex gap-4 align-items-center mb-4">
                    <img src={allPerson.img} alt="" />
                    <div className="profileDtls">
                      <div className="h3 py-1">{allPerson.name}</div>
                      <div className="h6 opacity-50 py-1 mb-2">
                        {allPerson.expart}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="personalDtls">
                  <p className="mx-5 mb-5">{TestimonialData[0].review}</p>
                  <div className="profile d-flex gap-4 align-items-center mb-4">
                    <img src={TestimonialData[0].img} alt="" />
                    <div className="profileDtls">
                      <div className="h3 py-1">{TestimonialData[0].name}</div>
                      <div className="h6 opacity-50 py-1 mb-2">
                        {TestimonialData[0].expart}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="arrow-iocon d-flex justify-content-end gap-5">
                <div onClick={handleClickL}>
                  <FaAngleLeft
                    style={{
                      fontSize: "25px",
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  />
                </div>
                <div onClick={handleClickR}>
                  <FaAngleRight
                    style={{
                      fontSize: "25px",
                      color: "gray",
                      fontWeight: "bold",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="row h-100 gap-4 right-side ms-4">
              {testimonialAll.map((curElm, index) => {
                return (
                  <TestimonialItme
                    curElm={curElm}
                    key={index}
                    index={index}
                    selectPerson={selectPerson}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
