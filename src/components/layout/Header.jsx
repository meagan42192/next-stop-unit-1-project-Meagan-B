import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import logo from '../../data/nextStopLogo';

const Header = () => {
    return (
        <header className="site-header">
            <div>
                <img
                    className='header-logo'
                    src={logo}
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