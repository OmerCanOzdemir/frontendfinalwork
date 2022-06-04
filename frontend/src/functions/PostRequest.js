import axios from "axios";


async function PostRequest(url, body) {

        try {
                const response = await axios.post(url, body);
                return response.data;
        } catch (error) {
                console.log(error);
        }
}

export default PostRequest;