import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handelLogin = () => {
        setIsAuthenticated(true);
        navigate("/");
    };

    return(
        <>
        <h3>Login</h3>
        <button onClick={handelLogin}> Login to EcoTracker</button>
        </>
    )
}

export default Login;