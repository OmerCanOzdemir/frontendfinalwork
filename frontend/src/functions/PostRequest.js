import axios from "axios";


async function PostRequest(url, body) {

        try {
                const response = await axios.post(url, body,{ headers: { "authorisation": 00000000-0000-0000-0000-000000000000 } });
                return response.data;
        } catch (error) {
                console.log(error);
        }
}

export default PostRequest;