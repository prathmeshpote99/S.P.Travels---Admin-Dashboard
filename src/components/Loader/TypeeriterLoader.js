import { useMaterialUIController } from "context";
import React from "react";

const Loader = () => {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <div>
      <div className="typewriter opacity-50" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default Loader;
