import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        color: "#fff",
      }}
    >
      <div className="row align-items-center text-center">
        {/* Text Section */}
        <div className="col-lg-6 px-5 mb-5 mb-lg-0 mt-5">
          <h1
            className="mb-4"
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#00d9ff",
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Invest in Everything
          </h1>
          <h4
            className="text-light mb-4"
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </h4>
          <button
            className="btn"
            style={{
              backgroundColor: "#ffc107",
              color: "#1a1a1a",
              fontWeight: "bold",
              width: "220px",
              height: "55px",
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "50px",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
            }}
          >
            SignUp for Free
          </button>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 text-center mt-5 position-relative">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "90%",
              background: "radial-gradient(circle, rgba(15,31,75,0.8), rgba(10,16,69,0.5))",
              borderRadius: "20px",
              filter: "blur(50px)",
              zIndex: 0,
            }}
          ></div>
          <img
            src="media/images/homeHero.png"
            alt="landing page"
            className="img-fluid"
            style={{
              maxWidth: "80%",
              height: "auto",
              boxShadow: "0 12px 25px rgba(0, 0, 0, 0.5)",
              borderRadius: "20px",
              transform: "scale(1)",
              transition: "transform 0.3s ease",
              zIndex: 1,
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
