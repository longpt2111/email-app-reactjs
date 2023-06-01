import React, { useState } from "react";
import Login from "./pages/login";
import { Routes, Route, Navigate } from "react-router-dom";
import EmailPage from "./pages/user-page/email";
import UserPage from "./pages/user-page";
import EmailFolder from "./pages/user-page/email/email-folder";
import HomePage from "./pages/user-page/home";
import ContactPage from "./pages/user-page/contact";

const App: React.FC = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/login" />}></Route>
        <Route
          path="login"
          element={<Login setCurrentUserEmail={setCurrentUserEmail} />}
        ></Route>
        <Route
          path="main"
          element={
            <UserPage
              currentUserEmail={currentUserEmail}
              setCurrentUserEmail={setCurrentUserEmail}
            />
          }
        >
          <Route index element={<Navigate to="email" />}></Route>
          <Route path="home" element={<HomePage />} />
          <Route
            path="email"
            element={<EmailPage currentUserEmail={currentUserEmail} />}
          >
            <Route path="sent" element={<EmailFolder />}></Route>
          </Route>
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

export default App;
