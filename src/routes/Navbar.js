import { Outlet } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <nav>
            <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default NavBar;