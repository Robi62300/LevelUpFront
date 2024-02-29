import React, { useState, useEffect } from 'react';

    // mui components
    import {
        Typography,
        TextField,
        Box,
        Button,
        Paper
    } from '@mui/material';

    // mui icons
    import { Edit } from '@mui/icons-material';

    // custom components
    import BottomNav from './Bottom';

    //axios
    import { useAgentContext } from './AgentContext';
    export default function EditAgentEntry() {
        // input data
        const { updateAgent, AgentId, Agent } = useAgentContext();
        const [nom, setNom] = useState(Agent.attributes.Nom);
        const [prenom, setPrenom] = useState(Agent.attributes.Prenom);
        const [mail, setMail] = useState(Agent.attributes.Mail);
        const [age, setAge] = useState(Agent.attributes.Age);
        const [sex, setSex] = useState(Agent.attributes.Sex);
        // edit req
        const data = JSON.stringify({
            "data": {
                "Nom": nom,
                "Prenom": prenom,
                "Mail": mail,
                "Age": age,
                "Sex": sex
            }
        });
        const handleEditAgent = () => {
            updateAgent(AgentId, data);
        };
        return (
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                    display: 'flex',
                    flexDirection: 'column'
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        Modifier les informations
                    </Typography>
                    <TextField defaultValue={nom}
                        required
                        id="filled-name"
                        label="Nom"
                        variant="outlined"
                        onChange={(e)=>setNom(e.target.value)}
                    />
                    <TextField defaultValue={prenom}
                        required
                        id="filled-animal"
                        label="Prenom"
                        variant="outlined"
                        onChange={(e)=>setPrenom(e.target.value)}
                    />
                    <TextField defaultValue={mail}
                        required
                        id="filled-mail"
                        label="Mail"
                        variant="outlined"
                        onChange={(e)=>setMail(e.target.value)}
                    />
                    <TextField defaultValue={age}
                        required
                        id="filled-age"
                        label="Age"
                        type="number"
                        variant="outlined"
                        onChange={(e)=>setAge(e.target.value)}
                    />
                    <TextField defaultValue={sex}
                        required
                        id="sex"
                        label="Sex"
                        helperText="Male, Female"
                        variant="outlined"
                        onChange={(e)=>setSex(e.target.value)}
                    />
                </div>
                <div>
                    <Button variant="outlined" onClick={handleEditAgent} startIcon={<Edit />}>
                        Validé
                    </Button>
                </div>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNav/>
                </Paper>
            </Box>
        );
    }