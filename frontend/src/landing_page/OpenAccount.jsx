import React from "react";

const OpenAccount = () => {
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
      <div className="row justify-content-center text-center mt-5 mb-5">
        <h1
          className=" mb-4"
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            color: "#00d9ff",
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          Open a BullNest account
        </h1>
        <h4
          className="text-light"
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            color: "#b0c9ff",
          }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </h4>
        <div className="mt-4">
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
            Signup for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
