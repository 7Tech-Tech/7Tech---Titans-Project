import React from 'react';

export default function PaymentGateway() {
  return (
    <div className="payment-container">
      <h2>Secure Payment Gateway</h2>
      <form id="paymentForm">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required />
        </div>
        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input type="text" id="cardName" name="cardName" placeholder="Enter cardholder's name" required />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Expiry Date</label>
          <input type="text" id="expiry" name="expiry" placeholder="MM/YYYY" required />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="CVV" required />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
