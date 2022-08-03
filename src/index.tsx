import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./pages/App";

const root = createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/image-compression-visualiser">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
