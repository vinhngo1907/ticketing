import axios from "axios";

export default ({ req }) => {
    if (typeof window !== 'undefined') {
        // We are on server
        return axios.create({
            baseURL: 'localhost:5002',
            headers: req.headers,
        });
    } else {
        // we must be on the browser
        return axios.create({
            baseURL: "/",
        });
    }
}