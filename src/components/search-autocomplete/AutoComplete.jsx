import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

function AutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParams(query);
    if (query.length > 1) {
      let filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setShowDropdown(false);
    setSearchParams(e.target.innerText);
    setFilteredUsers([]);
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((user) => user.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e);
    }
  };

  useEffect(() => {
    fetchListOfUsers();

    return () => {
      setUsers([]);
      setLoading(false);
      setError(null);
    };
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="search-container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <input
          onChange={handleChange}
          value={searchParams}
          name="search-users"
          placeholder="Search..."
        />
      )}

      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}

export default AutoComplete;
