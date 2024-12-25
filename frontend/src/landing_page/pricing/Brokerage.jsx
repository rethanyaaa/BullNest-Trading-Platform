import React from "react";

const Brokerage = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #0f1f4b, #0a1045)",
        padding: "50px 0",
        color: "#fff",
      }}
    >
      <div className="container">
        <h3
          className="text-center mb-4"
          style={{
            fontSize: "2.5rem",
            color: "#00d9ff",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "#00d9ff" }}>
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </h3>
        <h3
          className="text-center mt-3 mb-5"
          style={{
            fontSize: "2rem",
            color: "#b0c9ff",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Charges explained
        </h3>

        <div className="row mt-5">
          {/* Left Section */}
          <div className="col-md-6 mb-4 mt-4">
            <div className="section">
              <p className="fs-5">Securities/Commodities transaction tax</p>
              <p>
                Tax by the government when transacting on the exchanges.
                Charged as above on both buy and sell sides when trading equity
                delivery.
              </p>
              <p>
                When trading at Zerodha, STT/CTT can be a lot more than the
                brokerage we charge. Important to keep a tab.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">Transaction/Turnover Charges</p>
              <p>
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions.
              </p>
              <p>
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">Call & trade</p>
              <p>
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">Stamp charges</p>
              <p>
                Stamp charges by the Government of India as per the Indian Stamp
                Act of 1899 for transacting in instruments on the stock exchanges
                and depositories.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">NRI brokerage charges</p>
              <ul>
                <li>₹100 per order for futures and options.</li>
                <li>0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 mb-4 mt-4">
            <div className="section">
              <p className="fs-5">GST</p>
              <p>
                Tax levied by the government on the services rendered. 18% of (
                brokerage + SEBI charges + transaction charges)
              </p>
            </div>

            <div className="section">
              <p className="fs-5">SEBI Charges</p>
              <p>
                Charged at ₹10 per crore + GST by Securities and Exchange Board of
                India for regulating the markets.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">DP (Depository participant) charges</p>
              <p>
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
                charged on the trading account ledger when stocks are sold,
                irrespective of quantity.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">Pledging charges</p>
              <p>
                ₹30 + GST per pledge request per ISIN.
              </p>
            </div>

            <div className="section">
              <p className="fs-5">AMC (Account maintenance charges)</p>
              <p>
                For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000.
              </p>
              <p>
                For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <p className="fs-5">Disclaimer</p>
          <p>
            For Delivery based trades, a brokerage of ₹20 per executed order is
            charged.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
