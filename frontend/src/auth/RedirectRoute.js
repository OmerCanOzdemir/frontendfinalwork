
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RedirectRoute = ({children}) =>{

    const history = useHistory();

    const {currentUser} = useAuth();

    if(currentUser){
        history.push("/");
    }

    return children;
}

export default RedirectRoute;