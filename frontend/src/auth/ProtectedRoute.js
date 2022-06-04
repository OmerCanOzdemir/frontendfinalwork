
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({children}) =>{

    const history = useHistory();

    const {currentUser} = useAuth();

    if(!currentUser){
        history.push("/login");
    }

    return children;
}

export default ProtectedRoute;