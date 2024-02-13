import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../components/http';
const AgentContext = createContext();

    export const useAgent = () => {
        return useContext(AgentContext);
    };

    export const AgentProvider = ({children}) => {
        const [agents, setAgents] = useState("");
        const [nav_value, set_nav_value] = useState("PetList");
        const [agentId, setAgentId] = useState("");

        // Ajout d'un nouvel agent
        const createNewAgent = async (data) => {
            await http.post("/api/agent", data);
        };

        // Mettre a jour 
        const updateAgent = async (agentId, data) => {
            await http.put(`/api/agent/${agentId}`, data);
        }

        // Supprimé l'Agent
        const deleteAgent = async (agentId) => {
            await http.delete(`/api/pets/${agentId}`);
        };

        //
        const changeNavValue = (value) => {
            set_nav_value(value);
        };

        // changer l'id de l'agent
        const getAgentId = (id) => {
            setAgentId(id);
        };

        useEffect(()=>{
            const readAllAgents = async () => {
                const response = await http.get("/api/agent");
                const responseArr = Object.values(response.data.data);
                setAgents(responseArr);
            };
            return readAllAgents;
        }, []);

        const value = {
            createNewAgent,
            agents,
            updateAgent,
            deleteAgent,
            changeNavValue,
            nav_value,
            getAgentId,
            agentId
        };
        return(
            <AgentContext.Provider value={value}>
                {children}
            </AgentContext.Provider>
        )


    }