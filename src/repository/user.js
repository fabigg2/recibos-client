import htttpClient from '../settings/httpClient';
const baseUrl = '/user';
// const baseUrl1 = process.env.REACT_APP_API_HOST+'/tech';


export const userRepository = {
    create: async (data) => {     
        return await htttpClient.post(baseUrl, data);
    },

    logIn: async (data) => {    
        return await htttpClient.post('/auth', data);
    },
    
}
