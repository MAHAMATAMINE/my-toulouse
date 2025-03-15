import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const FavoritePlace = ({ place, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/places/${place.id}`);
      onDelete(place.id); // Remove the place from the UI after deleting
    } catch (error) {
      console.error("Error deleting place:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
      <Link to={`/places/${place.id}`}>
        <img src={place.image} alt={place.name} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h2 className="text-xl font-bold mb-2">{place.name}</h2>
        <p className="text-sm text-gray-500 mt-2">- {place.author}</p>
      </Link>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default FavoritePlace;
