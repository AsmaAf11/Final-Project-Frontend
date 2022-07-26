import React from "react";

function HomeArticles() {
  return (
    <div>
      <div className="container">
        <div clsssName="row">
          <div className="box-item col-md-4">
            <div className="flip-box">
              <div
                className="flip-box-front text-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
                  backgroundRepeat: "no-repeat",
                  width: "250px",
                  height: "250px",
                }}
              >
                <div className="inner color-white">
                  <h3
                    className="flip-box-header"
                    style={{ paddingTop: "100px", fontWeight: "bold" }}
                  >
                    My Articles
                  </h3>
                </div>
              </div>
              <div
                className="flip-box-back text-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')`,
                  backgroundRepeat: "no-repeat",
                  width: "250px",
                  height: "250px",
                }}
              >
                <div className="inner color-white">
                <h3
                    className="flip-box-header"
                    style={{ paddingTop: "80px", fontWeight: "bold" }}
                  >
                    
                  </h3>
                  <a href="/PArticles">
                    <img
                      src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png"
                      alt="arrow"
                      className="flip-box-img"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeArticles;
