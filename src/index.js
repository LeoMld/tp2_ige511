require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { A } from "./views/A";
import { B } from "./views/B";
import { App } from "./App";

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
