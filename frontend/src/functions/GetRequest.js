import axios from "axios";
import { useEffect, useState } from "react";

const GetRequest = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(
            url,{ headers: { "authorisation": "00000000-0000-0000-0000-000000000000" } }
        )
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    setData(response.data);
                    setIsLoading(false);
                }
                else if (response.data.statusCode === 404) {

                    setError("404 Not Found");
                    setIsLoading(false);

                }
                else {
                    setError(response.data.errorMessage);
                    setIsLoading(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                setError(error.message);
                setIsLoading(false);

            })
    }, []);
    return { data, isLoading, error }
}

export default GetRequest;