import React, { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState({
    room1: 0,
    room2: 0,
    room3: 0,
    // Add other rooms as needed
  });

  const [dislikes, setDislikes] = useState({
    room1: 0,
    room2: 0,
    room3: 0,
    // Add other rooms as needed
  });

  const [agents, setAgents] = useState(['Agent 1', 'Agent 2', 'Agent 3']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [agentInfoVisible, setAgentInfoVisible] = useState(false); // State for AgentInfo visibility
  const [rooms, setRooms] = useState([
    { id: 'room1', image: './image1.jpg', likes: 0, dislikes: 0 },
    { id: 'room2', image: './image2.jpg', likes: 0, dislikes: 0 },
    { id: 'room3', image: './image3.jpg', likes: 0, dislikes: 0 },
    // Add other rooms as needed
  ]);

  const [newBuilding, setNewBuilding] = useState({ picture: '', price: '', location: '' });
  const [newAgent, setNewAgent] = useState({ name: '', email: '', phone: '', address: '' });

  const handleLike = (room) => {
    setLikes((prevLikes) => ({...prevLikes, [room]: prevLikes[room] + 1 }));
  };

  const handleDislike = (room) => {
    setDislikes((prevDislikes) => ({...prevDislikes, [room]: prevDislikes[room] + 1 }));
  };

  const handleRent = (room) => {
    if (!isLoggedIn) {
      alert('Please log in first');
      return;
    }
    // Redirect to payment page
    window.location.href = './component/payment';
  };

  const handleBuy = (room) => {
    if (!isLoggedIn) {
      alert('Please log in first');
      return;
    }
    // Redirect to payment page
    window.location.href = './component/payment';
  };

  const handleAgentInfo = () => {
    // Toggle visibility of AgentInfo section
    setAgentInfoVisible(!agentInfoVisible);
  };

  const handleBuildingAdd = () => {
    // Update rooms state to include the new building
    const newRoom = {
      id: `room${rooms.length + 1}`, // Generate unique id
      image: newBuilding.picture,
      likes: 0,
      dislikes: 0,
    };
    setRooms([...rooms, newRoom]);
    setNewBuilding({ picture: '', price: '', location: '' }); // Reset newBuilding state
  };

  const handleAgentAdd = () => {
    // Update agents state to include the new agent
    setAgents([...agents, newAgent.name]);
    setNewAgent({ name: '', email: '', phone: '', address: '' }); // Reset newAgent state
  };

  const handleBuildingChange = (event) => {
    const { name, value } = event.target;
    setNewBuilding({...newBuilding, [name]: value });
  };

  const handleAgentChange = (event) => {
    const { name, value } = event.target;
    setNewAgent({...newAgent, [name]: value });
  };


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
            <div className="room" key={room.id}>
              <img src={room.image} alt={`Room ${room.id}`} />
              <h6>Virtual tour of {room.id}</h6>
              <div className="lk">
                <button className="like-button" onClick={() => handleLike(room.id)}>👍 Like ({likes[room.id]})</button>
                <button className="dislike-button" onClick={() => handleDislike(room.id)}>👎 Dislike ({dislikes[room.id]})</button>
                <button className="buy-button" onClick={() => handleBuy(room.id)}>🏡 Buy</button>
                <button className="rent-button" onClick={() => handleRent(room.id)}>🏡 Rent</button>
                <button className="agent" onClick={handleAgentInfo}> AgentInfo </button>
              </div>
              <button className="details">Details</button>
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

      {agentInfoVisible && (
        <section className="wrapper">
          <div className="paddings innerWidth flexCenter hero-container">
            <div className="hero-left">
              <span className="first-span">Our Agent Contacts</span><br />
              <span className="second-span">Easy To Contact (Guest Only)</span>,<br />
              <span className="third-span">We are always ready<br /> to assist by offering the greatest <br />services for you. We think that a nice<br /> place to live may improve your life.</span>

              <div className="c-container">
                <div className="contactInfo">
                  <div className="box">
                    <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                    <div className="text">
                      <h3>Address</h3>
                      <p>Amatwetwegu street 33</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon"><i className="fa fa-phone"></i></div>
                    <div className="text">
                      <h3>Phone</h3>
                      <p>0559157391</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon"><i className="fa fa-envelope"></i></div>
                    <div className="text">
                      <h3>Email</h3>
                      <p>bgrant001@st.ug.edu.gh</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="centerForm">
              <form>
                <h2>Send A Message</h2>
                <div className="inputBox">
                  <input type="text" name="name" required />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="email" name="email" required />
                  <span>Email</span>
                </div>
                <div className="inputBox">
                  <textarea required></textarea>
                  <span>Type Your Message....</span>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>

            <div className="hero-right">
              <div className="image-container">
                <img src="./nice.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      )}

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
            <h3>Information</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>
        </div>
      </div>



    </>
  );
}
