import React, { useEffect, useState } from "react";
import FavoritePlace from "./FavoritePlace";
import axios from "axios";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/places")
      .then((response) => {
        setPlaces(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
        setError("Failed to load");
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setPlaces(places.filter((place) => place.id !== id)); // Remove from state
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Favorite Places in Toulouse</h1>
      <div className="flex flex-wrap justify-center">
        {places.map((place) => (
          <FavoritePlace key={place.id} place={place} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
