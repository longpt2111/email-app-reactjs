import React, { useMemo, useState } from "react";
import FormSelect from "../../UI-component/form/select";
import FormInput from "../../UI-component/form/input";
import Button from "../../UI-component/buttons";
import FormError from "../../UI-component/form/error";
import { userService } from "../../../services/user.service";
import { useNavigate } from "react-router-dom";

interface IPropsLoginForm {
  setCurrentUserEmail(email: string): void;
}

const LoginForm: React.FC<IPropsLoginForm> = ({ setCurrentUserEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("test@test");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const allUserEmailOptions = useMemo(
    () => [
      { value: "", label: "------Choose an email" },
      ...userService.getAllUsersEmail.map((email) => ({
        value: email,
        label: email,
      })),
    ],
    []
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (event.target.name === "email") setEmail(event.target.value);
    if (event.target.name === "password") setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidLogin = userService.isValidLogin(email, password);
    if (!isValidLogin) {
      setErrorMsg("Wrong email or password !!");
    } else {
      setErrorMsg("");
      setCurrentUserEmail(email);
      navigate("/main/email");
    }
  };

  return (
    <div className="grid lg:grid-cols-12 ">
      <div className="lg:col-span-12 ">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-12 ">
              <FormSelect
                label="Email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
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
                onChange={handleChange}
                hasError={!!errorMsg}
              />
              {errorMsg && <FormError>{errorMsg}</FormError>}
            </div>
            <div className="lg:col-span-12 mt-3">
              <Button
                type="submit"
                className="text-white w-full bg-darkblue-800"
              >
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
