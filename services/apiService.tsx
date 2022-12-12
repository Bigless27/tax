import { IProject } from "../models/IProjects";
import axios from 'axios'
let server = axios.create({
    baseURL: 'http://localhost:3001'
})
const apiService = {

    getProjects: async (): Promise<IProject[]> => {
        return (await server.get('/projects')).data;
    },


    updateProject: async (id: string, data: IProject) => {
        return (await server.put(`/projects/${id}`, data)).data
    },

    deleteProject: async (id: string) => {
        await server.delete("/projects/" + id)
        return true;
    },

    createProject: async (project: IProject) => {
        return (await server.post("/projects", project)).data
    }
}

export default apiService;