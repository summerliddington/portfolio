import React from 'react';
import './App.css';
import Navigation from "../src/components/navbar/NavBar"
import ApplicationViews from "./components/ApplicationViews"
import Footer from "../src/components/footer/Footer"

function App() {
  return (
    <>
      <Navigation / >
      <ApplicationViews / >
      <Footer / >
      </>
  );
}

export default App;
