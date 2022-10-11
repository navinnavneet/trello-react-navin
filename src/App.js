import { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Boards from "./components/boards/Boards";
import Lists from "./components/lists/Lists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/boards" />
          </Route>
          <Route path="/boards" component={Boards} />
          <Route path="/board/:boardId" component={Lists} />
        </Switch>
      </div>
    );
  }
}

export default App;
