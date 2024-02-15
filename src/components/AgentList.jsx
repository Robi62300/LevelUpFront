import * as React from 'react';
import { FaBirthdayCake } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import {
    PersonOutline,
    TransgenderOutlined,
} from '@mui/icons-material';

// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import BottomNav from './Bottom';
import AgentListItem from './AgentListitem';

// data
import { useAgentContext } from './AgentContext';;


export default function AgentList() {
    const { Agents } = useAgentContext();
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />

            <List>
                {
                    Agents && Agents.map(
                        ({ id, attributes: { Nom, Prenom, Mail, Age, Sex } }, i) => (
                            <AgentListItem
                                key={i}
                                id={id}
                                agentType={Prenom}
                                agentFieldData={[
                                    { icon: <PersonOutline />, attrib: Nom },
                                    { attrib: Prenom },
                                    { icon: <MdAlternateEmail />, attrib: Mail },
                                    { icon: <FaBirthdayCake />, attrib: Age },
                                    { icon: <TransgenderOutlined />, attrib: Sex }
                                ]}
                            />
                        ))
                }
            </List>
            <Paper sx={{ bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav />
            </Paper>
        </Box>
    );
};