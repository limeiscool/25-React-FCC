import { useState } from "react";
import data from "./data";
import "./styles.css";

// single selection
// multi selction

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [active, setActive] = useState([]);

  const handleSingleSelction = (ID) => {
    console.log(ID);
    setSelected(ID === selected ? null : ID);
  };

  const handleMultiSelction = (ID) => {
    let activeCopy = [...active];
    const Index = activeCopy.indexOf(ID);
    if (Index === -1) {
      activeCopy.push(ID);
    } else {
      activeCopy.splice(Index, 1);
    }
    setActive(activeCopy);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setSelected(null);
          setActive([]);
          setMultiSelect(!multiSelect);
        }}
      >
        Enable Multi Select
      </button>
      <div className="accordian">
        {data.map((item) => {
          console.log(selected);
          return data && data.length > 0 ? (
            <div className="item">
              <div
                onClick={
                  multiSelect
                    ? () => handleMultiSelction(item.id)
                    : () => handleSingleSelction(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiSelect
                ? active.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
              {/* {selected === item.id || active.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null} */}
            </div>
          ) : (
            <div>No data!</div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordian;
