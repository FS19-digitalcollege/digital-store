import { Suspense, useState } from "react";
import Ways from "./routes";
import { AuthContext } from "./contexts/AuthContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services";

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const context = {
    isLogged,
    setIsLogged,
  }
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={context}>
          <Suspense>
            <Ways />
          </Suspense>
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;