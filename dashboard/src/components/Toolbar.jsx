import React from "react";

/**
 * Toolbar implementing bootstrap's navbar component
 * Used for search, settings, sign in
 */
class Toolbar extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand offset-2">Dashboard</a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Toolbar;
