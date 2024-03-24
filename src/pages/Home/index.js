import { useContext } from "react"
import { context as TudosContext } from "../../contexts/Tudos"
import Tudo from "../../components/Tudo/Tudo"
import Navigation from "../../components/Navigation/Navigation"

const Home = () => {
  const name = localStorage.getItem("name")
  const {tudos, editTudo} = useContext(TudosContext)
  const getTudosCounter = () => {
    return {
      pending: tudos.filter(tudo => tudo.isPending).length,
      done: tudos.filter(tudo => !tudo.isPending).length,
      all: tudos.length
    }
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="pt-5">
            <h2 className="mb-1.5 text-xl font-semibold">Hey dear {name}</h2>
            <p>Your can create your tudos now</p>
          </div>
          <div className="flex items-center justify-between bg-white 
          rounded-lg text-black translate-y-1/2">
            <div className="flex items-center justify-center flex-col grow py-3">
              <h3>All</h3>
              <span>{getTudosCounter().all}</span>
            </div>
            <div className="flex items-center justify-center flex-col grow py-3">
              <h3>Pending</h3>
              <span>{getTudosCounter().pending}</span>
            </div>
            <div className="flex items-center justify-center flex-col grow py-3">
              <h3>Done</h3>
              <span>{getTudosCounter().done}</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="py-12">
          <div className="container">
            {
              tudos.map(tudo => <Tudo {...tudo} key={tudo.tudoID} editTudo={editTudo}/>)
            }
          </div>
        </div>
        <Navigation />
      </main>
    </>
  );
};

export default Home;
