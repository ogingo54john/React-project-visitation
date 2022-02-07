import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Nairobi White Restoraunt",
    description: "One and only place to be",
    image:
      "https://assets.website-files.com/60f1652eb5020430cc0617c7/60f1652eb50204f34f06189b_g-kitisuru-25-p-500.jpeg",
    address: "Kenrail Towers, Terrace (T) Floor, South Wing, Next to 9 West",
    creator: "u1",
    location: {
      lat: -0.2964959,
      lng: 34.921038
    }
  },
  {
    id: "p2",
    title: "Nairobi White Restoraunt",
    description: "One and only place to be",
    image:
      "https://assets.website-files.com/60f1652eb5020430cc0617c7/60f1652eb502040248061899_g-kitisuru-31-p-500.jpeg",
    address: "Kenrail Towers, Terrace (T) Floor, South Wing, Next to 9 West",
    creator: "u2",
    location: {
      lat: -0.2964959,
      lng: 34.921038
    }
  }
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
