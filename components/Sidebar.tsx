import { Grid } from '@mui/material'
import { stat } from 'fs'
import React from 'react'

type Props = {
    setState: (state: "projects" | "expenses") => void,
    currentState: "projects" | "expenses";
}

const Sidebar = (props: Props) => {
    const { setState, currentState } = props;
    return (
        <Grid container direction='column'>
            <Grid margin="2px" border={currentState === "projects" ? "1px solid red" : "1px solid black"} width={"100%"} onClick={() => setState("projects")}>
                <Grid height={"50px"} container justifyContent="center" alignItems="center">
                    Projects
                </Grid>
            </Grid>
            <Grid margin="2px" border={currentState == "expenses" ? "1px solid red" : "1px solid black"} width={"100%"} onClick={() => setState("expenses")}>
                <Grid height={"50px"} container justifyContent="center" alignItems="center">
                    Expenses
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Sidebar