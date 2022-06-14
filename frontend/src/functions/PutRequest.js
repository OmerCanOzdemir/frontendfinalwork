import axios from "axios";



async function PutRequest(url, body) {
    try {
        var response = await axios.put(url, body,{ headers: { "authorisation": 00000000-0000-0000-0000-000000000000 } });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default PutRequest;