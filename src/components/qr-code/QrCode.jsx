import { useState } from "react";
import QRCode from "react-qr-code";

function QRGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGeneration = () => {
    setQrCode(input);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onClick={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          id="qr-code"
          placeholder="Enter text to generate QR Code"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneration}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
}

export default QRGenerator;
