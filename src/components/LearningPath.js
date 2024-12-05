import React from "react";

const LearningPath = ({ path }) => {
  return (
    <div>
      <h2>Your Personalized Learning Path</h2>
      <ul>
        {path.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

