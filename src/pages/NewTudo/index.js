import { Form, useNavigate, redirect } from "react-router-dom";

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
        <div className="container py-5">
          <input type="text" required={true} name="text" class="input" placeholder="Tudo Text"/>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button className="py-2 px-3 rounded-xl text-white bg-emerald-500">Create</button>
            <button
              className="py-2 px-3 rounded-xl text-white bg-rose-500"
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