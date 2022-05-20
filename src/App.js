import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Routes>
              <Route path="/" element={<Sidebar />}>
                <Route path="/rooms/:roomId" element={<Chat />} />
                <Route path="/hello" element={<h1>Hello React</h1>} />
              </Route>
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};
export default App;
