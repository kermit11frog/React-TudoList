import { Form, redirect, Navigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";

import "./index.css";

const loginAction = async ({ request }) => {
  const data = await request.formData()
  localStorage.setItem("name", data.get("name"))
  return redirect("/");
};

const Login = () => {
  const name = localStorage.getItem("name");
  return name ? (
    <Navigate to="/" />
  ) : (
    <>
      <header className="login__header">
        <div className="container">
          <img src="img/signin.svg" alt="welcome" className="login__img" />
        </div>
      </header>
      <main>
        <div className="container">
          <Form method="POST" action="/login">
            <h2 className="login__text">Pick Your Name</h2>
            <div className="inputBox">
              <input
                type="text"
                id="name"
                name="name"
                required={true}
                maxLength="12"
              />
              <label htmlFor="name" className="align-items">
                <FaUser /> My Name Is
              </label>
            </div>
            <button className="btn login__button">Sign In</button>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Login;
export { loginAction };
