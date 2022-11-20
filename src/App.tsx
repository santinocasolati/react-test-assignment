import { useState } from "react";

import Logo from "./components/Logo";
import Login from "./screens/Login";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="app">
      
      <Logo />
      
      {user ? <div>HELLO</div> : <Login userSet={setUser}/>}

    </div>
  );
}

export default App;
