import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Course from "./components/Course";
import ScrollSpy from "react-ui-scrollspy";
import Sidebar from "./components/Sidebar";
import Req from "./components/Req";
import Enroll from "./components/Enroll";
import Enroll1 from "./components/Enroll1";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "80rem" }}>
      <Header />
      <br></br>
      <br></br>
      <Home />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Course />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 style={{ color: "#606060" }}>
        REQUIREMENTS FOR ATTENDING THE COURSE
      </h2>
      <br></br>
      <br></br>
      <Req />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Enroll1 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
