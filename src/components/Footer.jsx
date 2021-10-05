import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container container-fluid">
        <div className="row mr-4">
          <div className="col-md-4 ">
            <div className="footer-box">
              <h5>Emergency Case</h5>
              <p>
                Lorem ipsum dolor sit amet, consector adipisicing elit, sed do
                eiusmod temper incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-box">
              <h5>Emergency Case</h5>
              <p>
                Lorem ipsum dolor sit amet, consector adipisicing elit, sed do
                eiusmod temper incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-box">
              <h4>Opening Hours</h4>
              <div className="opening-hours-list">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Monday - Friday</td>
                      <td>10am-6pm</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>9am-6pm</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td> 9am-6pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
