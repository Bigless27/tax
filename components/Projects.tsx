import { Grid, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IProject, IProjectsData } from '../models/IProjects'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import apiService from '../services/apiservice';

type Props = {
    projects: IProject[],
    projectClicked: (projectId: number) => void,
    isEditMode: boolean;
    onRefresh: () => void
}

const Projects = (props: Props = { projects: [], projectClicked: () => { }, isEditMode: false, onRefresh: () => { } }) => {
    let { projects, projectClicked, isEditMode, onRefresh } = props;
    const [compProjects, setCompProjects] = useState(projects);

    useEffect(() => {
        setCompProjects(projects);
    }, [projects])


    const updateProjectName = async (e: any, project: IProject) => {
        const { value } = e.target;
        let newProjects = projects.map((v) => {
            if (v.id === project.id) {
                return {
                    ...v,
                    project: value
                }
            } else {
                return v
            }
        })
        setCompProjects(newProjects);
    }

    const onBlur = async (e: any, project: IProject) => {
        let projectToUpdate = projects.find((p) => p.id === project.id)
        await apiService.updateProject(project.id.toString(), projectToUpdate!);
        onRefresh();
    }

    const onDelete = async (project: IProject) => {
        let newProjects = projects.filter((v) => {
            if (v.id !== project.id) {
                return v;
            }
        })
        setCompProjects(newProjects);
        await apiService.deleteProject(project.id.toString());
        onRefresh();
    }

    return (
        <>
            {
                compProjects.length ? (
                    <Grid container rowGap={"10px"} direction="column">
                        {
                            compProjects.map((v, i) => (
                                <Grid padding={"20px"} borderTop={"1px solid black"} borderBottom={"1px solid black"} key={i}>
                                    <Grid justifyContent="space-between" container alignItems="center">
                                        <Grid>
                                            {isEditMode && (
                                                <Grid container direction="row">
                                                    <DeleteIcon onClick={() => onDelete(v)} />
                                                </Grid>
                                            )}

                                        </Grid>
                                        {
                                            isEditMode ? (
                                                <input value={v.project} onChange={(e) => updateProjectName(e, v)} onBlur={(e) => onBlur(e, v)} />
                                            ) : (
                                                v.project
                                            )
                                        }
                                        <ArrowForwardIcon onClick={() => projectClicked(v.id)} />
                                    </Grid>

                                </Grid>
                            ))
                        }
                    </Grid>
                ) :
                    (
                        <div>No Projects Found</div>
                    )
            }
        </>
    )
}

export default Projects