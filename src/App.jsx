import { Suspense, useState } from "react";
import Ways from "./routes";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{isLogged, setIsLogged}}>
        <Suspense>
          <Ways />
        </Suspense>
      </AuthContext.Provider>
    </>
  );
}

export default App;