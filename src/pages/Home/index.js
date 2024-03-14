import { useContext } from "react"
import { context as TudosContext } from "../../contexts/Tudos"
import Tudo from "../../components/Tudo/Tudo"
import Navigation from "../../components/Navigation/Navigation"

import "./index.css";

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
      <header>
        <div className="container">
          <div className="home__head-message">
            <h2 className="mb-10">Hey dear {name}</h2>
            <p>Your can create your tudos now</p>
          </div>
          <div className="home__head-box align-items jc-sb">
            <div className="go-center">
              <h3>All</h3>
              <span>{getTudosCounter().all}</span>
            </div>
            <div className="go-center">
              <h3>Pending</h3>
              <span>{getTudosCounter().pending}</span>
            </div>
            <div className="go-center">
              <h3>Done</h3>
              <span>{getTudosCounter().done}</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="tudoList">
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
