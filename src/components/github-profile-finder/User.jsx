import PropTypes from "prop-types";

function User({ user }) {
  const { avatar_url, followers, following, public_repos, name, login } = user;
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User avatar" />
      </div>
      <div>
        <a>{name || login}</a>
      </div>
    </div>
  );
}

export default User;
