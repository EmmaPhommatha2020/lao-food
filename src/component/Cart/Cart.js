import React, { Component } from "react";
import axios from "axios";
import "./Cart.css";
import CartItemRow from "../CartItemRow/CartItemRow";
import Checkout from "../Checkout/Checkout";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      paymentStatus: ""
    };
    this.getCart = this.getCart.bind(this);
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    this.getCart();
  }
  getCart() {
    axios
      .get("/api/cart")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(console.error);
  }
  remove(id) {
    axios
      .delete(`/api/cart/${id}`)
      .then(res => {
        this.getCart();
      })
      .catch(console.error);
  }

  render() {
    const { products } = this.state;      
    const cart = products.map((c, i) => {

      return (
        <CartItemRow
          n={i}
          key={i}
          item={c}
          remove={this.remove}
          refreshCart={this.getCart}
        />
      );
    });
    const cartTotal =
      products.reduce((s, v) => s + v.quantity * v.price, 0).toFixed(2) ||
      "0.00";

    return (
      <div className="cart-container">
        <section className="cart-line-items">
          <div className="cart-header">
            <h3 className="product">Product</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="unit-price">Unit$Price</h3>
            <h3 className="price">$Price</h3>
            <div />
          </div>
          <div className="line" />
          {cart.length ? cart : <h3 className="default">No items add!!!</h3>}
        </section>
        <hr />
        <div className="cart-total">
          <h3>Total: ${cartTotal || 0}</h3>
          <br />
          <Checkout amount={cartTotal * 100} />
        </div>
      </div>
    );
  }
}
export default Cart;
