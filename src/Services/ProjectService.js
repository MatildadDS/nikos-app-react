import api from './api';

const ProjectService = {
    createProject: async(project_infos) => {
        return await api.post('/projects', project_infos)
    },
    deleteProject: async(id_project) => {
        const url = ('/projects/' + id_project)
        return await api.delete(url)
    },
    deleteAllProjects: async() => {
        return await api.delete('/projects')
    },
    getAllProjects: async() => {
        return await api.get('/projects')
    },
    get: async(id_project) => {
        return await api.get(`/projects/${id_project}`)
    },
    updateProject: async(id_project, data) => {
        return await api.put(`projects/${id_project}`, data)
    }
}

export default ProjectService;

