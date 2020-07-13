import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Styled from 'styled-components';

function App() {
  return (
    <div style={containerStyle} className="App">
      <Container />
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Roboto'
};

export default App;
