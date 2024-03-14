import "./Tudo.css";

const Tudo = ({ tudoID, text, isPending, editTudo }) => {
  return (
    <div className="tudo">
      <input type="checkbox" id={`tudo${tudoID}`} checked={!isPending} onChange={e => {
        editTudo({
          tudoID,
          text,
          isPending: !e.target.checked
        })
      }}/>
      <label htmlFor={`tudo${tudoID}`} className="align-items">
        {text}
      </label>
    </div>
  )
}

export default Tudo
