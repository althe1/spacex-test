import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import "./App.css";
import logo from "./spacex-logo.png";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";

const EXCHANGE_RATES = gql`
  query getLaunchesSearch($searchTerm: String) {
    launchesBySearch(search: $searchTerm) {
      missionName
      rocketName
      launchDate
      videoLink
    }
  }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, error, data, refetch } = useQuery(EXCHANGE_RATES, {
    variables: { searchTerm },
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      refetch();
    }
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="SpaceX Logo" />
      <SearchForm
        setSearchTerm={setSearchTerm}
        handleKeyDown={handleKeyDown}
        refetch={refetch}
      />
      <Results loading={loading} error={error} data={data} />
    </div>
  );
}

export default App;
