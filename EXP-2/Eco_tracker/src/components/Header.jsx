import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <>
    <h2>EcoTracker</h2>

    <nav>

        <Link to ="/"> Dashboard</Link>
        <Link to ="/Logs"> Logs</Link>
        <Link to ="/Login"> Login</Link>
</nav>

</>
    );
}

export default Header;