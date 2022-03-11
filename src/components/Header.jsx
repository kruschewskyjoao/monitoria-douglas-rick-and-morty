import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Título</h1>
        <Link to='/characters'>Characters</Link>
        <Link to='/episodes'>Episodes</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }
  }

export default Header;
