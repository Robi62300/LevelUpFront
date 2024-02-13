import React, { createContext } from 'react';
    
    // Creation de AgentContext
    const AgentContext = createContext({children});
    // create Pet Provider
    export const AgentProvider = () => {
      const value = {};
      return(
        <AgentContext value={value}>
          {children}
        </AgentContext>
      )
    };