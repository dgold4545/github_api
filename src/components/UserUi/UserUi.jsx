export default function UserUi({
  dataUser: {
    avatar_url,
    login,
    bio,
    name,
    url,
    public_repos,
    created_at,
    followers,
  },
}) {
  return (
    <ul>
      <li>
        <img src={avatar_url} alt={name || login} width="300px" />
      </li>
      {name ? (
        <li>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </li>
      ) : (
        <li>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {login}
          </a>
        </li>
      )}

      <li>public_repos: {public_repos}</li>
      <li>created_at: {created_at}</li>
      <li>followers: {followers}</li>
      {bio && <li>bio: {bio}</li>}
    </ul>
  );
}
