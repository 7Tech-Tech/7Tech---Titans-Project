import React, { useState } from 'react';


export default function OwnerDashboard({ onBuildingAdd }) {
  const [buildingPicture, setBuildingPicture] = useState(null);
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [buildings, setBuildings] = useState([]);
  const [selectedBuilding, setSelectedBuilding] = useState('');

  const [agents, setAgents] = useState([
    { name: 'Agent 1', email: '', phone: '', address: '' },
    { name: 'Agent 2', email: '', phone: '', address: '' },
    { name: 'Agent 3', email: '', phone: '', address: '' }
  ]);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [newAgent, setNewAgent] = useState({ name: '', email: '', phone: '', address: '' });

  const handlePictureChange = (event) => {
    setBuildingPicture(URL.createObjectURL(event.target.files[0]));
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleAgentChange = (event) => {
    setSelectedAgent(event.target.value);
  };

  const handleDeleteAgent = () => {
    if (selectedAgent) {
      const updatedAgents = agents.filter(agent => agent.name !== selectedAgent);
      setAgents(updatedAgents);
      setSelectedAgent('');
      setNewAgent({ name: '', email: '', phone: '', address: '' });
    }
  };

  const handleAddAgent = () => {
    if (newAgent.name.trim() !== '' && !agents.some(agent => agent.name === newAgent.name.trim())) {
      const updatedAgents = [...agents, { ...newAgent, name: newAgent.name.trim() }];
      setAgents(updatedAgents);
      setNewAgent({ name: '', email: '', phone: '', address: '' });
      setSelectedAgent(newAgent.name.trim());
    }
  };

  const handleAgentDetailChange = (event) => {
    const { name, value } = event.target;
    setNewAgent({ ...newAgent, [name]: value });
  };

  const handleBuildingSubmit = (event) => {
    event.preventDefault();
    const newBuilding = {
      id: new Date().getTime(),
      picture: buildingPicture,
      price: price,
      location: location,
    };
    const updatedBuildings = [...buildings, newBuilding];
    setBuildings(updatedBuildings);
    onBuildingAdd(newBuilding);
    setBuildingPicture(null);
    setPrice('');
    setLocation('');
    alert('Building details saved successfully!');
  };

  const handleBuildingSelect = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    setSelectedBuilding(selectedId);
  };

  const handleDeleteBuilding = () => {
    if (selectedBuilding) {
      const updatedBuildings = buildings.filter(building => building.id !== selectedBuilding);
      setBuildings(updatedBuildings);
      setSelectedBuilding('');
    }
  };

  return (
    <section className="owner-dashboard">
      <h1>Owner Dashboard</h1>

      <form className="agent-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-section">
          <label htmlFor="agent">Select Agent</label>
          <select id="agent" value={selectedAgent} onChange={handleAgentChange}>
            <option value="" disabled>Select an agent</option>
            {agents.map(agent => (
              <option key={agent.name} value={agent.name}>{agent.name}</option>
            ))}
          </select>
        </div>

        <div className="form-section">
          <button type="button" onClick={handleDeleteAgent} disabled={!selectedAgent}>
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
            onChange={handleAgentDetailChange}
          />
        </div>

        <div className="form-section">
          <label htmlFor="newAgentEmail">Email</label>
          <input
            type="email"
            id="newAgentEmail"
            name="email"
            value={newAgent.email}
            onChange={handleAgentDetailChange}
          />
        </div>

        <div className="form-section">
          <label htmlFor="newAgentPhone">Phone</label>
          <input
            type="tel"
            id="newAgentPhone"
            name="phone"
            value={newAgent.phone}
            onChange={handleAgentDetailChange}
          />
        </div>

        <div className="form-section">
          <label htmlFor="newAgentAddress">Address</label>
          <input
            type="text"
            id="newAgentAddress"
            name="address"
            value={newAgent.address}
            onChange={handleAgentDetailChange}
          />
        </div>

        <div className="form-section">
          <button type="button" onClick={handleAddAgent}>Add Agent</button>
        </div>
      </form>

      <form className="building-form" onSubmit={handleBuildingSubmit}>
        <div className="form-section">
          <label htmlFor="buildingPicture">Building Picture</label>
          <input type="file" id="buildingPicture" accept="image/*" onChange={handlePictureChange} />
          {buildingPicture && <img src={buildingPicture} alt="Building" className="building-picture" />}
        </div>

        <div className="form-section">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" value={price} onChange={handlePriceChange} />
        </div>

        <div className="form-section">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>

        <button type="submit">Save Building Details</button>
      </form>

      <div className="form-section">
        <label htmlFor="buildings">Select Building</label>
        <select id="buildings" value={selectedBuilding} onChange={handleBuildingSelect}>
          <option value="" disabled>Select a building</option>
          {buildings.map(building => (
            <option key={building.id} value={building.id}>
              {building.location} - {building.price}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleDeleteBuilding} disabled={!selectedBuilding}>
          Delete Selected Building
        </button>
      </div>
    </section>
  );
}
