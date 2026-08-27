import { Link } from 'react-router-dom';

const NavMenu = () => {
return(
    <ul className='nav-menu'>
        <li>
            <Link className="link" to="/home">
                Home
            </Link>
        </li>
        <li>
            <Link className="link" to="/about">
                    About
            </Link>
        </li>
        <li>
            <Link className="link" to="/trips">
                My Trips
            </Link>
        </li>
        <li>
            <Link className="link" to="/list">
                Packing List
            </Link>
        </li>
    </ul>
)}

export default NavMenu;