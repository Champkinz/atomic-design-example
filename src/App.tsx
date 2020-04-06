import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./components/page/login.page";
import DemoNav from "./components/template/demoNavigation.screen";

function App() {
  const [taskToggle, setTaskToggle] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const key = event.key.toLowerCase();
      if (key === "c") {
        setTaskToggle(taskToggle ? false : true);
      }
    });
  });

  return <div>{taskToggle ? <LoginPage /> : <DemoNav />}</div>;
}

export default App;
