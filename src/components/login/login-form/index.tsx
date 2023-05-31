import React, { useState } from "react";
import FormSelect from "../../UI-component/form/select";
import FormInput from "../../UI-component/form/input";
import Button from "../../UI-component/buttons";
import FormError from "../../UI-component/form/error";
import { userService } from "../../../services/user.service";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("test@test");
  const [error, setError] = useState("");

  const allUserEmailOptions = [
    { value: "", label: "------Choose an email" },
    ...userService.getAllUsersEmail.map((email) => ({
      value: email,
      label: email,
    })),
  ];

  const onHandleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isLoginValid = userService.isLoginValid({ email, password });
    if (!isLoginValid) {
      return setError("Wrong email or password !!");
    }
    setError("");
    // return onHandleLogin(email);
  };

  return (
    <div className="grid lg:grid-cols-12 ">
      <div className="lg:col-span-12 ">
        <form onSubmit={onHandleSubmit}>
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-12 ">
              <FormSelect
                label="Email"
                id="email"
                name="email"
                value={email}
                onChange={onHandleChange}
                options={allUserEmailOptions}
              />
            </div>
            <div className="lg:col-span-12">
              <FormInput
                label="Password"
                id="password"
                name="password"
                value={password}
                type="password"
                onChange={onHandleChange}
                error={!!error}
              />
              {error && <FormError>{error}</FormError>}
            </div>
            <div className="lg:col-span-12 mt-3">
              <Button type="submit" className="w-full bg-darkblue-800">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
