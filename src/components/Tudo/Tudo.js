const Tudo = ({ tudoID, text, isPending, editTudo }) => {
  return (
    <div className="tudo">
      <input type="checkbox" id={`tudo${tudoID}`} checked={!isPending} onChange={e => {
        editTudo({
          tudoID,
          text,
          isPending: !e.target.checked
        })
      }} className="hidden peer/pending"/>
      <label htmlFor={`tudo${tudoID}`} className="flex items-center w-full py-2 px-4 bg-white text-gray-600
      my-4 rounded-xl peer-checked/pending:line-through peer-checked/pending:opacity-70 select-none">
        {text}
      </label>
    </div>
  )
}

export default Tudo
