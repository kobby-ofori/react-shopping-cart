import React, { Component } from "react";
import "./Checkout.css";

export class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      quantity2: 1,
      quantity3: 1,
    };
  }
  handleIncrease = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  handleDecrease = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };
  handleIncrease2 = () => {
    this.setState({ quantity2: this.state.quantity2 + 1 });
  };
  handleDecrease2 = () => {
    this.setState({ quantity2: this.state.quantity2 - 1 });
  };
  handleIncrease3 = () => {
    this.setState({ quantity3: this.state.quantity3 + 1 });
  };
  handleDecrease3 = () => {
    this.setState({ quantity3: this.state.quantity3 - 1 });
  };
  render() {
    return (
      <div className="container-fluid checkout-cont">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-6">
            <div className="l-side-bar">
              <div>
                <h3>SHOPPING CART</h3>
                <p>Do you have an account? Sign in to continue shopping</p>
                <button>SIGN IN</button>
                <br />
              </div>
              <div id="l-side-bar2">
                <h4>3 ITEMS</h4>
                <img src="lg.jpg" alt="" height="128" width="196" />
                <br />
                <h6>LG E22 77-inch evo OLED TV</h6>
                <ul>
                  <li>OLED Evo</li>
                  <li>Refined Design</li>
                  <li>77-inch</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
            <div class="main">
              <div>
                <h5>ORDER SUMMARY</h5>
                <input type="text" placeholder="HAVE A PROMO CODE?" />
                <table>
                  <tr>
                    <td>LG TV</td>
                    <td>$2,400.00</td>
                    <td>
                      <button onClick={this.handleDecrease}>-</button>
                      <strong>{this.state.quantity}</strong>
                      <button onClick={this.handleIncrease}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Optima OP-KY908</td>
                    <td>$99.99</td>
                    <td>
                      <button onClick={this.handleDecrease2}>-</button>
                      <strong>{this.state.quantity2}</strong>
                      <button onClick={this.handleIncrease2}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Crompton C-Fan</td>
                    <td>$110.00</td>
                    <td>
                      <button onClick={this.handleDecrease3}>-</button>
                      <strong>{this.state.quantity3}</strong>
                      <button onClick={this.handleIncrease3}>+</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ORDER TOTAL</strong>
                    </td>
                    <td>
                      <strong>$2,609.99</strong>
                    </td>
                  </tr>
                </table>
              </div>
              <br />
              <div id="proceed">
                <button>PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
