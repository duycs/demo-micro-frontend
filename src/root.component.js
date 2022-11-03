import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/appTeam1" className="link">
          App team 1
        </Link>
        <Link to="/appTeam2" className="link">
          App team 2
        </Link>
      </nav>
    </BrowserRouter>
  );
}
