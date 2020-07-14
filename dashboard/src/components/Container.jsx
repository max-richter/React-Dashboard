import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Toolbar from "./Toolbar";

/**
 * This container holds all of the components which flow up to it
 * Cleans up code throughout each component as it contains
 * all components necessary to build the dashboard
 */
class Container extends React.Component {
  render() {
    return (
      <div class="container-fluid w-auto">
        <div class="row">
          <Toolbar />
          <Sidebar />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default Container;
