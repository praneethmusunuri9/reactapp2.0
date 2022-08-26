import React, { useEffect, useState} from "react";
import StarIcon from '@mui/icons-material/Star';
import "./StarGazerCount.css";


const StarGazerCount = ({starCount}) => {
  return (
    <div className="starGazeCount">
        <StarIcon className="starIcon"/><p className="starCount">{starCount}</p>
    </div>
  );

};

export default StarGazerCount;