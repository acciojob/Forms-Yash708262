import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    <Router>
      <div className="p-6 space-y-4">
        <nav className="flex gap-4">
          <Link id="form-link" to="/form">Form Layout</Link>
          <Link id="form-ref-link" to="/form-ref">Form with useRef</Link>
          <Link id="form-state-link" to="/form-state">Form with useState</Link>
        </nav>
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </Switch>
      </div>
    </Router>
  );
}
