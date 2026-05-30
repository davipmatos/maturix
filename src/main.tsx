import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { App } from "./App";
import { I18nProvider } from "./i18n/I18nProvider";
import "./index.css";

// GitHub Pages can't do SPA fallback to index.html, so when we're built for
// production we mount under HashRouter (URLs look like /#/login). Local dev
// still uses BrowserRouter for a cleaner URL bar.
const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <Router>
        <App />
      </Router>
    </I18nProvider>
  </React.StrictMode>,
);
