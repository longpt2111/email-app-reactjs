import React, { useState } from "react";
import Login from "./pages/login";
import { Routes, Route, Navigate } from "react-router-dom";
import EmailPage from "./pages/user-page/email";
import UserPage from "./pages/user-page";

const App: React.FC = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setCurrentUserEmail={setCurrentUserEmail} />}
      />
      <Route path="/main">
        <Route
          index
          element={<UserPage currentUserEmail={currentUserEmail} />}
        />
        <Route
          path="email"
          element={<EmailPage currentUserEmail={currentUserEmail} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
