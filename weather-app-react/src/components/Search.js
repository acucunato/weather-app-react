import React from "react";

const Search = () => {
  return (
    <div className="container pt-3">
      <form>
        <div>
          <h3>search for a city</h3>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="city-input"
            placeholder="City"
          />
          <br />
          <button type="button" className="btn btn-light me-3" id="search-btn">
            Search
          </button>
          <button className="btn btn-light" id="clear-all">
            Clear Results
          </button>
          <div id="error-message" className="p-3"></div>
        </div>
      </form>
      <hr />
      <div className="results container">results will render here</div>
    </div>
  );
};

export default Search;
