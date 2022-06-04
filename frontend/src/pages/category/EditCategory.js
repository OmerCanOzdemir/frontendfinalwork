import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PutRequest from "../../functions/PutRequest";



const EditCategory = () => {
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);


    const [errorAlert, setErrorAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const getCategory = async () => {
        var response = await axios.get("https://finalworkapi.azurewebsites.net/api/Category/byId/" + id);
        if (response.data.statusCode === 200) {
            setData(response.data);
            setName(response.data.category.name);
            setDescription(response.data.category.description);
        } else {
            setErrorAlert(true);
            setErrorMessage(response.data.errorMessage);
        }
    }
    useEffect( () => {
       getCategory();
    }, []);

    const editCategory = async (e) => {
        e.preventDefault();
        const updated_category = await PutRequest("https://finalworkapi.azurewebsites.net/api/Category/" + id, {
            "name": name,
            "description":description
        });
        console.log(updated_category);
        if (updated_category.statusCode === 200) {
            history.push({
                pathname: '/categories',
                state: { successMessage: "Category updated" }

            });
        } else {
            setErrorAlert(true);
            setErrorMessage(updated_category.errorMessage);
        }
    };
    if (data) {
        return (

            <div className="container p-4">
                {errorAlert && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">

                    <span className="block sm:inline">{errorMessage}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    </span>
                </div>}
                <form onSubmit={editCategory}>
                    <div className="mb-2 p-3">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Naam</label>
                        <input type="text" id="name" className="bg-white-50  border-2 border-white-300 focus:border-blue rounded-lg block w-full p-2.5" value={name} onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className="mb-2 p-3">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Kleine Beschrijving</label>
                        <input type="text" id="name" className="bg-white-50  border-2 border-white-300 focus:border-blue rounded-lg block w-full p-2.5" value={description} onChange={(event) => setDescription(event.target.value)} required />
                    </div>
                    <div className="flex items-start p-3">
                        <button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white w-full sm:w-auto px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p>Loading</p>
            </div>
        )
    }
}


export default EditCategory;