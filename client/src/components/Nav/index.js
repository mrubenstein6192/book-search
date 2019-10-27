import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
       Search
      </a>
      
      <a className="navbar-brand" href="/books">
       | Saved Books
      </a>
    </nav>
  );
}

export default Nav;