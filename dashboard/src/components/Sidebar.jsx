import React from "react";

class Sidebar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  
  render() {
    
    //const { hovered } = this.state;
    //const style = hovered ? { color: '#65A0CF', padding: '1em' } : { color: '#A6A6A6', padding: '1em' };
    
    return (
      <div style={sideBarStyle} class="col-2 px-1 position-fixed" id="sticky-sidebar">
        <div class="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
          <a>React Dashboard</a>
          <hr style={horizontalLine}/>
          <a style={linkStyle} href="./" class="nav-link">
            Dashboard
          </a>
          <a style={linkStyle} href="./" class="nav-link">
            Maps
          </a>
          <a style={linkStyle} href="./" class="nav-link">
            Notifications
          </a>
          <a style={linkStyle} href="./" class="nav-link">
            About
          </a>
          <a style={linkStyle} href="./" class="nav-link">
            Link
          </a>
        </div>
      </div>
    );
  }
}

const horizontalLine = {
  display: 'block',
  height: '1px',
  border: '0',
  borderTop: '2px solid #929292',
  margin: '0.5em 0',
  padding: '0'
};

const linkStyle = {
  color: '#A6A6A6',
  padding: '1em',
  fontWeight: 'bold',
  letterSpacing: '1px'
};

const sideBarStyle = {
  backgroundColor: '#282828'
};



export default Sidebar;