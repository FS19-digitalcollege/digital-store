import { Suspense, useState } from "react";
import Ways from "./routes";
import { AuthContext } from "./contexts/AuthContext";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const context = {
    isLogged,
    setIsLogged,
  }
  return (
    <>
      <AuthContext.Provider value={context}>
        <Suspense>
          <Ways />
        </Suspense>
      </AuthContext.Provider>
    </>
  );
}

export default App;