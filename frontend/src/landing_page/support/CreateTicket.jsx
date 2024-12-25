import React from "react";

const CreateTicket = () => {
  return (
    <div
      className="container mt-5"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        borderRadius: "12px",
        color: "#fff",
        padding: "50px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h4
        className=" ps-3"
        style={{
          fontSize: "1.8rem",
          color: "#00d9ff",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        To create a ticket, select a relevant topic
      </h4>
      <div className="row p-3">
        {/** Categories */}
        {[
          {
            icon: "fa-circle-plus",
            title: "Account Opening",
            links: [
              "Getting started",
              "Online",
              "Offline",
              "Charges",
              "Company, Partnership and HUF",
              "Non Resident Indian (NRI)",
            ],
          },
          {
            icon: "fa-user",
            title: "Your BullNest Account",
            links: [
              "Login credentials",
              "Your Profile",
              "Account modification and segment addition",
              "CMR & DP ID",
              "Nomination",
              "Transfer and conversion of shares",
            ],
          },
          {
            icon: "fa-chart-simple",
            title: "Trading and Markets",
            links: [
              "Trading FAQs",
              "Kite",
              "Margins",
              "Product and order types",
              "Corporate actions",
              "Kite features",
            ],
          },
          {
            icon: "fa-money-check",
            title: "Funds",
            links: [
              "Fund withdrawal",
              "Adding funds",
              "Adding bank accounts",
              "eMandates",
            ],
          },
          {
            icon: "fa-flag",
            title: "Console",
            links: [
              "IPO",
              "Portfolio",
              "Funds statement",
              "Profile",
              "Reports",
              "Referral program",
            ],
          },
          {
            icon: "fa-coins",
            title: "Coin",
            links: [
              "Understanding mutual funds and Coin",
              "Coin app",
              "Coin web",
              "Transactions and reports",
              "National Pension Scheme (NPS)",
            ],
          },
        ].map((category, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={index}>
            <h4
              style={{
                fontSize: "1.4rem",
                color: "#ffc107",
                marginBottom: "20px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                className={`fa-solid ${category.icon}`}
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  transition: "transform 0.3s",
                }}
              ></i>
              {category.title}
            </h4>
            <div id="support-links" style={{ paddingLeft: "10px" }}>
              {category.links.map((link, idx) => (
                <a
                  href="#"
                  key={idx}
                  style={{
                    display: "block",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                    marginBottom: "12px",
                    transition: "color 0.3s ease-in-out, transform 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#FF0000")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "#fff")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
