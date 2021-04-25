import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { format } from "date-fns";
import "./App.css";
import logo from "./spacex-logo.png";

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
      <div className="search-form">
        <img src={logo} />
        <h3>Search by Rocket Name, Launch Year, or Mission Name</h3>
        <div class="row">
          <input
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button
            class="button"
            style={{ marginLeft: "1rem" }}
            onClick={() => refetch()}
          >
            Search
          </button>
        </div>
      </div>
      <div className="results-header">
        <h3>Results</h3>
        {error && <div>Error</div>}
        {loading && <div>Loading</div>}
      </div>
      <div className="results">
        {data &&
          data.launchesBySearch &&
          data.launchesBySearch.length > 0 &&
          data.launchesBySearch.map(
            ({ missionName, launchDate, rocketName, videoLink }) => (
              <div className="card">
                <h4>Mission: {missionName}</h4>
                <h5>Rocket: {rocketName}</h5>
                <h6>{format(new Date(launchDate), "MM/dd/yyyy")}</h6>
                <div>
                  Video link:{" "}
                  <a target="_blank" href={videoLink}>
                    {videoLink}
                  </a>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}

export default App;
