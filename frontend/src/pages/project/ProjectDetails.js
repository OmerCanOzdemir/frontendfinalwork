import { useHistory, useParams } from "react-router-dom";
import GetRequest from "../../functions/GetRequest";




const ProjectDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = GetRequest("https://finalworkapi.azurewebsites.net/api/Project/" + id);
    const history = useHistory();

    const push_to_details_page = () => {
        history.push("/user/" + data.project.user.id);
    }
    console.log(data);

    if (data) {
        const created_date = data.project.created_Date.split("T")[0];

        return (
            <div className="container p-4 ">
                <div className="container mx-auto px-20 mt-10">

                    <div>
                        <div className="relative max-w-xl p-8 mx-auto mb-8 text-indigo-500 bg-white rounded-md shadow-2xl">
                            <div className="items-center text-center xs:flex xs:text-left xs:space-x-10">
                                <div className="mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-40 h-20 mr-3 -mt-1" viewBox="0 0 576 512"><path d="M147.8 192H480V144C480 117.5 458.5 96 432 96h-160l-64-64h-160C21.49 32 0 53.49 0 80v328.4l90.54-181.1C101.4 205.6 123.4 192 147.8 192zM543.1 224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480h447.1c12.12 0 23.2-6.852 28.62-17.69l96-192C583.2 249 567.7 224 543.1 224z" /></svg>
                                </div>
                                <div className="flex-1 leading-chillaxed">
                                    <div className="mb-4">
                                        <strong className="block text-lg">{data.project.title}</strong>
                                    </div>
                                    <ul>

                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>                                   Aangemaakt door         <a className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" onClick={push_to_details_page}>{data.project.user.firstname} {data.project.user.lastname}</a>
                                        </li>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                                Aangemaakt op {created_date}

                                            </div>
                                        </li>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                                Dit project heeft als category {data.project.category.name}

                                            </div>
                                        </li>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                                Dit project heeft {data.project.project_Users.length + 1} deelnemers

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-indigo-500 "></div>
                        </div>
                    </div>
                </div>
                <div className="mb-5 px-2">
                <h1 className="text-2xl mb-5">Beschrijving</h1>
                <p>{data.project.description}</p>
                </div>
                <div className="flex flex-col my-5">
                <h1 className="text-2xl  mb-5 px-2">Deelgenomen User aan dit project</h1>
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

                                        {data.project.project_Users.map((user) => (

                                            <tr className="h-10  hover:bg-gray-200" key={user.user.id}>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{user.user.firstname} {user.user.lastname}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{user.user.email}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{user.user.education.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap"><button onClick={() => push_to_details_page(user.user.id)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (isLoading) {
        return (
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p>Loading</p>
            </div>
        )
    }
    else if (error != null) {
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



export default ProjectDetails;