import React from "react";
import { Link } from "react-router-dom";
import "./scss/App.scss";

export function App() {
  return (
    <nav>
      <Link to="/A">Interface A</Link>
      <Link to="/B">Interface B</Link>
    </nav>
  );
}
