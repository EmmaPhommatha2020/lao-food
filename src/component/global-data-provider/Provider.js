import React, { Component} from 'react';
import axios from "axios";

export const GlobalDataContext = React.createContext();
export const GlobalDataConsumer = GlobalDataContext.Consumer;

class GlobalDataProvider extends Component {
  state = {
    products: [],
    paymentStatus: ""
  };

  getCart = () => {
    axios
      .get("/api/cart")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(console.error);
  }

  render() {
    return (
      <GlobalDataContext.Provider value={{state: this.state, getCart: this.getCart}}>
        {this.props.children}
      </GlobalDataContext.Provider>
    )
  }
}
export default GlobalDataProvider;