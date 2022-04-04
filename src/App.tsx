import { useEffect, useState } from "react";
import axios from "axios";
import { useFecth } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFecth<Repository[]>(
    "/diego3g/repos"
  );

  return (
    <ul>
      {isFetching ? (
        <div>loading...</div>
      ) : (
        repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default App;
