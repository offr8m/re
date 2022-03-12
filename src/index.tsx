import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

const store = createStore(rootReducer, composeWithDevTools());

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
