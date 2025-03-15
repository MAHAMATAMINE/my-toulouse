import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlaceDetails = () => {

  const {id} = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
  axios
  .get(`http://localhost:8080/places/${id}`)
  .then((response)=>{
    setPlace(response.data);
    setLoading(false)
  } )
  .catch((error)=>{
    console.log("error place details",error);
    setError("failed to load");
    setLoading(false)
  });
},[id]);

if (loading) return <p className="text-center text-xl">Loading...</p>;
if (error) return <p className="text-center text-red-500">{error}</p>;


return (
  <div className="bg-gray-100 min-h-screen p-6 flex justify-center">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
      <p className="text-gray-700 mb-4">{place.description}</p>
      <p className="text-sm text-gray-500">- {place.author}</p>
      <Link to="/" className="mt-4 block text-blue-500 hover:underline">
        Back to Places
      </Link>
    </div>
  </div>
);
}
 
export default PlaceDetails;