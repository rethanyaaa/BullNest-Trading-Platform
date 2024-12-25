import React from "react";

const Hero = () => {
  return (
    <div
      className="container-fluid p-5"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        color: "#fff",
      }}
    >
      <div className="row text-center mt-5 mb-5">
        <h1
          className="mb-5 mt-5"
          style={{
            fontSize: "3.3rem",
            fontWeight: "bold",
            color: "#00d9ff",
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row mt-5 border-top">
        <div className="col-1"></div>
        <div className="col-5 mt-5">
          <p
            className="fs-5 mt-5"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            We kick-started operations on the 15th of August, 2010, with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology. We named the
            company BullNest, symbolizing a secure and thriving nest for
            bulls—those who are optimistic and driven to grow in the market.
          </p>

          <p
            className="fs-5"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p
            className="fs-5"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-5 mt-5">
          <p
            className="fs-5 mt-5"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p
            className="fs-5"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p
            className="fs-5"
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#b0c9ff",
            }}
          >
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Hero;
