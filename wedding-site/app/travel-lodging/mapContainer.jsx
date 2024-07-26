import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MapComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadMap = async () => {
      try {
        // Simulate an async load, such as fetching settings or other map-related data
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();
  }, []);

  return (
    <div>
      {isLoaded ? (
        <LoadScript googleMapsApiKey="test">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {
            }
            <></>
          </GoogleMap>
        </LoadScript>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MapComponent;
