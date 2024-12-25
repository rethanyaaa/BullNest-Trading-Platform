import React from "react";
import { FaChartLine, FaLock, FaHeadset, FaUsers, FaCog } from "react-icons/fa";

const Team = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        color: "#fff",
      }}
    >
      <h1
        className="text-center"
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
        }}
      >
        Why Choose BullNest?
      </h1>
      <div className="row mt-5">
        {/* Left Column */}
        <div className="col-md-6 text-center ">
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color:"rgb(255, 193, 7)",
              marginBottom: "40px",
            }}
          >
            Revolutionizing the Future of Trading
          </h3>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
              marginBottom: "30px",
            }}
          >
            BullNest is a cutting-edge trading platform designed to empower
            individuals with the tools and knowledge to succeed in the stock
            market. We aim to make trading easy, efficient, and accessible to
            everyone—from beginners to experienced traders.
          </p>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
              marginBottom: "30px",
            }}
          >
            At BullNest, we believe that everyone deserves the chance to
            participate in the world of finance, which is why our platform
            offers personalized features, expert insights, and seamless
            integration with the financial markets.
          </p>
        </div>
        <div className="col-2"></div>

        {/* Right Column with Features */}
        <div className="col-md-4 d-flex flex-column align-items-start" >
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color:"rgb(255, 193, 7)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Key Features of BullNest
          </h3>

          {/* Feature List */}
          <div className="d-flex align-items-center mb-4">
            <FaChartLine
              style={{
                fontSize: "2rem",
                color: "#fff",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
                color: "#b0c9ff",
                lineHeight: "1.8",
                marginBottom: "0",
              }}
            >
              Advanced Trading Tools and Charts
            </p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FaLock
              style={{
                fontSize: "2rem",
               color: "#fff",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
                color: "#b0c9ff",
                lineHeight: "1.8",
                marginBottom: "0",
              }}
            >
              Secure and Fast Transactions
            </p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FaHeadset
              style={{
                fontSize: "2rem",
                color: "#fff",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
                color: "#b0c9ff",
                lineHeight: "1.8",
                marginBottom: "0",
              }}
            >
              24/7 Customer Support
            </p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FaUsers
              style={{
                fontSize: "2rem",
                color: "#fff",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
                color: "#b0c9ff",
                lineHeight: "1.8",
                marginBottom: "0",
              }}
            >
              Community of Like-minded Traders
            </p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FaCog
              style={{
                fontSize: "2rem",
                color: "#fff",
                marginRight: "15px",
              }}
            />
            <p
              style={{
                fontSize: "1.2rem",
                color: "#b0c9ff",
                lineHeight: "1.8",
                marginBottom: "0",
              }}
            >
              Customizable Portfolio Management
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <a
          href="#"
          style={{
            backgroundColor:"rgb(255, 193, 7)",
            color: "#0a1045",
            padding: "15px 30px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            textDecoration: "none",
            borderRadius: "30px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#0199cc")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#00d9ff")
          }
        >
          Start Trading with BullNest
        </a>
      </div>
    </div>
  );
};

export default Team;
