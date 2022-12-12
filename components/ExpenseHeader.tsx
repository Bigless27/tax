import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { IProject } from '../models/IProjects'
import Projects from './Projects'

type Props = {
    setCurrentProjectId: (id: number) => void,
    projects: IProject[],
    currrentProjectId: number
}

const ExpenseHeader = (props: Props = { currrentProjectId: 1, setCurrentProjectId: () => { }, projects: [] }) => {
    const { projects, setCurrentProjectId, currrentProjectId } = props;


    return (
        <Grid container>
            {
                projects.map((v, idx) => (
                    <Grid border={v.id === currrentProjectId ? "1px solid red" : "1px solid black"} onClick={() => setCurrentProjectId(v.id)} margin="1px" padding="5px" key={idx}>
                        {v.project}
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default ExpenseHeader