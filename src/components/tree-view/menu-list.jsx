import PropTypes from "prop-types";
import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((item, i) => <MenuItem key={i} item={item} />)
        : null}
    </ul>
  );
}
MenuList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          to: PropTypes.string,
        })
      ),
    })
  ),
};

export default MenuList;
