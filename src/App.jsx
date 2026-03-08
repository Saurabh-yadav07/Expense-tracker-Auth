import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import CompleteProfile from "./pages/CompleteProfile";
import ForgotPassword from "./pages/ForgotPassword";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/complete-profile" element={<CompleteProfile/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>

      </Routes>

    </BrowserRouter>

  );

}

export default App;