import React from "react";
import { FiSettings, FiBell } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

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
          <IconContext.Provider
            value={{
              size: "1.5em",
              color: "#282828",
              style: {
                marginLeft: "1em",
              },
            }}
          >
            <form class="form-inline col-auto">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <a href="./">
                <FiBell />
              </a>

              <div class="dropdown">
                <a
                  href="./"
                  class="dropdown-toggle"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                >
                  <FiSettings />
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                    Account
                  </a>
                  <a class="dropdown-item" href="#">
                    Sign Out
                  </a>
                </div>
              </div>
            </form>
          </IconContext.Provider>
        </nav>
      </div>
    );
  }
}

/**
 *  NOTES
 * clean up JSX? Should there be a notification icon?
 * 
 */


export default Toolbar;
