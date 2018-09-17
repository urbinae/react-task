import React from 'react';

const Navigation = ({titulo}) => {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/" className="text-white">
          {titulo}
        </a>
      </nav>
      );
  
}

export default Navigation;
