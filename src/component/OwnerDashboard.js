import React, { useState } from 'react';

export default function OwnerDashboard({ onBuildingAdd, onAgentAdd }) {
  const [buildingPicture, setBuildingPicture] = useState(null);
  const [price, setPrice] = useState('');
  const [agents, setAgents] = useState(['Agent 1', 'Agent 2', 'Agent 3']);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [newAgent, setNewAgent] = useState('');
  const [location, setLocation] = useState('');

  const handlePictureChange = (event) => {
    setBuildingPicture(URL.createObjectURL(event.target.files[0]));
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAgentChange = (event) => {
    setSelectedAgent(event.target.value);
  };

  const handleDeleteAgent = () => {
    setAgents(agents.filter(agent => agent !== selectedAgent));
    setSelectedAgent('');
  };

  const handleAddAgent = () => {
    if (newAgent.trim() !== '') {
      setAgents([...agents, newAgent.trim()]);
      onAgentAdd(newAgent.trim()); // Notify parent component about the new agent
      setNewAgent('');
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBuilding = {
      picture: buildingPicture,
      price: price,
      location: location,
    };
    onBuildingAdd(newBuilding); // Notify parent component about the new building
    // Logic to handle form submission like saving data to the database
    alert('Building details saved successfully!');
  };

  return (
    <div className="owner-dashboard">
      <h1>Owner Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="buildingPicture">Building Picture</label>
          <input type="file" id="buildingPicture" accept="image/*" onChange={handlePictureChange} />
          {buildingPicture && <img src={buildingPicture} alt="Building" style={{ maxWidth: '300px', marginTop: '10px' }} />}
        </div>

        <div className="form-section">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" value={price} onChange={handlePriceChange} required />
        </div>

        <div className="form-section">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} required />
        </div>

        <div className="form-section">
          <label htmlFor="agent">Select Agent to Delete</label>
          <select id="agent" value={selectedAgent} onChange={handleAgentChange}>
            <option value="" disabled>Select an agent</option>
            {agents.map(agent => (
              <option key={agent} value={agent}>{agent}</option>
            ))}
          </select>
          <button type="button" onClick={handleDeleteAgent} disabled={!selectedAgent}>Delete Agent</button>
        </div>

        <div className="form-section">
          <label htmlFor="newAgent">Add New Agent</label>
          <input type="text" id="newAgent" value={newAgent} onChange={(e) => setNewAgent(e.target.value)} />
          <button type="button" onClick={handleAddAgent}>Add Agent</button>
        </div>

        <button type="submit">Save Building Details</button>
      </form>
    </div>
  );
}
