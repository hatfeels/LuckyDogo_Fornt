import { Route, BrowserRouter, Switch } from "react-router-dom";

import Details from "./Views/Details/Details";
import Form from "./Views/Form/Form";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import NavBar from "./Componenst/Navbar/NavBar";

import styles from "./app.module.css"

function App() {
  return (
    <BrowserRouter>
      <div className={styles.fondo}>
        <Route path="*/:path" component={NavBar} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/details/:id" component={Details} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
