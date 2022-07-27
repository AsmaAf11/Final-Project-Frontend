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
                  backgroundImage: `url('https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg')`,
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
                  backgroundImage: `url('https://i.pinimg.com/originals/f5/05/24/f50524ee5f161f437400aaf215c9e12f.jpg')`,
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
