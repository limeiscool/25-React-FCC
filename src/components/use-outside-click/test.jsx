import { useRef, useState } from "react";
import UseOutsideClick from "./UseOutsideClick";

export default function UseOutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>Random Content</h1>
          <p>Please click outside to close this window</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
