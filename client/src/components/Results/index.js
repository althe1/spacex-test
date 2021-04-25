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
                <h4>{missionName} Mission</h4>
                <div className="card-body">
                  <div>
                    <h3>
                      Launch date:{" "}
                      {format(new Date(launchDate), "MMMM dd, yyyy")}
                    </h3>
                  </div>
                  <div>
                    <h3>Rocket: {rocketName}</h3>
                  </div>
                </div>
                <div>
                  <a
                    class="button"
                    target="_blank"
                    rel="noreferrer"
                    href={videoLink}
                  >
                    Watch YouTube video of Flight >
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
