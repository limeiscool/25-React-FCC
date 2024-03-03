import PropTypes from "prop-types";
import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleToggleChildren = (label) => {
    setDisplayChildren({
      ...displayChildren,
      [label]: !displayChildren[label],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayChildren[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        to: PropTypes.string,
      })
    ),
  }),
};

export default MenuItem;
