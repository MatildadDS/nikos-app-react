import api from './api';

const UserService = {
    signup: async (user) => {
        return await api.post('/signup', user)
    },
    login: async (email, password) => {
        const user = {email, password}
        return await api.post('/login', user)
    }
}

export default UserService;
