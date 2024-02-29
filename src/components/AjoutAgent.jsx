import React, { useState } from 'react';

    // mui components
    import {
        Typography,
        TextField,
        Box,
        Button,
        Paper
    } from '@mui/material';

    // icons components
    import { Add } from '@mui/icons-material';

    // custom components
    import BottomNav from './Bottom';
    import { useAgentContext } from './AgentContext';
    export default function CreateAgentEntry() {
        // input data
        const [nom, setNom] = useState("");
        const [prenom, setPrenom] = useState("");
        const [mail, setMail] = useState("");
        const [age, setAge] = useState("");
        const [sex, setSex] = useState("");
        // axios
        const { createNewAgent } = useAgentContext();
        const data = JSON.stringify({
            "data": {
                "Nom": nom,
                "Prenom": prenom,
                "Mail": mail,
                "Age": age,
                "Sex": sex
            }
        })
        const handleCreateNewAgent = () => {
            createNewAgent(data);
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
                        Ajout d'un nouvel Agent
                    </Typography>
                    <TextField
                        required
                        id="filled-nom"
                        label="Nom"
                        variant="filled"
                        onChange={(e)=>setNom(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-prenom"
                        label="Prenom"
                        variant="filled"
                        onChange={(e)=>setPrenom(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-mail"
                        label="Mail"
                        variant="filled"
                        helperText="exemple@gmail.com"
                        onChange={(e)=>setMail(e.target.value)}
                    />
                    <TextField
                        required
                        id="filled-age"
                        label="Age"
                        type="number"
                        variant="filled"
                        onChange={(e)=>setAge(e.target.value)}
                    />
                    <TextField
                        required
                        id="sex"
                        label="Sex"
                        helperText="Homme, Femme"
                        variant="filled"
                        onChange={(e)=>setSex(e.target.value)}
                    />
                </div>
                <div>
                    <Button onClick={handleCreateNewAgent} variant="outlined" startIcon={<Add />}>
                        Ajout d'un Agent
                    </Button>
                </div>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNav/>
                </Paper>
            </Box>
        );
    }