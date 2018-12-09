import axios from 'axios';

export function minimization(data) {
    return axios({
        url: `http://localhost:8000/minimization`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: { data }
    });
}
