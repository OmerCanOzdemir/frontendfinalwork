import { useState } from "react";
import { useHistory } from "react-router-dom";
import PostRequest from "../../functions/PostRequest";

const CreateEducation = () =>{

    const [name, setName] = useState(null);
    const [department_Address, setDepartment_Address] = useState(null);

    const [errorAlert, setErrorAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const history = useHistory();
    const createEducation = async (e) =>{
        e.preventDefault();

        const created_education = await PostRequest("https://localhost:7165/api/Education", {
            "name": name,
            "department_Address": department_Address
        });
        if (created_education.statusCode === 200) {
            history.push({
                pathname: "/educations",
                state: { successMessage: "Education created" }
            });
        } else {
            setErrorAlert(true);
            setErrorMessage(created_education.errorMessage);
        }
    }

    return(
        <div className="container p-4">
            {errorAlert && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">

                <span className="block sm:inline">{errorMessage}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                </span>
            </div>}
            <form onSubmit={createEducation}>
                <div className="mb-2 p-3">
                    <label htmlFor="name" className="block mb-2 text-black font-medium text-black-900 dark:text-black-300">Naam Opleiding</label>
                    <input type="text" id="name" className="bg-white-50 border-2  focus:border-blue-500 active:border-blue-500  rounded-lg block w-full p-2.5" value={name} onChange={(event) => setName(event.target.value)}  required />
                </div>
                <div className="mb-2 p-3">
                    <label htmlFor="name" className="block mb-2 text-black font-medium text-black-900 dark:text-black-300">Adres Departement</label>
                    <input type="text" id="name" className="bg-white-50 border-2  focus:border-blue-500 active:border-blue-500  rounded-lg block w-full p-2.5" value={department_Address} onChange={(event) => setDepartment_Address(event.target.value)}  required />
                </div>
                <div className="flex items-start p-3">
                    <button type="submit" className="text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-white w-full sm:w-auto px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateEducation;