import { BrowserRouter, Route, Routes } from "react-router-dom";
import CaseList from "./components/CaseList";
import NotFound from "./components/NotFound";    
import AddCase from "./components/AddCase";


function MyHeader(){
    return(
        <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src={require('../src/logo.svg')}></img>
                </a>
            </nav>
    );
}

function App(){
    return (
      <BrowserRouter>
        <div>
            <MyHeader/>
          
          <Routes>
            <Route exact path="/" Component={CaseList} />
            <Route exact path="*" Component={NotFound} />
            <Route exact path="/add" Component={AddCase} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;