import React from "react";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
}) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#ffffff", // White background color
        padding: "50px 0", // Add padding for better spacing
        borderRadius: "10px", // Rounded corners for a softer design
      }}
    >
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1
            className="mt-3"
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              color: "#333", // Dark color for good contrast
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {productName}
          </h1>
          <p
            className="fs-5 mt-4"
            style={{
              fontSize: "1.2rem",
              color: "#555",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            {productDescription}
          </p>

          <div className="mt-4">
            <p className="fs-5">
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#00d9ff",
                  fontWeight: "600",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0199cc")}
                onMouseLeave={(e) => (e.target.style.color = "#00d9ff")}
              >
                {tryDemo} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={imageUrl}
            style={{
              width: "90%", // Adjust image size for better responsiveness
              maxWidth: "550px", // Set a max width to avoid excessive stretching
              borderRadius: "10px", // Rounded corners for the image
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
