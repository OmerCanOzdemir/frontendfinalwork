import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useAuth} from "../context/AuthContext"


function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const [errorContent, setErrorContent] = useState("");
    const history = useHistory();
    const {login,currentUser} = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login(email,password);
            setError(false);
            history.push("/");
        }catch(err){
          
            setError(true);
            setErrorContent(err.message);
        }
    }

    return (<div>
 {error && <div className="bg-red-100 border mb-5 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{errorContent}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                </span>
            </div>}
  
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                        Wachtwoord
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" value={password} onChange={(event) => setPassword(event.target.value)} type="password" required />

                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                        Inloggen
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;