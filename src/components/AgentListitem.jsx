import React, { useState } from 'react';

// mui icons
import { IconButton, ListItem } from '@mui/material';
import {
    DeleteOutline,
    Edit,
    ExpandMore,
    ExpandLess,
    LabelImportantOutlined,
} from '@mui/icons-material';

    // mui components
    import List from '@mui/material/List';
    import ListItemButton from '@mui/material/ListItemButton';
    import ListItemIcon from '@mui/material/ListItemIcon';
    import ListItemText from '@mui/material/ListItemText';
    import Collapse from '@mui/material/Collapse';


// nav
    import { useAgentContext } from './AgentContext';


    export default function AgentListItem({ agentType, id, agentFieldData}) {
        const [open, setOpen] = useState(true);
        const { deleteAgent, changeNavValue, getAgentId, getAgent } = useAgentContext();
        const handleClick = () => {
            setOpen(!open);
        };
        const handleEditButton = () => {
            getAgentId(id);
            getAgent(id);
            changeNavValue("EditAgent");
        };
        return (
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
            >
            <ListItem
                secondaryAction={
                    <>
                        <IconButton onClick={handleEditButton} edge="end" aria-label="edit">
                            <Edit sx={{ color: 'green' }}/>
                        </IconButton>
                        <IconButton onClick={()=>deleteAgent(id)} edge="end" aria-label="delete" sx={{ padding: 2}}>
                            <DeleteOutline color="secondary"/>
                        </IconButton>
                    </>
                }
            >
                <ListItemButton disableRipple onClick={handleClick}>
                        <ListItemIcon>
                            <LabelImportantOutlined />
                        </ListItemIcon>
                        <ListItemText
                            primary={agentType}
                            secondary="Name, Prenom, Mail, Age, Sex"
/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
            </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            agentFieldData.map((item, i)=>(
                                <ListItemButton key={i} disableRipple sx={{ pl: 9 }}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.attrib} />
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Collapse>
            </List>
        );
    };