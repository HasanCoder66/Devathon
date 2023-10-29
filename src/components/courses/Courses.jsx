

import React from "react";
// import "./courses.css"
import { coursesCard } from "./dummydata";
import Header from "../header/Header";

const Courses = () => {
  return (
    <>
      <Header />
      <section style={{backgroundColor:"gray"}}>
        <div  style={{display:"flex" , flexWrap:'wrap' ,  gap:'10px', marginTop:'1px'}} >
       
          {coursesCard.map((val) => (
            <div style={
                { border:"2px solid black", padding:"10px", width:"300px" , paddingRight:'15px'}
            }>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div key={"new"} className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div>
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  width: "150px",
                  height: "30px",
                  borderRadius: "10px",
                  marginTop:'20px',
                  marginBottom:'20px',
                  outline:"none"
                }}
              >
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
