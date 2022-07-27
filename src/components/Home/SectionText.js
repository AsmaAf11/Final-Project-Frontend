import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionText() {
  return (
    <section className=" mt-5 mb-5 text-center">
      <div className="container">
        <h2  style={{ fontWeight: "bolder" }} > It's a place where you can easily keep up with your interests.</h2>
        <h4 style={{ textTransform: "uppercase" }}>Knowledge Hub</h4>
        <p className="lead text">
          You can Track on your interests without having to read everything.{" "}
          <br /> Reading brief articles from news sites, newsletters, and other
          sources can help you stay up to date on your interests.
        </p>
        <p>
          <a
            type="button"
            className="btn btn-outline-dark"
            data-mdb-ripple-color="dark"
            style={{ marginRight: "10px", width: "100px", fontWeight: "bold" }}
            href="/login"
          >
            Login
          </a>
          <a
            type="button"
            className="btn btn-outline-dark"
            data-mdb-ripple-color="dark"
            style={{ marginRight: "10px", width: "100px", fontWeight: "bold" }}
            href="/signup"
          >
            Register
          </a>
        </p>
      </div>
    </section>
  );
}
