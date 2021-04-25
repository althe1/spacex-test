import { format } from "date-fns";

const Results = ({ error, loading, data }) => {
  return (
    <>
      <div className="results-header">
        <h3>Results</h3>
        {error && <div>Error</div>}
        {loading && <div>Loading</div>}
        {data && data.launchesBySearch === null && (
          <div>No launch matching search. Please retry search.</div>
        )}
      </div>
      <div className="results">
        {data &&
          data.launchesBySearch &&
          data.launchesBySearch.length > 0 &&
          data.launchesBySearch.map(
            ({ missionName, launchDate, rocketName, videoLink }, index) => (
              <div className="card" key={`${videoLink}${index}`}>
                <h4>Mission: {missionName}</h4>
                <h5>Rocket: {rocketName}</h5>
                <h6>{format(new Date(launchDate), "MM/dd/yyyy")}</h6>
                <div>
                  Video link:{" "}
                  <a target="_blank" rel="noreferrer" href={videoLink}>
                    {videoLink}
                  </a>
                </div>
              </div>
            )
          )}
      </div>
    </>
  );
};

export default Results;
