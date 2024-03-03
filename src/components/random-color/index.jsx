import { useState } from "react";

function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const colotUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateHex = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let newHex = "#";
    for (let i = 0; i < 6; i++) {
      newHex += hex[colotUtil(hex.length)];
    }
    setColor(newHex);
  };
  const generateRgb = () => {
    const r = colotUtil(256);
    const g = colotUtil(256);
    const b = colotUtil(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button
        onClick={() => {
          if (colorType !== "hex") {
            setColorType("hex");
            generateHex();
          }
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          if (colorType !== "rgb") {
            setColorType("rgb");
            generateRgb();
          }
        }}
      >
        Create RGB Color
      </button>
      <button onClick={colorType === "hex" ? generateHex : generateRgb}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "25px",
          marginTop: "100px",
          flexDirection: "column",
        }}
      >
        <h1>{color}</h1>
        <h3>{colorType === "rgb" ? "RGB" : "HEX"}</h3>
      </div>
    </div>
  );
}

export default RandomColor;
