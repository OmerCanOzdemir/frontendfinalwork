import axios from "axios";



async function PutRequest(url, body, tenant) {
    try {
        var response = await axios.put(url, body);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default PutRequest;