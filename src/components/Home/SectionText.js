import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionText() {
  return (
    <section className=" mt-5 mb-5 text-center">
      <div className="container">
        <h2  style={{ fontWeight: "bolder" }} className='mb-5'> It's a place where you can easily keep up with your interests.</h2>
        <h4 style={{ textTransform: "uppercase" }} className='mb-3'>Knowledge Hub</h4>
        <p className="lead text mb-5" >
          You can Track on your interests without having to read everything.{" "}
          <br /> Reading brief articles from news sites, newsletters, and other
          sources can help you stay up to date on your interests.
        </p>
        <p>
          {/* <a
            type="button"
            className="btn btn-outline-dark"
            data-mdb-ripple-color="dark"
            style={{ marginRight: "10px", width: "100px", fontWeight: "bold" }}
            href="/login"
          >
            Login
          </a> */}
          <a
            type="button"
            className="btn btn-outline-primary custom-btn"
            data-mdb-ripple-color="dark"
            style={{ marginRight: "10px", width: "300px" ,fontWeight: "bold", fontSize:'x-large' }}
            href="/signup"
          >
            Register Now
          </a>
        </p>
      </div>
    </section>
  );
}
