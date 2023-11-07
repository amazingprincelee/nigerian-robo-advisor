import React from 'react';


const Header = () => {
    const headerStyle = {
        backgroundColor: '#004d00', 
        color: 'white',
        padding: '10px 0',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', 
        textAlign: 'center',
        fontSize: '24px', 
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)', 
        marginBottom: '30px', 
      };

  return (
    <header className="header" style={headerStyle}>
      Welcome to Nigeria ReboAdvisor - Your Trusted Guide for Navigating the Nigerian Business Landscape
    </header>
  );
};

export default Header;
