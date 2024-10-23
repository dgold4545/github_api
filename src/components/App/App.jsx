import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./App.css";
import { fetchHithubUserByNick } from "../../api/github-api";
import UserUi from "../UserUi/UserUi";

export default function App() {
  const [dataUser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGetUserDataFromGithubApi = async (userName) => {
    try {
      setDataUser(null);
      setError(false);
      setLoading(true);
      const data = await fetchHithubUserByNick(userName);
      setDataUser(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  console.log(dataUser);
  return (
    <div>
      <h1>Search github user by tag name</h1>
      <SearchForm onSearch={handleGetUserDataFromGithubApi} />
      {loading && <p>Loading wait for a minute... </p>}
      {!dataUser ? (
        <p>Opps...Sorry we can not find by your request..</p>
      ) : (
        <UserUi dataUser={dataUser} />
      )}
    </div>
  );
}
