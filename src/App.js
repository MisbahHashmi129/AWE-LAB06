import React, { useContext } from "react";
import "./App.css";

import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./redux/store";
import { increment, decrement } from "./redux/actions";

import { UserContext, UserProvider } from "./context/UserContext";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className={`page ${theme}`}>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <h1 className="main-heading">
        Task 2: Context API & Redux
      </h1>

      <p className="subtitle">
        Combined State Management with Theme Switching
      </p>

      <div className="container">

        {/* Context API Section */}
        <div className="section context-section">
          <h2>Context API - User Management</h2>

          <h3>Welcome, {user}!</h3>

          <button
            className="login-btn"
            onClick={() => setUser("Mishiiii")}
          >
            Login
          </button>
        </div>

        {/* Redux Section */}
        <div className="section redux-section">
          <h2>Redux - Counter Management</h2>

          <h3>Counter: {count}</h3>

          <button
            className="counter-btn"
            onClick={() => dispatch(increment())}
          >
            +
          </button>

          <button
            className="counter-btn"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>

      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Dashboard />
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
