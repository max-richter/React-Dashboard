import React from "react";
import { IconContext } from "react-icons";
import { FiGlobe, FiBarChart2, FiMap, FiBell, FiInfo } from "react-icons/fi";
import { AiFillRocket } from "react-icons/ai";
import styled from "styled-components";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  /**
   * Here we render the sidebar component, it's links and icons
   * NOTE: Still need to figure out how to add a hover effect to the links
   */
  render() {
    return (
      <div
        style={sideBarStyle}
        class="col-2 px-1 position-fixed"
        id="sticky-sidebar"
      >
        <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2 sidebarlinks">
          <IconContext.Provider
            value={{
              color: "#8FBC8F",
              size: "2em",
              style: { paddingRight: "10px", paddingBottom: "5px" },
            }}
          >
            <a style={sidebarTitleStyle}>
              <FiGlobe /> Hi, USERNAME
            </a>
            <hr style={horizontalLine} />
            <Link href="./" class="nav-link">
              <FiBarChart2 /> Dashboard
            </Link>
            <Link href="./" class="nav-link">
              <FiMap /> Maps
            </Link>
            <Link href="./" class="nav-link">
              <FiBell /> Notifications
            </Link>
            <Link href="./" class="nav-link">
              <FiInfo /> About
            </Link>
            <FooterLink href='./' class="nav-link">
              <AiFillRocket /> UPGRADE TO PRO
            </FooterLink>
          </IconContext.Provider>
        </div>
      </div>
    );
  }
}

/**
 * STYLING OBJECTS BELOW
 */

// styles horizontal line below username
const horizontalLine = {
  display: "block",
  height: "1px",
  border: "0",
  borderTop: "2px solid #929292",
  margin: "0.5em 0",
  padding: "0",
};

/* DELETE THIS AFTER ENTIRE PAGE IS STYLED (used as reference) */
// const linkStyle = {
//   color: "#A6A6A6",
//   padding: "1em",
//   fontWeight: "bold",
//   letterSpacing: "1px",
//   textAlign: "left"
// };

// sets color of sidebar
const sideBarStyle = {
  backgroundColor: "#282828",
};

// styles sidebar title (username)
const sidebarTitleStyle = {
  textAlign: "left",
  letterSpacing: "1px",
  fontWeight: "bold",
  fontSize: "21px",
};

// styles links
const Link = styled.a`
  color: #a6a6a6;
  padding: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: left;
  &:hover {
    color: #a0b8a0;
    cursor: pointer;
    text-decoration: none;
    background-color: #252525;
    border-radius: 25px;
  }
`;

// styles footer (upgrade button)
const FooterLink = styled.a`
  color: #A6A6A6;
  position: absolute;
  bottom: 0%;
  padding: 1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: left;
  &:hover {
    color: #A0B8A0;
    cursor: pointer;
    text-decoration: none;
    background-color: #252525;
    border-radius: 25px;
  }
`;

export default Sidebar;
