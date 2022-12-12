import { Button, Grid } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'
import Create from './Create'
import SearchBar from './Search'

type Props = {
    createMode: boolean,
    editMode: boolean,
    onRefresh: () => void,
    onSearch: (v: any) => void,
    setCreateMode: Dispatch<SetStateAction<boolean>>,
    setEditMode: Dispatch<SetStateAction<boolean>>
}

const ProjectHeader = (props: Props) => {
    const { createMode, editMode, onRefresh, onSearch, setCreateMode, setEditMode } = props;
    return (
        <Grid container>
            <Grid justifyContent={"center"} container paddingBottom={"10px"}>
                {
                    createMode && !editMode ? (
                        <Create refreshProjects={onRefresh} />
                    ) : (
                        <SearchBar handleChange={onSearch} />
                    )
                }
            </Grid>
            <Grid container justifyContent="center" columnGap={"10px"} alignItems="center">
                {
                    !editMode && (
                        createMode ? (
                            <Button size='small' variant="contained" color="secondary" onClick={() => setCreateMode(false)}>Cancel</Button>

                        ) : (
                            <Button size='small' variant="contained" color="primary" onClick={() => setCreateMode(true)}>Create</Button>
                        )
                    )
                }

                {
                    !createMode && (
                        editMode ? (
                            <Button size='small' variant="contained" color="secondary" onClick={() => setEditMode(false)}>Cancel</Button>

                        ) : (
                            <Button size='small' variant="contained" color="primary" onClick={() => setEditMode(true)}>Edit Projects</Button>

                        )
                    )
                }
            </Grid></Grid>
    )
}

export default ProjectHeader