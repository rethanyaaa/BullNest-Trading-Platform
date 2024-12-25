import React from "react";

const Education = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        color: "#fff",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div className="row align-items-center text-center">
        {/* Image Section */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, rgba(15,31,75,0.8), rgba(10,16,69,0.5))",
              borderRadius: "20px",
              filter: "blur(50px)",
              zIndex: 0,
            }}
          ></div>
          <img
            src="media/images/education.svg"
            alt="education"
            className="img-fluid"
            style={{
              maxWidth: "80%",
              height: "auto",
              
              borderRadius: "20px",
              transform: "scale(1)",
              transition: "transform 0.3s ease",
              zIndex: 1,
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>

        {/* Content Section */}
        <div className="col-lg-6 px-5 mb-5 mb-lg-0 mt-5">
          <h1
            className="mb-4"
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#00d9ff",
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Free and Open Market Education
          </h1>
          <p
            className="text-light mb-3"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            Varsity, the largest online stock market education book in the world,
            covers everything from the basics to advanced trading.
          </p>
          <p className="mb-4">
            <a
              href="#"
              style={{
                textDecoration: "none",
                color:"rgb(255, 193, 7)",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
          <p
            className="text-light mb-3"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            TradingQ&A, the most active trading and investment community in India,
            answers all your market-related queries.
          </p>
          <p>
            <a
              href="#"
             
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
                color:"rgb(255, 193, 7)",
              }}
            >
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
