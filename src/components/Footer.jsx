import React, { Component } from "react";
import "./Footer.css";
import PP from "../images/PP.png"

export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer">
        <div className="row">
          <div className="col">
            <p>
              <img src={PP} alt="" height="50" width="" /> available in
              checkout
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
