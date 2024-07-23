
import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Header Section */}
      <section className="header-section">
        <h1>About Us</h1>
        <p>Welcome to our platform! Learn more about our owner, how to use the app, and what to do if you lose your payment receipt.</p>
      </section>

      {/* Owner Info Section */}
      <section className="owner-info">
        <img src="./agent.jpg" alt="" />
        <div className="owner-details">
          <h2>Meet the Owner</h2>
          <p>Hello, I'm [Owner's Name], the proud owner of this estate website. I have a passion for [Owner's Interests] and am dedicated to providing a wonderful experience for our guests. Feel free to reach out if you have any questions or need assistance!</p>
        </div>
      </section>

      {/* App Usage Section */}
      <section className="usage-info">
        <h2>How to Use the App</h2>
        <p>Our app is designed to make your experience seamless and enjoyable. Here's a brief overview:</p>
        <ul>
          <li>Browse available rooms and properties.</li>
          <li>Add items to your cart for rental or purchase.</li>
          <li>Proceed to checkout and make secure payments.</li>
          <li>View and manage your bookings through your profile.</li>
        </ul>
      </section>

      {/* Receipt Issue Section */}
      <section className="receipt-issue">
        <h2>Lost Receipt Information</h2>
        <p>If you lose your payment receipt, please contact our support team immediately. We will assist you in retrieving your payment details or provide an alternative solution. Ensure you keep a copy of your receipt to avoid any inconvenience.</p>
        <p>Office Line<b/>: 0559157391</p>
        <p>Email<b/>: bgrant001@st.ug.edu.gh</p>

      </section>
    </div>
  );
}
