import React from 'react'
import { ScaleLoader } from 'react-spinners'
function Loder() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <ScaleLoader color="#FF8905" />
    </div>
  );
}

export default Loder
