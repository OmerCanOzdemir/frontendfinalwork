import { useHistory, useParams } from "react-router-dom";
import GetRequest from "../../functions/GetRequest";




const UserDetails = () => {
    const { id } = useParams();
    const googleMapsUrl = "https://www.google.be/maps/place/";
    const history = useHistory();
    const { data, isLoading, error } = GetRequest("https://finalworkapi.azurewebsites.net/api/User/byId/" + id);
    

    const push_to_details_page = (id) => {

        history.push(
            {
                pathname: "/project/" + id,
            }
        );
    }

    if (data) {
        var interests = [];
        data.user.interests.forEach(element => {
            interests.push(element.category.name);
        });
        var joined_array = interests.join();
        console.log(data.user.created_Projects);
        return (
            <div className="container p-4 ">
                <div className="container mx-auto px-20 mt-10">

                    <div>
                        <div className="relative max-w-xl p-8 mx-auto mb-8 text-indigo-500 bg-white rounded-md shadow-2xl">
                            <div className="items-center text-center xs:flex xs:text-left xs:space-x-10">
                                <div className="mb-5">
                                    <svg className="inline-block w-40 h-20 mr-3 -mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" /></svg>
                                </div>
                                <div className="flex-1 leading-chillaxed">
                                    <div className="mb-4">
                                        <strong className="block text-lg">{data.user.firstname} {data.user.lastname}</strong>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                                </svg>
                                                <a className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href={`${googleMapsUrl}${data.user.education.department_Address}`} target="_blank" rel="noreferrer noopener">{data.user.education.name}</a>
                                            </div>
                                        </li>
                                        <li>
                                            <svg className="inline-block w-4 h-4 mr-3 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            <a className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href={"mailto:" + data.user.email}>{data.user.email}</a>
                                        </li>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Interesse in {joined_array} projecten

                                            </div>
                                        </li>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                                Heeft {data.user.created_Projects.length} project(en) aangemaakt.

                                            </div>
                                        </li>
                                        <li>
                                            <div className="inline-block h-12 -my-4 xs:h-auto">

                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                                </svg>
                                                Neemt deel in {data.user.joined_Projects.length + 1 } project(en).

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-indigo-500 "></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-5">
                    <h1 className="text-2xl mb-5 px-2">Aangemaakte Projecten</h1>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead className="bg-indigo-500">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Id
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Titel
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Category
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Aantal gebruikers in project
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Details
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-slate-100 divide-y divide-gray-200">

                                        {data.user.created_Projects.map((project) => (
                                            <tr className="h-10  hover:bg-gray-200" key={project.id}>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project.id}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project.title}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project["category"]["name"]}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{ project.project_Users.length + 1 }</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap"><button onClick={() => push_to_details_page(project.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button></td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col my-5">
                    <h1 className="text-2xl  mb-5 px-2">Deelgenomen Projecten</h1>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead className="bg-indigo-500">
                                        <tr>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Id
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Titel
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Category
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Aantal gebruikers in project
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs  tracking-wider text-left text-black uppercase">
                                                Details
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-slate-100 divide-y divide-gray-200">

                                        {data.user.joined_Projects.map((project) => (
                                            <tr className="h-10  hover:bg-gray-200" key={project.project.id}>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project.project.id}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project.project.title}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project.project["category"]["name"]}</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap">{project.project.project_Users.length +1  }</td>
                                                <td className="py-4 px-6 text-sm font-medium  whitespace-nowrap"><button onClick={() => push_to_details_page(project.project.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button></td>

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
    } else if (isLoading) {
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



export default UserDetails;