import { Form, redirect, Navigate } from "react-router-dom";

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
      <header className="header">
        <div className="container p-5">
          <img src="img/signin.svg" alt="welcome" className="object-contain w-full h-44" />
        </div>
      </header>
      <main>
        <div className="container">
          <Form method="POST" action="/login">
            <h2 className="font-bold text-2xl my-3 text-center uppercase">Pick Your Name</h2>
            <input type="text" placeholder="your name" class="input" required={true} name="name"/>
            <button className="block w-32 py-2 bg-emerald-500 text-white rounded-xl mx-auto mt-3">Sign In</button>
          </Form>
        </div>
      </main>
    </>
  );
};

export default Login;
export { loginAction };
