import { useState } from "react";
import PropTypes from "prop-types";

function Tabs({ tabContent, onChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnClick = (index) => {
    setActiveTab(index);
    onChange(index);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {tabContent.map((item, index) => (
          <div
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={item.label}
          >
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div
        className="content"
        style={{
          color: "red",
        }}
      >
        {tabContent[activeTab] && tabContent[activeTab].content}
      </div>
    </div>
  );
}
Tabs.propTypes = {
  tabContent: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.node,
    })
  ),
  onChange: PropTypes.func,
};

export default Tabs;
