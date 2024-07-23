import React, { useState } from 'react';

export default function Payment({ paymentType }) { // Assume paymentType is passed from the Home page
  const [momoSelected, setMomoSelected] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const handleMomoChange = (event) => {
    const selectedMomo = event.target.value;
    setMomoSelected(selectedMomo !== '');

    // Enable amount in Cedis input field when a mobile money option is selected
    const amountCedisInput = document.getElementById('amountCedis');
    if (selectedMomo !== '') {
      amountCedisInput.disabled = false;
    } else {
      amountCedisInput.disabled = true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Set payment success
    setPaymentSuccess(true);

    // Generate receipt data
    const now = new Date();
    const receiptData = {
      typeOfPayment: momoSelected ? 'Mobile Money' : 'Credit Card',
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
      paymentType: paymentType // Rent or Buy from the Home page
    };
    setReceipt(receiptData);

    // Handle form submission logic here (e.g., sending data to server)
    console.log('Form submitted!');
  };

  const handlePrintReceipt = () => {
    if (receipt) {
      const receiptWindow = window.open('', '', 'width=600,height=400');
      receiptWindow.document.write('<html><head><title>Receipt</title></head><body>');
      receiptWindow.document.write(`<h1>Payment Receipt</h1>`);
      receiptWindow.document.write(`<p><strong>Type of Payment:</strong> ${receipt.typeOfPayment}</p>`);
      receiptWindow.document.write(`<p><strong>Date:</strong> ${receipt.date}</p>`);
      receiptWindow.document.write(`<p><strong>Time:</strong> ${receipt.time}</p>`);
      receiptWindow.document.write(`<p><strong>Payment Type:</strong> ${receipt.paymentType}</p>`);
      receiptWindow.document.write('</body></html>');
      receiptWindow.document.close();
      receiptWindow.print();
    }
  };

  return (
    <>
      <div className="payment-container">
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="blur-background"></div>
          <div className="billing-address">
            <h2>Billing Address</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
          </div>

          <div className="payment-details">
            <h2>Payment Details</h2>
            <div className="form-group">
              <label htmlFor="momoType">Type of Mobile Money Accepted</label>
              <select
                id="momoType"
                name="momoType"
                onChange={handleMomoChange}
                required={!momoSelected}
              >
                <option value="">Select Mobile Money Type</option>
                <option value="MTN">MTN</option>
                <option value="Vodafone">Vodafone</option>
                <option value="AirtelTigo">AirtelTigo</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="amountCedis">Amount in Cedis</label>
              <input
                type="number"
                id="amountCedis"
                name="amountCedis"
                min="1"
                required={!momoSelected}
                disabled={momoSelected}
              />
            </div>
            {!momoSelected && (
              <>
                <div className="credit-card-info">
                  <label htmlFor="cardType">Type of Credit Card Accepted</label>
                  <img
                    src="./pay.png"
                    alt="Credit Card"
                    className="credit-card-image"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    required={!momoSelected}
                    disabled={momoSelected}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Credit Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required={!momoSelected}
                    disabled={momoSelected}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amountDollars">Amount in Dollars</label>
                  <input
                    type="number"
                    id="amountDollars"
                    name="amountDollars"
                    min="1"
                    required={!momoSelected}
                    disabled={momoSelected}
                  />
                </div>
              </>
            )}
          </div>

          <button type="submit" className="submit-button">
            Submit Payment
          </button>
        </form>

        {paymentSuccess && (
          <div className="payment-success">
            <h3>Payment Successful!</h3>
            <button onClick={handlePrintReceipt} className="print-receipt-button">
              Print Receipt
            </button>
          </div>
        )}
      </div>
    </>
  );
}
