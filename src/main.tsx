import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import * as body from "./style/globalVariables/textStyles/body.tsx";

//Import Components
// import { Test } from "./components/Avatar/Avatar.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <br />
    {/* Components */}
    <body.Regular />
    <body.Medium />
    <body.Bold />
  </React.StrictMode>
);
