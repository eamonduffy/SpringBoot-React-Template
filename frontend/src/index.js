import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ApolloWrapper from "./ApolloWrapper";

ReactDOM.render(
    <React.StrictMode>
        <ApolloWrapper />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
