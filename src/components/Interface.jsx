import React from 'react';

    // custom component
    import AgentList from '../components/AgentList';
    import CreateAgentEntry from '../components/AjoutAgent'
    import EditAgentEntry from '../components/EditAgentEntry';

    // contexts
    import { useAgentContext } from './AgentContext';
    const Interface = () => {
        const { nav_value } = useAgentContext();

        switch (nav_value) {
            case "AgentList":
                return <AgentList/>
            case "AddAgent":
                return <CreateAgentEntry/>
            case "EditAgent":
                return <EditAgentEntry/>
            default:
                return <AgentList/>
        };
    };
    export default Interface;