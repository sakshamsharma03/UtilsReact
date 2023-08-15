import { useState } from "react";
//import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm.js";
import PropTypes from "prop-types";
import About from "./components/About";
import Alert from "./components/Alert";
//import { Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212535";
      document.body.style.color = "#fff";
      document.title = "Wc-Dark Mode Enabled";
      showAlert("Dark Mode Enabled", "success");
      console.log("dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212535";
      document.title = "Wc-Light Mode Enabled";
      showAlert("Light Mode Enabled", "success");
      console.log("light");
    }
  };
  return (
    <>
     
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={Mode}
          togglemode={toggleMode}
        />
        <Alert alert={alert} />
       
        <div className="container">
          <TextForm heading="Enter Text to Analyze" mode={Mode} />
        </div>
        <Router>
          <Routes>
            <Route path='/about' element={<About/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
Navbar.defaultProps = {
  title: "Set Title here",
  about: "About text here",
};
