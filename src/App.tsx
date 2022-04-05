import { useEffect, useState } from "react";
import axios from "axios";
import { useFecth } from "./hooks/useFetch";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import { Repos } from "./pages/Repos";
import { Repo } from "./pages/Repo";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  // const { data: repositories, isFetching } =
  //   useFecth<Repository[]>("/diego3g/repos");

  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repos/*" element={<Repo />} />
    </Routes>
  );
}

export default App;
