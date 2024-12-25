import React from 'react';

const Hero = () => {
  return (
    <div
      className="container-fluid mt-5"
      id="support"
      style={{
        background: 'linear-gradient(135deg, #0f1f4b, #0a1045)',
        padding: '80px 0',
        color: '#fff',
      }}
    >
      {/* Support Portal Header */}
      <div className="container" id="supportWrapper" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h3
          style={{
            fontSize: '3rem',
            color: '#00d9ff',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
            marginBottom: '20px',
          }}
        >
          Support Portal
        </h3>
        <div>
          <a
            href="#"
            style={{
              fontSize: '2.4rem',
              color: '#00d9ff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Track Tickets
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="row">
          {/* Left Section - Search & Help Topics */}
          <div className="col-lg-6 col-md-12 ">
            <h4
              style={{
                fontSize: '1.8rem',
                color: '#fff',
                marginBottom: '25px',
                fontWeight: '600',
              }}
            >
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              id="input"
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                marginBottom: '30px',
                fontSize: '1rem',
                outline: 'none',
              }}
            />
            <div id="links" style={{ paddingTop: '10px' }}>
              <a
                href="#"
                id="link-item"
                style={{
                  display: 'block',
                  color: '#00d9ff',
                  textDecoration: 'none',
                  marginBottom: '15px',
                  fontWeight: '500',
                  fontSize: '1rem',
                }}
              >
                Track account opening
              </a>
              <a
                href="#"
                id="link-item"
                style={{
                  display: 'block',
                  color: '#00d9ff',
                  textDecoration: 'none',
                  marginBottom: '15px',
                  fontWeight: '500',
                  fontSize: '1rem',
                }}
              >
                Track segment activation
              </a>
              <a
                href="#"
                id="link-item"
                style={{
                  display: 'block',
                  color: '#00d9ff',
                  textDecoration: 'none',
                  marginBottom: '15px',
                  fontWeight: '500',
                  fontSize: '1rem',
                }}
              >
                Intraday margins
              </a>
              <a
                href="#"
                id="link-item"
                style={{
                  display: 'block',
                  color: '#00d9ff',
                  textDecoration: 'none',
                  marginBottom: '',
                  fontWeight: '500',
                  fontSize: '1rem',
                }}
              >
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section - Featured */}
          <div className="col-lg-5 offset-lg-1 col-md-12">
            <h4
              style={{
                fontSize: '1.8rem',
                color: '#fff',
                marginBottom: '25px',
                fontWeight: '600',
              }}
            >
              Featured
            </h4>
            <div id="ticket" style={{ marginTop: '20px' }}>
              <ol style={{ paddingLeft: '20px', color: '#fff' }}>
                <li>
                  <p>
                    <a
                      href="#"
                      style={{
                        color: '#00d9ff',
                        textDecoration: 'none',
                        fontWeight: '500',
                      }}
                    >
                      Surveillance measure on scrips - December 2024
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="#"
                      style={{
                        color: '#00d9ff',
                        textDecoration: 'none',
                        fontWeight: '500',
                      }}
                    >
                      Latest Intraday leverages and Square-off timings
                    </a>
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
