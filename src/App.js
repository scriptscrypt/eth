import { BrowserRouter as Router, Routes, Route , Outlet} from "react-router-dom";
import Providers from './components/Providers';
import Ens from "./components/Ens";
import Signers from "./components/Signers";
import Contract from "./components/Contract";
import Home from "./components/Home";
import { VarsProvider } from "./contexts/VarsContext";

function App() {
  return (
    <div className="App">
      
  
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}>

                  <Route path="providers"  element={<Providers/>}/>
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
