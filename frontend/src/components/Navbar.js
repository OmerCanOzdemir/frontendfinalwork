
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Navbar() {
    const history = useHistory();
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState(false);
    const [errorContent, setErrorContent] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await logout();
            setError(false);
        } catch (err) {
            setError(true);
            setErrorContent(err.message)
        }
        history.push({
            pathname: '/login',
            state: { successMessage: "U ben uitgelogd" }
        });
    }

    return (
        <div>
            <nav className="bg-indigo-500 border-gray-200 px-2 sm:px-4 py-2.5">
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    {currentUser && <div className="flex md:order-2">
                        <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800    font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Uitloggen</button>
                    </div>}

                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/" className="text-white block py-2 pr-4 pl-3 hover:text-black text-white-700 border-b border-white-100 hover:bg-black-50 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white-400 md:dark:hover:text-black dark:hover:bg-black-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-white-700" aria-current="page">Statistieken</Link>
                            </li>
                            <li>
                                <Link to="/users" className="text-white block py-2 pr-4 pl-3 hover:text-black text-white-700 border-b border-white-100 hover:bg-black-50 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white-400 md:dark:hover:text-black dark:hover:bg-black-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-white-700" aria-current="page">Gebruikers</Link>
                            </li> <li>
                                <Link to="/educations" className="text-white block py-2 pr-4 pl-3 hover:text-black text-white-700 border-b border-white-100 hover:bg-black-50 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white-400 md:dark:hover:text-black dark:hover:bg-black-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-white-700" aria-current="page">Opleidingen</Link>
                            </li> <li>
                                <Link to="/categories" className="text-white block py-2 pr-4 pl-3 hover:text-black text-white-700 border-b border-white-100 hover:bg-black-50 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white-400 md:dark:hover:text-black dark:hover:bg-black-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-white-700" aria-current="page">Categorieën</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {error && <div className="bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{errorContent}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                </span>
            </div>}
        </div>
    )
}

export default Navbar;