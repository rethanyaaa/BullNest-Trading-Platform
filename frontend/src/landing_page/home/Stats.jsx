import React from "react";

const Stats = () => {
  return (
    <div
      className="container-fluid px-5 py-5"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        color: "#fff",
      }}
    >
      <div className="row">
        {/* Heading Section */}
        <div className="col-12 text-center mb-5">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#00d9ff",
              marginBottom:"20px",
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Why Choose Us?
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#d2e3ff",
              lineHeight: "1.8",
              marginBottom:"20px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            At BullNest, we prioritize our customers' needs with transparency, 
            reliability, and innovative tools to empower you in managing your finances. 
            Here's what makes us stand out:
          </p>
        </div>

        {/* Content Section */}
        <div className="col-12">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "rgb(255, 193, 7)",
                }}
              >
                Customer-First Approach
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#d2e3ff",
                  lineHeight: "1.8",
                }}
              >
                Over 1.5 crore customers trust us with ₹4.5+ lakh crores of equity investments, 
                contributing to 15% of daily retail exchange volumes in India. 
                Our focus is to build long-term relationships through quality services.
              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "rgb(255, 193, 7)",
                }}
              >
                No Gimmicks, Just Value
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#d2e3ff",
                  lineHeight: "1.8",
                }}
              >
                We believe in providing straightforward services with no spam, gimmicks, or intrusive push notifications. 
                Our high-quality apps are designed to let you work at your own pace, stress-free.
              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "rgb(255, 193, 7)",
                }}
              >
                Ecosystem of Innovation
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#d2e3ff",
                  lineHeight: "1.8",
                }}
              >
                More than just an app, our ecosystem includes 30+ fintech startups, offering tailored services 
                specific to your needs. Our tools and platforms are built to create lasting value for our users.
              </p>
            </div>
            <div className="col-lg-6 mb-4">
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "rgb(255, 193, 7)",
                }}
              >
                Smarter Financial Decisions
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#d2e3ff",
                  lineHeight: "1.8",
                }}
              >
                With features like Nudge and Kill Switch, we aim to guide you toward better financial choices. 
                We're not just about facilitating transactions but helping you manage your money wisely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
