import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./pages/Main/Main";
import Setting from "./pages/Setting/Setting";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
