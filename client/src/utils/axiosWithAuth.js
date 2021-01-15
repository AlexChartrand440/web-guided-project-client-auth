import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/data", { headers: { Authorization: token } })
}