import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-logo">
                <img
                    src="https://ik.imagekit.io/fbon0i47u/nextStopLogo.png" width="200" height="60"
                    alt="Next Stop logo"
                />
            </div>
            <nav className='navigation-header-menu'>
                <NavMenu />
            </nav>
                <Link
                    to={'/'}
                >
            <button className='sign-out-btn'>Sign Out</button>
            </Link>
        </header>
    );
};

export default Header;