import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/2000px-Facebook_New_Logo_%282015%29.svg.png"
            alt=""
          />
          <div>
            <span className="teste">Meu Perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
