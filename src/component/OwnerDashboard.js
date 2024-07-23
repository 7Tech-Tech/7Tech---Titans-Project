import React, { useState } from 'react';
import axios from 'axios';

export default function OwnerDashboard({
  rooms = [],
  agents = [],
  onBuildingAdd,
  onBuildingDelete,
  onAgentAdd,
  onAgentDelete
}) {
  const [newBuilding, setNewBuilding] = useState({ image: '', price: '', location: '' });
  const [newAgent, setNewAgent] = useState({ name: '', email: '', phone: '', address: '' });
  const [buildingPicture, setBuildingPicture] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('');

  const handleBuildingSubmit = async (e) => {
    e.preventDefault();
    const newBuildingData = {
      image: buildingPicture,
      price: newBuilding.price,
      location: newBuilding.location
    };
    try {
      const response = await axios.post('/api/buildings', newBuildingData); // Replace with your backend API URL
      onBuildingAdd(response.data);
      setNewBuilding({ image: '', price: '', location: '' });
      setBuildingPicture('');
    } catch (error) {
      console.error('Error adding building:', error);
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBuildingPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBuilding({
      ...newBuilding,
      [name]: value
    });
  };

  const handleBuildingSelect = (e) => {
    setSelectedBuilding(e.target.value);
  };

  const handleDeleteBuilding = async () => {
    if (selectedBuilding) {
      try {
        await axios.delete(`/api/buildings/${selectedBuilding}`); // Replace with your backend API URL
        onBuildingDelete(selectedBuilding);
        setSelectedBuilding('');
      } catch (error) {
        console.error('Error deleting building:', error);
      }
    }
  };

  const handleAgentSelectChange = (e) => {
    setSelectedAgent(e.target.value);
  };

  const handleDeleteAgent = async () => {
    if (selectedAgent) {
      try {
        await axios.delete(`/api/agents/${selectedAgent}`); // Replace with your backend API URL
        onAgentDelete(selectedAgent);
        setSelectedAgent('');
      } catch (error) {
        console.error('Error deleting agent:', error);
      }
    }
  };

  const handleAgentChange = (e) => {
    const { name, value } = e.target;
    setNewAgent({ ...newAgent, [name]: value });
  };

  const handleAddAgent = async () => {
    try {
      const response = await axios.post('/api/agents', newAgent); // Replace with your backend API URL
      onAgentAdd(response.data);
      setNewAgent({ name: '', email: '', phone: '', address: '' });
    } catch (error) {
      console.error('Error adding agent:', error);
    }
  };

  return (
    <section className="owner-dashboard">
      <h1>Owner Dashboard</h1>

      <form className="building-form" onSubmit={handleBuildingSubmit}>
        <h2>Add New Building</h2>
        <div className="form-section">
          <label htmlFor="buildingPicture">Building Picture</label>
          <input type="file" id="buildingPicture" accept="image/*" onChange={handlePictureChange} aria-label="Building Picture" />
          {buildingPicture && <img src={buildingPicture} alt="Building" className="building-picture" />}
        </div>
        <div className="form-section">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" value={newBuilding.price} onChange={handleInputChange} aria-label="Price" />
        </div>
        <div className="form-section">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" value={newBuilding.location} onChange={handleInputChange} aria-label="Location" />
        </div>
        <button type="submit" aria-label="Save Building Details">Save Building Details</button>
      </form>

      <div className="form-section">
        <label htmlFor="buildings">Select Building</label>
        <select id="buildings" value={selectedBuilding} onChange={handleBuildingSelect} aria-label="Select Building">
          <option value="" disabled>Select a building</option>
          {rooms.map(building => (
            <option key={building.id} value={building.id}>
              {building.location} - {building.price}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleDeleteBuilding} disabled={!selectedBuilding} aria-label="Delete Selected Building">
          Delete Selected Building
        </button>
      </div>

      <div className="uploaded-buildings-container">
        <h2>Uploaded Buildings</h2>
        <div className="buildings-list">
          {rooms.map(building => (
            <div key={building.id} className="building-card">
              <img src={building.image} alt="Building" className="building-picture" />
              <p>Price: {building.price}</p>
              <p>Location: {building.location}</p>
            </div>
          ))}
        </div>
      </div>

      <form className="agent-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Manage Agents</h2>
        <div className="form-section">
          <label htmlFor="agent">Select Agent</label>
          <select id="agent" value={selectedAgent} onChange={handleAgentSelectChange} aria-label="Select Agent">
            <option value="" disabled>Select an agent</option>
            {agents.map(agent => (
              <option key={agent.name} value={agent.name}>{agent.name}</option>
            ))}
          </select>
        </div>
        <div className="form-section">
          <button type="button" onClick={handleDeleteAgent} disabled={!selectedAgent} aria-label="Delete Selected Agent">
            Delete Selected Agent
          </button>
        </div>
        <div className="form-section">
          <label htmlFor="newAgentName">Agent Name</label>
          <input
            type="text"
            id="newAgentName"
            name="name"
            value={newAgent.name}
            onChange={handleAgentChange}
            aria-label="Agent Name"
          />
        </div>
        <div className="form-section">
          <label htmlFor="newAgentEmail">Email</label>
          <input
            type="email"
            id="newAgentEmail"
            name="email"
            value={newAgent.email}
            onChange={handleAgentChange}
            aria-label="Agent Email"
          />
        </div>
        <div className="form-section">
          <label htmlFor="newAgentPhone">Phone</label>
          <input
            type="tel"
            id="newAgentPhone"
            name="phone"
            value={newAgent.phone}
            onChange={handleAgentChange}
            aria-label="Agent Phone"
          />
        </div>
        <div className="form-section">
          <label htmlFor="newAgentAddress">Address</label>
          <input
            type="text"
            id="newAgentAddress"
            name="address"
            value={newAgent.address}
            onChange={handleAgentChange}
            aria-label="Agent Address"
          />
        </div>
        <div className="form-section">
          <button type="button" onClick={handleAddAgent} aria-label="Add Agent">Add Agent</button>
        </div>
      </form>
    </section>
  );
}
