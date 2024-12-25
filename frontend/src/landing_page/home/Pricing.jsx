import React from "react";

const Pricing = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        color: "#fff",
      }}
    >
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 mb-5">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00d9ff",
              marginBottom:"20px",
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Unbeatable Pricing
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. <br /> Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#ffc107",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom:"10px",
            }}
          >
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: "rgba(15,31,75,0.8)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
              borderRadius: "20px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h1
              className="mb-3"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#ffc107",
              }}
            >
              ₹0
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#b0c9ff",
              }}
            >
              Free equity delivery and <br /> direct mutual funds
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 text-center">
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: "rgba(15,31,75,0.8)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
              borderRadius: "20px",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h1
              className="mb-3"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#ffc107",
              }}
            >
              ₹20
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#b0c9ff",
                paddingBottom: "25px"
              }}
            >
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
