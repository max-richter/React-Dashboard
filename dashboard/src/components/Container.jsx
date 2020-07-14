import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Toolbar from "./Toolbar";

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
