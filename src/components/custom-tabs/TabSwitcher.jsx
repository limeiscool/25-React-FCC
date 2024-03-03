import Tabs from "./Tabs";
import "./tabs.css";

function TabSwitcher() {
  const RandomComponent = () => {
    return <div>Random Component</div>;
  };

  const handleChange = (activeIndex) => {
    console.log(activeIndex);
  };

  const tabs = [
    {
      label: "Tab 1",
      content: <div>Tab 1 Content</div>,
    },
    {
      label: "Tab 2",
      content: <div>Tab 2 Content</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  return <Tabs tabContent={tabs} onChange={handleChange} />;
}

export default TabSwitcher;
