import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { CustomRouter } from "./routes/CustomRouter";
import history from "./routes/history";
import { RouteConfig } from "./routes";
import store from "./store/storeConfig";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./store/Actions/authActions";
import { LOGOUT } from "./store/constants";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <RouteConfig />
      </CustomRouter>
    </Provider>
  );
};

export default App;
