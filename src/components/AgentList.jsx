import * as React from 'react';

// icons
import {
    PersonOutline,
    PetsOutlined,
    LocationOn,
    PunchClockOutlined,
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
                            ({id, attributes: {Nom, Prenom, Mail, Age, Sex}}, i)=>(
                            <AgentListItem
                                key={i}
                                id={id}
                                agentType={Prenom}
                                agentFieldData={[
                                    {icon: <PersonOutline/>, attrib: Nom},
                                    {icon: <PetsOutlined/>, attrib: Prenom},
                                    {icon: <LocationOn/>, attrib: Mail},
                                    {icon: <PunchClockOutlined/>, attrib: Age},
                                    {icon: <TransgenderOutlined/>, attrib: Sex}
                                ]}
                            />
                        ))
                    }
                </List>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNav/>
                </Paper>
            </Box>
        );
    };