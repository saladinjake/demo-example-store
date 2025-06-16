import React from "react";
import { StyledLoader } from "./Loader.styles";


const Loader = ({ variant }: {variant: any}) => {
  return (
    <StyledLoader>
      <div className="spinner-wrap">
        <span className="spinner"></span>
      </div>
    </StyledLoader>
  );
};

export default Loader;
