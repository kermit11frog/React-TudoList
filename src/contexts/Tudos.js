import { createContext, useReducer } from "react"

const context = createContext("")

const ContextProvider = ({children}) => {
    let tudos = localStorage.getItem("tudos")
    tudos = tudos ? JSON.parse(tudos):[]
    const [state, dispatch] = useReducer((state, action) => {
        let tudos = [...state.tudos]
        switch (action.type) {
            case "EDIT":
                const tudoID = action.payload.tudoID
                const tudoIndex = tudos.findIndex(tudo => tudo.tudoID === tudoID)
                tudos.splice(tudoIndex, 1, action.payload)
                break
            default:
                break
        }
        localStorage.setItem("tudos", JSON.stringify(tudos))
        return {tudos}
    }, {
        tudos: tudos
    })
    const editTudo = (tudo) => {
        dispatch({type: "EDIT", payload: tudo})
    }
    return <context.Provider value={{tudos: state.tudos, editTudo}}>{children}</context.Provider>
}

export { context, ContextProvider }