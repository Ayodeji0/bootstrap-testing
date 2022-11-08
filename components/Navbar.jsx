import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <button className="navbar-brand btn">ONEONEONE</button>
        </Link>

        <button type="button" className="btn btn-light btn-sm">
          {" "}
          <i className="bi bi-box-arrow-in-right"> Login</i>
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
