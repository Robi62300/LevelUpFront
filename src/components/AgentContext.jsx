import React, { createContext, useContext, useEffect, useState } from "react";
import http from '../http';

// Creation de l'Agent Context
const AgentContext = createContext();

export const useAgentContext = () => {
    return useContext(AgentContext);
}

// Creation de l'Agent Provider 
export const AgentProvider = ({children}) => {
    const [Agents, setAgents] = useState("");
    const [nav_value, set_nav_value] = useState("AgentList");
    const [AgentId, setAgentId] = useState("");
    const [Agent, setAgent] = useState();

    // Ajout d'un agent
    const createNewAgent = async (data) => {
        await http.post("/api/agents", data);
    };
    
    // Modifier un agent
    const updateAgent = async (AgentId, data) => {
        await http.put(`/api/agents/${AgentId}`, data);
    };

    // Supprimé un agent 
    const deleteAgent = async (AgentId) => {
        await http.delete(`/api/agents/${AgentId}`);
    };

    // Change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };

    // Id de l'agent
    const getAgentId = (id) => {
        setAgentId(id);
    };
    const getAgent = (id) => {
        const toto = Agents.find((agent) => agent.id === id)
        setAgent(toto);
    };

    useEffect(()=>{
        const readAllAgents = async () => {
            const response = await http.get("/api/agents");
            const respnseArr = Object.values(response.data.data);
            setAgents(respnseArr);
        };
        return readAllAgents;
    }, []);

    const value = {
        createNewAgent,
        Agents,
        updateAgent,
        deleteAgent,
        changeNavValue,
        nav_value,
        getAgentId,
        getAgent,
        Agent,
        AgentId
    };

    // Context Provider
    return(
        <AgentContext.Provider value={value}>
            {children}
        </AgentContext.Provider>
    )
};