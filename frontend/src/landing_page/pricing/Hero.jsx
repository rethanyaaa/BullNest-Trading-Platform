import React from "react";

const Charges = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)", // Gradient background
        color: "#fff",
        padding: "50px 0",
      }}
    >
      <div className="row align-items-center text-center">
        {/* Text Section */}
        <div className="col-12 ">
          <h1
            className="mb-4"
            style={{
              fontSize: "3.5rem",
              fontWeight: "bold",
              marginTop: "125px",
              color: "#00d9ff", // Bright color for title
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)", // Text shadow for effect
            }}
          >
            Charges
          </h1>
          <h4
            className="mb-5"
            style={{
              fontSize: "1.6rem",
              color: "#fff !importent", // Subtle text color for description
              lineHeight: "1.8",
            }}
          >
            List of all charges and taxes
          </h4>
        </div>

        {/* Charges Content Section */}
        <div className="row ">
          {/* Charge 1 */}
          <div className="col-4 p-5 text-center">
            <img src="media/images/zero.svg" alt="Zero charge" />
            <h2
              className="mb-3"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#fff", // White color for headings
              }}
            >
              Free equity delivery
            </h2>
            <p
              className="fs-5"
              style={{
                color: "#ccc", // Lighter text color for the paragraph
                lineHeight: "1.8",
              }}
            >
              All equity delivery investments (NSE, BSE), are absolutely free — ₹
              0 brokerage.
            </p>
          </div>

          {/* Charge 2 */}
          <div className="col-4 p-5 text-center">
            <img src="media/images/twenty.svg" alt="₹ 20 charge" />
            <h2
              className="mb-3"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#fff", // White color for headings
              }}
            >
              Intraday and F&O trades
            </h2>
            <p
              className="fs-5"
              style={{
                color: "#ccc", // Lighter text color for the paragraph
                lineHeight: "1.8",
              }}
            >
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades. Flat
              ₹20 on all option trades.
            </p>
          </div>

          {/* Charge 3 */}
          <div className="col-4 p-5 text-center">
            <img src="media/images/zero.svg" alt="Zero charge" />
            <h2
              className="mb-3"
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#fff", // White color for headings
              }}
            >
              Free direct MF
            </h2>
            <p
              className="fs-5"
              style={{
                color: "#ccc", // Lighter text color for the paragraph
                lineHeight: "1.8",
              }}
            >
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charges;
