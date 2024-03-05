import { useEffect, useState } from "react";
import User from "./User";

function GithubProfileFinder() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (link) => {
    setLoading(true);
    const response = await fetch(link);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
    console.log(data);
  };

  const handleSubmit = () => {
    fetchData(`https://api.github.com/users/${username}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search by github username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

export default GithubProfileFinder;
