import Axios from 'axios';


export const service = {
    get: (url, headers) => {
        const config = {
            method: 'PATCH',
            url: url,
            headers: headers,
          }
          return await axios(config);
    },
    post: (url, data, headers) => {
        const config = {
            method: 'PATCH',
            url: url,
            headers: headers,
            data: data
          }
          return await axios(config);
    },
    put: (url, data, headers) => {
        const config = {
            method: 'PATCH',
            url: url,
            headers: headers,
            data: data
          }
          return await axios(config);
    },
    delete: (url, headers) => {
        const config = {
            method: 'PATCH',
            url: url,
            headers: headers,
          }
          return await axios(config);
    },
    patch: (url, data, headers) => {
        const config = {
            method: 'PATCH',
            url: url,
            headers: headers,
            data: data
          }
          return await axios(config);
    },
}

const axios = async () => {
    Axios.create(config).then(response => {
        return response;
    }).catch(error => {
        return error;
    })
} 
