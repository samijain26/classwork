import axios from 'axios'


const axiosUser = axios.create({
    baseURL: "http://localhost:8080/users",
    headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
})
const info = () => {
    return await axiosUser.get("/info")
} 
        const services = {
    info
        }

        export default services
