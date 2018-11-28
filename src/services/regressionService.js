import axios from 'axios';

export function polynomialRegression(formData) {
    return axios({
        url: `http://localhost:8000/regression`,
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    });
}
