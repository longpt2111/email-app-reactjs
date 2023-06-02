import React, { useState } from "react";
import Login from "./pages/login";
import { Routes, Route, Navigate } from "react-router-dom";
import EmailPage from "./pages/user-page/email";
import UserPage from "./pages/user-page";
import EmailFolder from "./pages/user-page/email/email-folder";
import HomePage from "./pages/user-page/home";
import ContactPage from "./pages/user-page/contact";
import EmailDetail from "./pages/user-page/email/email-folder/email-detail";
import MessageService from "./services/message.service";

const App: React.FC = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState<string>("");
  const folders = new MessageService(currentUserEmail).getFolders;

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
            <Route
              path="*"
              index
              element={
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-3xl text-center">
                    Please choose <br /> a folder
                  </p>
                </div>
              }
            />
            {folders.map((folder, index) => (
              <Route key={index} path={folder} element={<EmailFolder />}>
                <Route path=":id" element={<EmailDetail />} />
              </Route>
            ))}
          </Route>
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

export default App;
