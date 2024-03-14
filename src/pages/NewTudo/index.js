import { Form, useNavigate, redirect } from "react-router-dom";

import "./index.css";

const newTudoAction = async ({request}) => {
    const data = await request.formData()
    const text = data.get("text")
    let tudo = {
        text: text,
        isPending: true
    }

    if (localStorage.getItem("tudos")) {
        const tudos = localStorage.getItem("tudos")
        tudo.tudoID = tudos.length + 1
        localStorage.setItem("tudos", JSON.stringify([...JSON.parse(tudos), tudo]))   
    } else {
        tudo.tudoID = 1
        localStorage.setItem("tudos", JSON.stringify([tudo]))
    }
    return redirect("/")
}

const NewTudo = () => {
  const navigate = useNavigate();
  return (
    <>
      <Form className="newtudo" action="/newtudo" method="POST">
        <div className="container">
          <div className="inputBox">
            <input type="text" required={true} name="text"/>
            <label className="align-items">Tudo Text</label>
          </div>
          <div className="align-items gp-10">
            <button className="btn createBtn">Create</button>
            <button
              className="btn cancelBtn"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default NewTudo;
export { newTudoAction }