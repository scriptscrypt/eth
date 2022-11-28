import { BrowserRouter as Router, Routes, Route , Outlet} from "react-router-dom";
import Providers from './components/routes/Providers';
import Ens from "./components/routes/Ens";
import Signers from "./components/routes/Signers";
import Contract from "./components/routes/Contract";
import Home from "./components/routes/Home";
import Block from "./components/routes/Block"

function App() {
  
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}>
                  <Route path="providers"  element={<Providers/>}/>
                  <Route path="block"  element={<Block/>}/>
                  <Route path="/ens"  element={<Ens/>}/>
                  <Route path="/signers"  element={<Signers/>}/>
                  <Route path="/contract"  element={<Contract/>}/>          
              
              </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
