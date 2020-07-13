import React from "react";
import Sidebar from './Sidebar';
import MainContent from "./MainContent";


class Container extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <MainContent />
        </div>
      </div>
    );
  }
}

export default Container;