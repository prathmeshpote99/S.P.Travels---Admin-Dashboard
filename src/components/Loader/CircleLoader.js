import React from "react";
import { CircleLoader } from "react-awesome-loaders";

const CircleLoaders = () => {
  return (
    <div>
      <CircleLoader
        meshColor={"#ffffff"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
    </div>
  );
};

export default CircleLoaders;
