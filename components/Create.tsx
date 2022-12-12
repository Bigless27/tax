import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { Grid, IconButton } from '@mui/material';
import { IProject } from '../models/IProjects';
import apiService from '../services/apiservice';


type Props = {
    refreshProjects: () => void
}

const Create = (props: Props) => {
    const { refreshProjects } = props;
    const [newProjectName, setNewProjectName] = useState<string>('')

    const handleCreate = async () => {
        let newProject: IProject = {
            metaData: [],
            id: 0,
            expenses: [],
            project: newProjectName
        }
        await apiService.createProject(newProject)
        refreshProjects();
    }

    return (
        <Grid>
            <input placeholder='Type Project Name' onChange={(e) => setNewProjectName(e.target.value)} />
            <IconButton onClick={() => handleCreate()} >
                <CheckIcon />
            </IconButton>
        </Grid>

    )
}

export default Create