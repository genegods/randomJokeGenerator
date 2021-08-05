import React from "react";
import "./App.css";
import JokeApp from "./components/joke/JokeApp";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <JokeApp />
      </React.Fragment>
    </Provider>
  );
};

export default App;
