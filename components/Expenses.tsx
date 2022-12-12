import { Grid, Checkbox } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { IExpenses } from '../models/IProjects'

type Props = {
    currentProjectId: number,
    expenses: IExpenses[]
}

const Expenses = (props: Props = { currentProjectId: 1, expenses: [] }) => {
    const { currentProjectId, expenses } = props;
    const [compExpenses, setCompExpenses] = useState(expenses);

    useEffect(() => {
        setCompExpenses(expenses);
    }, [expenses])

    const handleChange = (e: any, expense: IExpenses) => {
        let newExpenses = compExpenses.map((v) => {
            if (v.title === expense.title) {
                return {
                    ...v,
                    isQualified: e.target.checked
                }
            } else {
                return v
            }
        })
        setCompExpenses(newExpenses);
    }


    return (
        <>
            <Grid container direction="column">
                <Grid container direction="column" rowGap={"10px"}>
                    {
                        compExpenses.map((v, i) => (
                            <Grid padding={"20px"} borderTop={"1px solid black"} borderBottom={"1px solid black"} key={i}>
                                <Grid justifyContent="space-between" container alignItems="center">
                                    <Grid>
                                        {v.title}
                                    </Grid>
                                    <Grid>
                                        Price: {v.price}
                                    </Grid>
                                    <Grid>
                                        is Qualified: <Checkbox onChange={(e) => handleChange(e, v)} checked={v.isQualified}></Checkbox>
                                    </Grid>
                                </Grid>

                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default Expenses