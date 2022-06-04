import { useHistory } from "react-router-dom";
import GetRequest from "../../functions/GetRequest";

const Users = () => {

    const history = useHistory();
    const { data, isLoading, error } =GetRequest("https://localhost:7165/api/User");
    

    const push_to_details_page = (id) => {
        history.push(
            {
                pathname: "/user/" + id,
            }
        );
    };

    if (data) {
        return (
            <div className="container p-4">
                <div className="flex flex-col my-5">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead className="bg-indigo-500">
                                        <tr>
                                            <th scope="col" className="py-3 px-6  text-xs  tracking-wider text-left text-black uppercase">
                                                Naam
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Email adres
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Opleiding
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Details
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-slate-100 divide-y divide-gray-200">

                                        {data.users.map((user) => (

                                            <tr className="h-10  hover:bg-gray-200" key={user.id}>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{user.firstname} {user.lastname}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{user.email}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{user.education.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap"><button onClick={() => push_to_details_page(user.id)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }else if (isLoading) {
        return (
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p>Loading</p>
            </div>
        )
    } else if (error != null) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
        )
    }

}


export default Users;