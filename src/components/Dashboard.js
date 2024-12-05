import React from "react";

const Dashboard = ({ progress }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Modules Completed: {progress.completed} / {progress.total}</p>
    </div>
  );
};

