import React, {useState, useEffect} from 'react';
import { Auth } from "aws-amplify";

export const AppContext = React.createContext();

export const Provider = ({children}) => {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(()=>{
      loadSession();
    }, [])

    async function loadSession() {
      try {
        await Auth.currentSession();
        userHasAuthenticated(true);
      }
      catch(e) {
        if (e !== 'No current user') {
          alert(e);
        }
      }
      setIsAuthenticating(false);
    }
    return <AppContext.Provider 
                    value={{
                          isAuthenticated,
                          userHasAuthenticated,
                          isAuthenticating,
                          setIsAuthenticating
                    }}
        >
        {children}
        </AppContext.Provider>;
}
