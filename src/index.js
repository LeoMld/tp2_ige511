require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { A } from "./views/A.jsx";
import { B } from "./views/B.jsx";
import { App } from "./App.jsx";

const appElement = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="A" element={<A />} />
      <Route path="B" element={<B />} />
    </Routes>
  </BrowserRouter>,
  appElement
);
