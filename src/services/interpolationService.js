import axios from 'axios';

export function quadraticSpline(formData) {
    return axios({
        url: `http://localhost:8000/interpolation`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    });
}
