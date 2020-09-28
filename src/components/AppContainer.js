import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";

class AppContainer extends Component {

    render() {
  
      return (
        <div className="app-container">
            <Header />
            <main className="page-content">
                <Home />
            </main>
            <Footer />
        </div>
      );
    }
}
  
export default AppContainer;
  