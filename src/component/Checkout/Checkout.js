import React, {Component} from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends Component{

  onToken = (token) => {
      token.card = void 0;  
      axios.post('/api/charge', {token, amount: this.props.amount}).then(res => {
          alert('Thank you for your payment'); window.location.reload();
      }).catch( err => console.log(err))
  }

  render(){
  return(
        <div>
            <StripeCheckout
                token = {this.onToken}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                amount = {this.props.amount}>
                <button>Purchase</button>
            </StripeCheckout>
        </div>
        )
    }
}

export default Checkout;