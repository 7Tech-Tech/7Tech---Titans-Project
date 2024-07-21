import React, { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rooms, setRooms] = useState([
    { id: 'room1', image: './image1.jpg', likes: 0, dislikes: 0 },
    { id: 'room2', image: './image2.jpg', likes: 0, dislikes: 0 },
    { id: 'room3', image: './image3.jpg', likes: 0, dislikes: 0 },
  ]);

  const handleLike = (roomId) => {
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, likes: room.likes + 1 } : room
    ));
  };

  const handleDislike = (roomId) => {
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, dislikes: room.dislikes + 1 } : room
    ));
  };

  const handleRent = () => {
    if (!isLoggedIn) {
      alert('Please log in first');
      return;
    }
    window.location.href = './component/home';
  };

  const handleBuy = () => {
    if (!isLoggedIn) {
      alert('Please log in first');
      return;
    }
    window.location.href = './component/home';
  };

  if (isLoggedIn) {
    // Redirect logged-in users or show a message
    window.location.href = './component/home'; // Example redirect
    return null; // Alternatively, return a message or another component
  }

  return (
    <>
      <div className="video-container">
        <video src="./video 1.mp4" autoPlay loop muted />
        <h1>WELCOME TO 7<br />TECH TITANS ESTATE</h1>
        <h2>How Will You Like Us To Serve You</h2>
        <p>Grab One Building</p>
      </div>

      <div className="Rest">
        <a href="#">WELCOME TO REST</a>
      </div>

      <div className="rooms">
        <h1>Check Out Some of Our Most Popular Buildings</h1>
        <p>Let's Go For Virtual Tour!</p>

        <div className="course1">
          <h2>The Rooms Are Elegant and Cozy</h2>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <i className="fa fa-share-alt" aria-hidden="true"></i>
          <button>Reserve your holiday home stay</button>
        </div>

        <div className="course2">
          <button><i className="fa fa-magic" aria-hidden="true"></i>We Price Match</button>
        </div>

        <div className="room-box">
          {rooms.map(room => (
            <div className={`room ${room.id === 'room1' ? 'big-room' : ''}`} key={room.id}>
              <img src={room.image} alt={`Room ${room.id}`} />
              <h6>Virtual tour of {room.id}</h6>
              <div className="lk">
                <button className="like-button" onClick={() => handleLike(room.id)}>👍 Like ({room.likes})</button>
                <button className="dislike-button" onClick={() => handleDislike(room.id)}>👎 Dislike ({room.dislikes})</button>
                <button className="buy-button" onClick={() => handleBuy(room.id)}>🏡 Buy</button>
                <button className="rent-button" onClick={() => handleRent(room.id)}>🏡 Rent</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="icons">
        <div className="icon">
          <button><i className="fa fa-home" aria-hidden="true"></i> Enter House</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-sitemap" aria-hidden="true"></i> Site Map</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-bed" aria-hidden="true"></i> Bed</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-product-hunt" aria-hidden="true"></i> Car Park Free</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-bath" aria-hidden="true"></i> Hot Tub</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-street-view" aria-hidden="true"></i> Street View</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-eye" aria-hidden="true"></i> Vision</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-users" aria-hidden="true"></i> Family Room</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-air-conditioner" aria-hidden="true"></i> Air Condition</button>
        </div>
        <div className="icon">
          <button><i className="fa fa-wifi" aria-hidden="true"></i> Free Wifi</button>
        </div>
      </div>

      <hr />

      <div className="footer">
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-snapchat"></i>
        </div>

        <div className="container-f">
          <div className="col">
            <h3>About</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>

          <div className="col">
            <h3>Company</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>

          <div className="col">
            <h3>Company</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>
        </div>

        <hr />
        <h5>All Rights Reserved &copy; 2022</h5>
      </div>
    </>
  );
}
