import { useState } from "react";

import Logo from "./components/Logo";
import Login from "./screens/Login";
import Logout from "./screens/Logout";

function App() {
  const [user, setUser] = useState();

  return (
    <div className="app">
      
      <Logo />
      
      {user ? <Logout userSet={setUser} data={user} /> : <Login userSet={setUser}/>}

    </div>
  );
}

export default App;
