const SearchForm = ({ setSearchTerm, handleKeyDown, refetch }) => {
  return (
    <div className="search-form">
      <h3>Search by Rocket Name, Launch Year, or Mission Name</h3>
      <div className="row">
        <input
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          className="button"
          style={{ marginLeft: "1rem" }}
          onClick={() => refetch()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
