import React from "react";
import { useParams, useLocation } from "react-router-dom";

const PersonDetails = () => {
  const { id } = useParams();
  const { state: person } = useLocation();
 
  console.log(id);
  return (
    <div className="container text-center">
      <h3>{person.first_name}</h3>
    </div>
  );
};

export default PersonDetails;
