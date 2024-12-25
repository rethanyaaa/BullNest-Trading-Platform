import React from "react";

const Universe = () => {
  return (
    <div
      className="container mb-5 border-bottom"
      style={{
        backgroundColor: "#ffffff", // White background color
        padding: "50px 0", // Adding padding for better spacing
      }}
    >
      <div className="row justify-content-center text-center mt-5 mb-5">
        <h1
          className="mt-5 mb-4"
          style={{
            fontSize: "3.5rem", // Larger size for the title
            fontWeight: "700",
            color: "#333", // Dark color for good contrast on a white background
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)", // Subtle text shadow for depth
          }}
        >
          The BullNest Universe
        </h1>
        <h4
          className="text-muted"
          style={{
            fontSize: "1.6rem",
            color: "#555", // Slightly lighter color for the subheading
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          Extend your trading and investment experience even further with our partner platforms
        </h4>
        <div className="mt-2 fs-5 mb-5">
          <p
            className="fs-5 text-center"
            style={{
              fontSize: "1.2rem",
              color: "#666", // Lighter color for the paragraph
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            Want to know more about our technology stack? Check out the{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#00d9ff", // Bright color for the link
                fontWeight: "600",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#0199cc")} // Hover effect
              onMouseLeave={(e) => (e.target.style.color = "#00d9ff")}
            >
              BullNest.tech
            </a>{" "}
            blog.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-4 text-center">
          {/* Add content here for the first partner platform */}
        </div>
        <div className="col-md-4 text-center">
          {/* Add content here for the second partner platform */}
        </div>
        <div className="col-md-4 text-center">
          {/* Add content here for the third partner platform */}
        </div>
      </div>
    </div>
  );
};

export default Universe;
