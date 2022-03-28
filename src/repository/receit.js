import htttpClient from '../settings/httpClient';
const baseUrl = 'receipt';
 

export const receiptRepository = {
    findAll: async () => {
        return await htttpClient.get(baseUrl);
    },
    findOne: async (tid) => {
        return await htttpClient.get(`${baseUrl}/${tid}`);
    },
    create: async (data) => {      
        return await htttpClient.post(baseUrl, data);
    },
    update: async ({consecutive, data}) => {
        return await htttpClient.put(`${baseUrl}/${consecutive}`,data);
    },
    delete: async (tid) => {
        return await htttpClient.delete(`${baseUrl}/${tid}`);
    }
}