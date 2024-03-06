import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColor from "../random-color/index";
import Accordian from "../accordian/";
import TreeView from "../tree-view/tree-view";
import treeData from "../tree-view/tree-data";
import TabSwitcher from "../custom-tabs/TabSwitcher";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context/Context";

function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showThemeSwitcher",
      component: <ThemeSwitcher />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomwColor",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={treeData} />,
    },
    {
      key: "showTabs",
      component: <TabSwitcher />,
    },
  ];

  const checkEnabled = (key) => {
    return enabledFlags[key];
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((component) =>
        checkEnabled(component.key) ? component.component : null
      )}
    </div>
  );
}

export default FeatureFlags;
