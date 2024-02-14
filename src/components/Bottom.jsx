import * as React from 'react';
import { IoPersonAddSharp, IoPeople } from "react-icons/io5";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useAgentContext } from './AgentContext';

export default function LabelBottomNavigation() {
    const { nav_value, changeNavValue } = useAgentContext();
        const handleChange = (event, newValue) => {
            changeNavValue(newValue);
        };
        return (
            <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Agents"
                    value="AgentList"
                    icon={<IoPeople />}
                />
                <BottomNavigationAction
                    label="Ajouter agent"
                    value="AddAgent"
                    icon={<IoPersonAddSharp />}
                />
            </BottomNavigation>
        );
    };

