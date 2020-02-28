import React, { useState } from "react";
import GeoProxy from "./GeoProxy";

const geo = new GeoProxy();
const locations = ["Amsterdam", "London", "Paris"];

function App() {
  const [location, setLocation] = useState(locations[0]);

  const [latlng, setLatlng] = useState("");

  const getLatLng = () => {
    setLatlng(geo.getLatLng(location));
  };
  return (
    <div className="App">
      <select defaultValue={location} onChange={(e) => setLocation(e.target.value)}>
        {locations.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </select>
      <button onClick={getLatLng}>Get Lat/Long</button>
      <p>The Lat/Long is: {latlng}</p>
    </div>
  );
}

export default App;
